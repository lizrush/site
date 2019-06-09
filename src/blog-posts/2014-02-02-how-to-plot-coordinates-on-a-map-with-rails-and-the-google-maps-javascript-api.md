---
title: 'Plotting coordinates: a simple gon gem tutorial'
path: '/blog/how-to-plot-coordinates-on-a-map-with-rails-and-the-google-maps-javascript-api/'
date_published: 2014-02-03T04:00:00.000Z
---

**How to plot coordinates on a map with Rails and the Google Maps JavaScript API**

This tutorial will walk a rails beginner through the process of how to plot coordinates on a google map. This method is quick and easy, and will be relatively pain free.

**Setup:**

First, add the gem <a href="https://github.com/gazay/gon">gon</a> to your gemfile:

![gemfile](/content/images/2014/Jul/gemfile.png)

What does gon do for you?

- It allows you to write data in your controller (or presenter or model) to a variable

- You can use the variable in your view by using data attributes to assign it to an object or by using javascript in the view.

- Then you can use the data in your javascript.

Find out more about using gon and passing data to javascript in [this railscast.](http://railscasts.com/episodes/324-passing-data-to-javascript)

(You'll see that I have included the awesome gem <a href="http://www.rubygeocoder.com">geocoder</a>. I used this gem to retrieve the coordinates of a visitor to my app via their IP addesss.)

Then be sure to bundle install after adding the gems to your gemfile.

**Using gon:**

Using gon is the simplest thing in the world. You merely assign some data to a variable with "gon."" as a prefix in your controller.

![gon.lat_long_array as a variable set in the controller](/content/images/2014/Jul/gonvariable.png)

As you can see, I used the same format as I did for the instance variables I will use in my view, only replacing the '@' with 'gon'.

In the Visitors model, I use the geocoder gem to assign latitude and longitude values to the object before saving to the database.

The geocoder documentation explains this well, but in order to plot these two separate values as one marker, we are going to want to have them as an array of arrays for each entry, like this: [[lat, long], [lat, long], [lat, long]...].

![method for lat long array](/content/images/2014/Jul/coordinatemethod.png)

As you can see, I am plucking out the latitude and longitude values of all Visitors and assigning those resulting arrays to varibles. Then I use the zip method to turn it into the array of arrays I need. Before returning the variable, be sure to delete any of the arrays if they include nil or a coordinate of "0.0".

This is sort of a long method; if I were to refactor it, I would probably start by moving the delete_ifs out to a separate method since their concerns are different from the previous lines that query the database.

**Now we're ready for javascript!**

We are going to use the <a href="https://developers.google.com/maps/documentation/javascript/">google maps javascript api</a> to plot our set of coordinates. You can find code samples in the offical documentation, but below is what I did:

![google maps javascript](/content/images/2014/Jul/javascript.png)

You can see on line 11 where I bring in the latitude and longitude array. I simply assign it to a variable in javascript so I can use it. To drop a pin, you have to create a new Marker object (line 16), which is where you will include options like animation and position. Because I was interested in plotting several pins on the map at the same time from that array of coordinates, I made a simple for loop to create all the individual markers.

Here's what it looks like on the page:

![google map with pin drops](/content/images/2014/Jul/mapplots.png)

Of course, depending on your use, you will probably want to change the map options to create a custom map for what you are doing. You can find out how to do such a thing in the google javascript api docs, which will also explain how to change the types of Markers (pins) or other options you have for your new map with plotted coordinates!

You can see this in action, along with my first attempts to use the canvas element over at [liz-newsletter.herokuapp.com](http://liz-newsletter.herokuapp.com/visitors), my Ada winter break project.
