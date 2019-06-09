---
title: "How to Win a Hackathon: Lessons from Intel's IoT Roadshow"
path: '/blog/hackathon-lessons'
date_published: 2015-03-16T05:31:40.000Z
---

![sewing machine](http://blog.bemyapp.com/wp-content/uploads//2015/02/Seattle_Hackaton5.jpg)

This February, Intel hosted a hackathon here in Seattle as part of a series to promote their new Edison--a platform designed for rapid prototyping Internet of Things products. My co-worker [Jon Madison](http://twitter.com/jonmadison) from the Nordstrom Innovation Lab suggested we sign up for it, so I figured the hackathon was as good a place as any to try playing with hardware for the first time. Not one to do things half-assed, I decided to sign up as an "entrepreneurial dev" to pitch an idea. I wasn't really sure what I was doing, but I knew that it would be a good opportunity work on a skill set that I want to develop: in particular, I wanted to practice leadership skills & learn how to pitch. Not only did I get to do both of those things, but our team won first place with our project Ensemble, a full-body wearable that uses sensors attached to the body to generate biometric & motion based music generated with code!

Reflecting on this experience, I wanted to share some of the things I learned about hackathons and the strategies we used to help get us to first place (for those of you who've read my blog before, now's the time to refill that coffee--it's another long one & it'll take you about 15 minutes to read. New readers, don't fret, there's a TL;DR at the end):

### #1 - Prepare beforehand

When I signed up, I didn't have an idea in mind. When I talked to other people at the hackathon, they often commented on how they would love to pitch _someday_ but didn't have an idea _right now_. I think this might be the first mistake most of us make; we think that we have to already have an idea to participate when the reality is that the idea formation is part of the process itself.

Jon and I took a few hours one afternoon to come up with ideas with the help of a few other Lab devs who popped in to our brainstorming session. We started big: first we came up with broad product categories, then we figured out what we wanted to build based on which category we gravitated to the most--in this case, wearables. We sat around and threw out as many ideas as we could without judging them or even thinking about feasibility. Again, a natural pattern emerged in that we often talked about integrating music so we had a direction.

During this week, I spent time looking at blogs and other resources on wearables trends. Conveniently enough, an industrial designer in the Lab had a copy of the latest edition of Make magazine that not only featured an article about the Intel Edison, but also had a spread about wearables. Through this whole process, I started to notice a pattern that began to get under my skin and irritate me. I loved the intersection of fashion & technology, but I noticed a pattern where women's bodies were used as canvases. Any data creation was on passive, such as biometric data pulled from the body to reflect emotions and then displayed on the body. I was really disheartened by the feeling that women's bodies still primarily serve the function of decoration. While I believe this is a natural extension of our culture of objectifying women, it certainly isn't the type of tech I want to create.

Jon and I started coming up with wearable ideas that involved intentionally using action & motion to manipulate one's own biometrics and produce an external output. The body would no longer be passive, but in fact an instrument for expressing oneself in an active manner. We went back and forth a bit between two ideas: a "DJ dress" that would use sensor data to manipulate a playlist of music pulled from a third-party API and another garment that would use the sensor data to generate music from scratch. We ended up going with the latter and I began a second round of more focused research.

I spent about a week reading various papers and blog posts about people who had done work around distributed sensor-based music systems & interactive music environments. This might be overkill for someone who has experience in hardware, but I found it really helpful for me to see examples of other projects. Some papers I read included [The Architecture of Auracle: a Real-Time, Distributed, Collaborative Instrument](http://auracle.org/docs/nime04.pdf), [Inexpensive "Giveaway" Sensors for Large-Crowd Interaction](http://resenv.media.mit.edu/GiveawaySensors/), and [JamSpace: Designing A Collaborative Networked Music Space for Novices](http://www.nime.org/proceedings/2006/nime2006_118.pdf). Of course, being new to hardware and this kind of project meant that I wasn't able to understand everything that I read about, but it did help me figure out what kinds of questions to ask and where my knowledge gaps were.

Of course, this brings me to...

### #2 - Ask for help

One great thing about having a senior dev co-worker like Jon co-lead this hackathon team was that I had someone at my disposal to ask basic questions. Since he suggested the hackathon and sat next to me in the Lab, he was on the hook! Of course, I wanted to get the most help possible so we also took the opportunity to get feedback from the Intel folks at a workshop held at SoDo Makerspace two weeks before the hackathon. We weren't expecting such a large turnout but it was really motivating to be around so many other people excited to do the hackathon.

Since we knew there was going to be time for "Idea Pitch Examples + Mentorship", we brought along our notes hoping to get some feedback on if it was a good fit for the hackathon and if the Intel Edison would help get us where we wanted to be. What I didn't expect was that the pitch session was actually just pitching to everyone, and I certainly didn't expect to be picked out of the crowd by name to go first. But, what can you do other than get up on stage and go for it? Although I hadn't prepared a 60-second pitch, since we had already bounced around ideas and researched, it ended up being a pretty good. It wasn't perfect and I was more nervous than I normally am when speaking in front of crowds, but they laughed at my jokes & asked me to keep going when my time was up. I'm really grateful for the experience; not having time to get nervous or over prepare left me in the perfect position to take that first step in learning how to pitch.

After the pitch session, we got a chance to talk to Intel developer evangelists about our idea and get some feedback. I was really excited about this opportunity to get feedback and iterate on the pitch and idea; but I found that I had to stop the people I was talking to multiple times to get them to back up. Before this hackathon, I didn't even know what a microcontroller was. One thing that can be hard as someone new to tech and coding is that you often have to build up your vocabulary in ways others take for granted. For example, when people try to explain things with acronyms or terms that are basic vocabulary for that domain, sometimes you really do have to just give yourself permission to ask dumb questions. I don't believe in that adage of "there are no dumb questions" because let me tell you, I definitely ask some dumb questions from time to time. Of course, asking dumb questions is the first step to asking complex questions.

One of my main concerns was that even if we could get data back from the suit, I had no idea how to turn that into something that sounded musical. I had messed around with some Web Audio API browser code, but knew that my experience was insufficient to figure out my own knowledge gaps. Like most beginners, I was frustrated by my own lack of vocabulary to even describe what I wanted to make. So I shot a quick email to my friend [David Balatero](https://twitter.com/dbalatero), with whom I got the chance to work during my Ada Developers Academy internship at Substantial last summer and whose band [netcat](http://www.netcat.co) uses computer generated sounds and instruments in addition to conventional instruments. I poked around their code, since I knew they somehow turned data into something that sounded much more like music than any noises I've ever coded (or made in any of my terrible teen punk bands for that matter). It quickly became apparent that I was in over my head and needed some guidance. David helped me with what I believe was one of the most fundamental elements to our success: scoping our project to a manageable MVP. He helped me break down what each different part of the project would need to do and how to connect those parts. I knew there'd be a lot that I didn't know, but seeing it outlined like that put me right up next to that "OhshitwhatdidIgetmyselfintoIcan'tpullthisoff" anxiety--an anxiety that used to make me nervous, but I now find exciting. I then asked the most important question, which was simply "What do you think I can do given the constraints?". With my limited knowledge and the fact that it was only a two day hackathon, the answer was about 1/3 of the outline he wrote. Rather than being a disheartening response, it allowed me to adjust my expectations and plan accordingly.

### #3 - Recruit people smarter than you

Before the hackathon, I asked other rad devs I knew who might be interested in participating to join my team. Unfortunately most of them were unable to get the time off work to come to a two day hackathon in the middle of the week. The timing caused the hackathon to skew to be more students & a few lucky tech workers with companies that allow them to participate in community events. This made recruiting before the hackathon quite difficult; lots of people were interested, but few were able to commit and understandably so.

I did luck out by tweeting that I had signed up to pitch and getting a reply from [Diane Kerstein](https://twitter.com/DianeKerstein), a recent computer science grad from UW Bothell who I had never met but who was looking for a team to join. I wagered that there'd be few women at the hackathon, so I immediately jumped on the opportunity to try to convince her to join us. I'm so thankful that she did! Diane produced great code and helped us build a feature that we hadn't thought of before the hackathon.

During the hackathon, Jon and I split up during the time set aside for forming teams and were able to talk with a lot of different participants. We had a lot of interest and were able to recruit several students who were at the hackathon as part of their coursework. We ended up with a really great team--about half professional developers and half students. We were about 2/3 male, 1/2 white, and 1/3 ESL speakers. More diverse than your average tech company!

### #4 - Read the Terms & Conditions

This might seem kind of ridiculous to some, but I actually did print out the terms & conditions for the hackathon. The original reasoning behind this was that Jon and I wanted to make sure there wouldn't be anything weird about our IP rights if we did something fashion related, especially since this hackathon was going to be during our working hours at the Nordstrom Innovation Lab (though in the end, I left Nordstrom the week prior to the hackathon and began working for [Siren](http://siren.mobi)).

Turns out, having the T&C on hand is really helpful! I referenced it several times during planning and while explaining to teammates why we were doing the things we were doing. We were doing the things we were doing because they were the things we would be judged on according to that document. We got the criteria and knew how they were weighted, so I was able to play to that as I thought about the final pitch and project documentation. I knew I had to hit key points about how we integrated Intel products, how we leveraged sensors & cloud integration, as well as potential market applications for our project. If you empower yourself by knowing what the judges are looking for, you can give it to them before they ask for it.

### #5 - Facilitate teamwork

When we first got to Startup Hall, I made sure to scope out the space so I could post up at a large table. I also knew I wanted to be away from the main action so we could work with fewer interruptions. Luckily there was a giant table tucked away in a corner past the women's bathroom--it was perfect: it had lots of table top space, it was in a low-traffic area, and most importantly we had access to bare walls.

While my teammates were at the workshops on how to get their Edisons up and running, I took an hour to set up our project management tool: a cross between a Trello & a kanban board on the wall with each task on a half sheet of paper.

![kanban at the hackathon](/content/images/2015/Mar/IMG_4068.JPG)

Having the board helped keep us on track and made it easy to check on the status of work. I broke up the work into tasks based on whether they were hardware, garment, code, or other so that we could easily split up the work. Having these well-defined tasks and the board helped us keep track of everything we needed to do, but more importantly it helped Jon and I delegate work. The team was such a fantastic group and all of them were willing to get behind the idea and pick up work at the pace they wanted.

This is the point where I tell you my biggest secret about this project: I didn't touch a single line of code during the hackathon.

It's not that I didn't want to code; in fact, I was actually a little bit frustrated that I didn't get the chance to write anything. I only opened up the Edison dev kit that Intel gave out so we could cannibalize the 4 inch wires and solder them to another kit's wires for more length, but I didn't get the chance to get my Edison up and running. I still managed to keep myself in the loop by looking at our kanban board and checking in with my teammates that were writing code. Being able to trust that they were finishing the tasks they picked up allowed me the time to finish the garment construction.

Much to my surprise, I spent a lot of time running interference on interruptions. We would often have other attendees stop by to check out what we were doing, though the biggest interruptions were actually from dev evangelists and hackathon organizers. I took it as a great compliment that they were curious about us and the project, but the downside to this was that it prevented us from getting work done--it took me about half a day to figure it out, but after overhearing one of my teammates complain that they couldn't code with the interruptions I realized that I could help them by fielding all those questions. I would scan the room every few minutes and try to be the first person to make eye contact with passersby in order to become the person that was interrupted instead of my team.

At first I was worried that would come across as bossy with all the project management or that I wasn't really contributing meaningfully, but now I believe that defining & delegating the work from the very start of the hackathon is the biggest takeaway & key to our success as a team!

### #6 - Tell a story

While at some hackathons the focus is more about building cool projects or products, at any hackathon where there are pitches and judging, a key piece of the project has to be marketing. I know that's not often considered the cool part of product development, if it's even thought of at all during a hackathon. But since I have a background in marketing, I figured we might as well use all the tools in our toolbox.

Many of the other pitches focused on the 'what' of their projects, but not necessarily the 'why'. Having a story to tell and an explanation for the inspiration makes it a lot easier for people to get behind you and your project. It helps if you remember middle-school English class basics on story telling: you have an exposition, rising action, a climax, falling action, & conclusion. The story you tell in your pitch should cover the exposition and do some foreshadowing, while the rising action is basically what you are going to figure out during the hackathon. You might be thinking that the demo is the conclusion to the story, but in fact it is the climax--we still need to fill in the story after the climax. If you help the audience and judges think about the future of your project, you are allowing them to draw their own conclusions with their imagination. This means having ideas for potential applications for your technology or a solid plan for furthering the product.

I've already touched on the idea of looking at the judging criteria as you plan your project, but there's another big piece to keep in mind: hackathons are really just giant promotional events when they are sponsored by a company. Because of this, I made sure that we were a highly visible team. I took every opportunity to promote the project from the very start, such as agreeing to be interviewed for promotional videos. Dev evangelist [Rex St. John](https://twitter.com/rexstjohn) made a [promo video at the workshop](https://www.youtube.com/watch?v=5brjj2tGxTA) prior to the hackathon and he also filmed a short interview about Ensemble some of our team mid-hackathon which you can see [here](https://www.youtube.com/watch?v=Z2xqQjhWkhk). In addition to these videos, I tweeted about the progress of our project and made sure to use the hackathon's hashtags and include photos. This played into our storytelling at the same time as creating a good amount of buzz about Ensemble. It feels a little silly to think of tweeting as part of the hackathon work, but when you think of it as a mini-version of product development, it would be a mistake to leave out marketing!

### Pain Points & What's Next

I had two main pain points in this whole process that I wanted to share. The first was that many people seemed unwilling to let me be a beginner. I am extremely open about what I don't know and asking questions, so when I say "I don't know anything about microcontrollers" and the response I get back is an unsolicited pep talk along the lines of "you know more than you think", it's incredibly frustrating. When I say I don't know about a thing, it's because I really don't or am giving myself permission to ask those "dumb questions" as a complete beginner. While I appreciate the sentiment behind wanting to boost a beginner's confidence, sometimes when someone says they don't know something, it's not impostor syndrome. Sometimes they really just don't know! If you want to help a beginner, remember that the solution to "I don't know" isn't usually a pep talk, it's more often than not just sharing your knowledge with a touch of empathy.

The second, and very large, pain point I ran into was the fact that I ended up wearing a skin-tight catsuit at a hackathon. It was literally painful in the sense that I glued pieces of elastic to my body and I couldn't pee for 6 hours, but more importantly it was very painful for me to receive such unwanted sexual attention. Despite all my feminist posturing about challenging the objectification of women and having a critical eye about the use of our bodies in tech, I failed to anticipate what the experience might be like for myself. I was totally blindsided by the direct come-ons and comments about my body. I thought I was just making a cool sci-fi inspired catsuit with sick vibes; it hadn't crossed my mind that men would approach me to say things like "You look sexy as hell" right before demos. Unfortunately I felt like I wasn't really in the position to take a significant chunk of time out of my day to report those comments to the hackathon organizers because I was too busy trying to actually build something. I didn't even have time to process those feelings in the moment so I just texted my frustrations to a friend, compartmentalized, and moved on so I could continue to participate in the hackathon.

Despite those pain points, I'm really glad I participated in the hackathon. It's really fucking cool and empowering to go from knowing nothing about hardware to leading the first place team at a hardware hackathon! We even got a shoutout on the [Intel Software Blog](https://software.intel.com/en-us/blogs/2015/02/24/intel-iot-roadshow-hits-the-road-in-seattle) and a mention in the [Seattle Times](http://www.seattletimes.com/business/technology/hardware-haven/). While it was a pretty great MVP, my plan over the next few months is to rebuild the garment using better materials, figure out how to optimize the hardware, and get to the point where I can push out data for artists to manipulate and use in experimental music.

My goals for the Intel IoT Roadshow hackathon were to learn about the Intel Edison, have fun creating the MVP, and collaborate with other developers--I think it's safe to say that our team hit and exceeded all of those goals. I'm honored to have worked with such a great team and incredibly proud of our hard work!

Look at all these happy faces!!

![winning team at startup hall](/content/images/2015/Mar/10995068_935139813187198_1551292291_n.jpg)

###The TL;DR on how to win a hackathon:

1. Prepare beforehand
   a. Define your goals of participation
   b. Do research
   c. Define work to be done at the hackathon

2. Ask for help
   a. Go to workshops
   b. Ask dumb questions
   c. Get expert advice on scope & implementation

3. Recruit people smarter than you
   a. Beforehand
   b. At the hackathon

4. Read the terms & conditions
   a. Hit each point on the judging criteria
   b. Anticipate questions to prepare answers

5. Facilitate teamwork
   a. Delegate, delegate, delegate
   b. Trust your team
   c. Intercept distractions

6. Tell a story
   a. Define the idea & inspiration
   b. Help people imagine the future
   c. Self-promote

---

Thanks to Startup Hall for the [team photo](https://twitter.com/startup_hall/status/566052720537513985) and to [BeMyApp](http://blog.bemyapp.com/the-2015-intel-iot-roadshow-kicks-off-strong-in-seattle/) for the picture of my travel sewing machine. Check out their album of hackathon photos [here](https://www.flickr.com/photos/bemyapp/sets/72157648448898863/).
