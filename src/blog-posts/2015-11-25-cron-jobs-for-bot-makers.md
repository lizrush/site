---
title: Troubleshooting cron jobs for bot makers
path: '/cron-jobs-for-bot-makers'
date_published: 2015-11-25T17:07:00.000Z
---

Over the past few months I've really gotten into bots--I love stupid jokes and I'm a lazy programmer\*, so bot making is right up my alley! I was first inspired to make a bot after [Elizabeth Uselton](https://twitter.com/lizuselton), a fellow Ada cohort\[0] student & the better half of #TeamElizabeth, pranked me with her great bot [Kathy Butler](https://twitter.com/katherynebutler).

After waiting for the right idea to come along, I set out to make my very own bot: [Tweets As A Service](https://twitter.com/TWEETS_aaS). Luckily Elizabeth was there to help me and we had Kathy Butler as an example to work off of, so setting up and deploying the bot only took us two beers' worth of time at a Beer&&Code meetup.

Once we got the bot deployed, we tested it. I ssh'ed into my EC2 instance and ran the script. Almost instantly my bot spat out an idea:

<blockquote class="twitter-tweet" lang="en"><p lang="en" dir="ltr">Barking Up The Wrong Tree as a Service</p>&mdash; tweets as a service (@TWEETS_aaS) <a href="https://twitter.com/TWEETS_aaS/status/537824991614472192">November 27, 2014</a></blockquote> <script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

Unfortunately, it proved a bit ominous as over the next few days no matter what I did to try to get my bot tweeting automatically, it just wouldn't run.

---

As I've gotten more involved in the bot community online, a.k.a. being a #botALLY, I've realized that there are a lot of beginner programmers out there who want to make bots but don't have the UNIX familiarity to troubleshoot the set up around their bot. While this blog post really revolves around the set up you need to get your bot up and running, the truth of the matter is that many of these debugging suggestions are not exclusive to cron. This post will help cut through some of the cruft of the documentation of bash commands for those who are less comfortable on the command line but are ready to start writing programming projects like bots using tools such as cron.

The problem with trying to figure out why your cron job isn't working is that not only is the documentation notoriously terrible, but generally speaking it is written for people who are already familiar with bash commands. If you are a new programmer or aren't familiar with this sort of thing, reading the man pages doesn't get you far. Just give it a glance at [crontab.org](http://crontab.org). This link is the same content you get from the man pages. When I was looking online for troubleshooting help, it seemed that most people had simple syntax errors in their crontab file. While you think you may have figured out how to write the job and have it correctly formatted to run at the time you want, at some point you'll realize you need to debug. This post will give you an intro to crontab troubleshooting beyond simple syntax errors.

### What's the deal with cron(8) and crontab(5) and crontab(1)?

If you noticed in the man pages, you'll see a section that says "See also:" with crontab(5) and crontab(1). The number here corresponds to what section of the manual that page is from, which originates from the Unix Programmer's Manual by Thompson and Ritchie in 1971.

The sections of man pages:

```bash
1      User Commands
2      System Calls
3      C Library Functions
4      Devices and Special Files
5      File Formats and Conventions
6      Games et. Al.
7      Miscellanea
8      System Administration tools and Deamons
```

This should give you a hint if you want to investigate on your own, but I'm going to tell you the fast way to debug your cron job and give you some other tips to troubleshoot below.

## Step 1: Set the job to run every minute

Let's not wait around any longer than we have to. Swap out whatever schedule you had for your cron tab with `* * * * *`. This will run every minute, giving you enough time to switch tabs, check if things are working, scan for errors, skim twitter, but not so much time that you forget what you were debugging.

## Step 2: Are you in the right directory?

For some task, cron can execute the script from where ever. For a stand alone script I had written, I could just write my cron job like so:

```bash
07 4,16 * * * ruby /home/ubuntu/bots/test_bot.rb
```

I had no problems with this job, so I was confused when another bot I had written just wouldn't work. After checking the errors (next step!), I realized that for some things, you need cron to execute the job from within the correct directory. So, for example, let's say you have a pressing need to make a bot that once daily makes an empty commit with an empty message and then pushes to an [empty github repo](https://github.com/lizrush/-)...

Clearly you need the script to execute in the same place as the repository, so for cases such as these make sure you `cd` into the correct directory first. To join two commands together, use `&&`, a bash operator that will only run the second command if the first is successful. The below cron job can be read as "Once a day, navigate to `/home/ubuntu/bots/ghbot` and, if successful, run the `github-empty-commit-script` found in that directory":

```bash
@daily cd /home/ubuntu/bots/ghbot && ./github-empty-commit-script
```

While I prefer providing the full path to my command to be explicit, another means of solving this particular issue is to set the PATH just above your command like so:

```bash
PATH=/usr:/usr/bin:/bots/
07 4,16 * * * ruby test_bot.rb
```

If your bot requires environment variables, you can also define them in the crontab file but I bet you could find a nicer place to put those. Setting the directory on your PATH variable has some potential security concerns if other people can write to that directory or if you aren't sure that the permissions are set up properly. Specifying the full path to the script is safest route--security first!

## Step 3: Redirect your output

So what happens when your cron job fails? Chances are you'll be able to figure it out pretty quick, if only you could see the output.

Capture the standard output of your task to a file by using the `>` character:

```bash
* * * * *  ruby /home/ubuntu/bots/test_bot.rb > /tmp/test_bot.log
```

Using `>` to redirect your output to a log is a great way to check your errors, but it overwrites whatever was in that file. Use `>>` to append the output instead of overwrite!

`>` and `>>` have an implicit "1" in front. What does the one mean? Well 1 is short for the standard output (STDOUT), and 2 is standard error (STDERR). this is why you'll also see examples of crontab entries that look like this:

```bash
* * * * *  ruby /home/ubuntu/bots/test_bot.rb 2>>&1
```

The `2>>&1` is shorthand to append STDERR to STDOUT. This is going to be especially helpful as you troubleshoot so that you can see if your errors and output are changing as you fiddle with your configuration and script.

## Step 3.5: Check your mail

While I prefer changing where the output goes and looking at it manually, by default cron mails output from the command to the user. Change where cron sends the mail by setting the `MAILTO` environment variable:

```bash
MAILTO=liz@lizmrush.com
07 4,16 * * * ruby test_bot.rb
```

If your server is set up to send mail, it will email you the output at the address you set for the `MAILTO` variable. You might notice that sometimes when you log in to your server, it'll give you a notice along the lines of "You have new mail!", even if your server isn't sending emails. I have always ignored this because someone once told me I could. Turns out, I could have discovered my problem a lot sooner if I had checked that mail on my server. Check your mail on the server by navigating to `/var/mail/<username>`.

## Step 4: Restart cron

#### Which cron are you using?

There are actually two kinds of crontab files: user crontab and system crontab. On an ubuntu system, you might need to check if you are using the system crontab or the user's crontab.

If you can't access cron as a user, you might be listed in a `cron.deny` file. This file, which is in different locations based on your system, lists all users who cannot use cron. Check if you have one, if your user is listed, or just delete the file and let everyone use cron. Yay!

Sometimes when you are running in root's crontab, if you also use `sudo` with your command it can make your job fail. I don't know why, but since you're already running it as root you shouldn't need sudo anyhow.

#### If all else fails?

Check to make sure cron is actually running. Obviously if cron isn't running, you commands won't be scheduled to execute. This is more of a sanity check than anything else:

```bash
ps ax | grep cron
```

`ps ax` will find the processes currently running, pipe that result into grep and return any running process that has "cron" in it. This is a standard UNIX command but if you are unfamiliar with it, check out the man pages to learn more like we did with cron!

The output you see should look a little like this:

![ps ax | grep cron](/content/images/2015/Jun/Screen-Shot-2015-06-09-at-22-36-26-.png)

If you don't see the `cron` daemon running, try running the command `sudo service cron restart` (for ubuntu). Then repeat steps 1 through 3 once you see cron is working and your bot running!

<br>

---

Special thanks to [Elizabeth Uselton](https://twitter.com/lizuselton), for once making me think I was getting twitter popular, publicly informing me that, no, I was not, they were all just bots, and then teaching me to make my own. Thanks as well to [Rob Hanlon](https://twitter.com/ohwillie) for teaching me how to troubleshoot my cron jobs & [Hsing-Hui Hsu](http://twitter.com/SoManyHs) for editing this post.

\*By referring to myself as a "lazy programmer", I am being tongue-in-cheek & joking about how programmers will spend copious amounts of time on code to automate simple tasks that could be done quickly by hand.
