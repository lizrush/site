---
title: Using the rails jquery modal gem
path: '/blog/using-the-rails-jquery-modal-gem'
date_published: 2014-03-06T04:00:00.000Z
---

Yesterday I spent nearly four hours learning how to create a modal window that displayed a partial with jquery. Two weeks ago, I was pretty stoked to have done this very same thing, albiet with a gem. So today I am going to teach you how to avoid an afternoon filled with swearwords muttered under your breath and how to use the gem!

First, make sure you have the jquery-modal-rails and jquery-ui-rails gems in your gemfile.

![screenshot of gemfile](/content/images/2014/Jul/modal-gemfile.png)

The <a href='https://github.com/dei79/jquery-modal-rails'>jquery-modal-rails</a> gem is awesome because it does the bulk of the styling work for you. In order to make it work, you will need to add:

```
require jquery.ui.all
require jquery.modal
```

to both the **application.css** and **application.js** files in your assests directory. And that's basically the whole set up of the gem.

Next, you will need to set up the view to render the modal. This gem works by having the content in a div loaded in the html with the style setting "**display:none**", and then when you click a link, the gem handles the javascript necessary to toggle that div to be visible, inside the prestiled modal window. This is the sample code from the gem's readme:

![screenshot from gem's readme](/content/images/2014/Jul/modal-div.png)

You'll see that the div has an id which matches what is in the link_to_modal method. The gem provides link_to_modal so that you don't have to do any of the javascript or jquery! If you look in the gem's documentation, you'll also see that the gem supports forms so that all calls are made with ajax.

**What did this look like when all this code was written without the gem?:**

Here is the jquery to generate a modal window and open & close it:

![screenshot of jquery](/content/images/2014/Jul/modal-jquery.png)

And here is the css styling without the gem:

![screenshot of css](/content/images/2014/Jul/modal-css.png)

You can see why someone would want to avoid all that work if they are doing a quick project. The rails-jquery-modal gem is perfect for this scenario. Of course, if you have the time, it would be much cleaner and more customizable to write your modal from scratch. With our normal project sprint of two weeks from start to finish at Ada, we found that using this gem in [our project](http://thewormhole.herokuapp.com) made it much easier to get to more meaty and interesting code. Were I to have more time, I would love to redo this project's entire front-end, including removing this gem.
