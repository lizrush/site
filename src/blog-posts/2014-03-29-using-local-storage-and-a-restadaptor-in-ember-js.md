---
title: Using Local Storage and REST Adaptor in Ember.js
path: '/using-local-storage-and-a-restadaptor-in-ember-js'
date_published: 2014-03-29T07:25:00.000Z
---

These last two weeks we have been working on a new project- building an online store. While we tried to do this as out first large rails app, the twist on this two week project was that we were also going to be learning the ember javascript framework! Because Ember's slogan is that it is a "framework for creating ambitious web applications", I decided that I would try using local storage for the first time in addition to our project's requirement to have the app hooked up to a rails app for our data.

This short walkthrough is going to assume some basic familiarity with ember. You should already have an application up an running with fixture data- this walk through is going to assume you already have an app ready to modify. You can follow the Ember guides tutorial to get up to speed <a href="http://emberjs.com/guides/">here.</a>

The first thing we are going to do to rewire our app is hook our application up with the REST Adaptor. In your main.js, place this code:

```javascript
var App = Ember.Application.create({})

App.Store = DS.Store.extend({
  adapter: DS.RESTAdapter.extend({
    host: 'http://localhost:3000',
  }),
})
```

What this does is gives your models all a default data source. Next, replace the host with your data source and remove all the fixture data from your models. All models will now pull data from the API you specificed as the host. Be sure that your API and your ember models all have the same object attributes. At this point, you should have the exact same app you had with fixture data, but now each model should return data from your API.

Before:

```javascript
App.Product = DS.Model.extend({
  name: DS.attr("string"),
  price: DS.attr("number"),
  description: DS.attr("string"),
  image: DS.attr("string"),
  category: DS.attr("string")
})

App.Product.Fixtures = [
	{ name: 'product one'
      price: 1000
      description: 'this is the first product'
      image: 'http://whatever.com/image.jpg'
      category: 'A'
      },
    { name: 'product two'
      price: 2000
      description: 'this is the second product'
      image: 'http://whatever.com/image2.jpg'
      category: 'B' }
```

After:

```javascript
App.Product = DS.Model.extend({
  name: DS.attr('string'),
  price: DS.attr('number'),
  description: DS.attr('string'),
  image: DS.attr('string'),
  category: DS.attr('string'),
})
```

Why should you now use local storage? Well, the reason I chose to use local storage was because I could. The second reason was because I thought it would provide an interesting way to implement a store cart where I would no longer need to call the API when a user adds items to their cart. In this store, we have Products, which come from the API and Items, which is what I am calling the products in a user's cart. In this use of local storage, we are going to create 'item' records in the client's local storage when they click "add to cart". This way, the user can add, remove, and change quantities of products in their cart without making calls back to the API (the former digital marketer in me would be annoyed by my reckless disregard for knowing which items customers are putting in their carts! - keep in mind this may be an interesting use of local storage, but for an actual product you will probably need to compensate for this).

Next, add the local storage adaptor to a model:

```javascript
App.ItemAdapter = DS.LSAdapter.extend({
  namespace: 'your_app_name_here',
})

App.Item = DS.Model.extend({
  product_id: DS.attr('string'),
  product_name: DS.attr('string'),
  product_avatar: DS.attr('string'),
  currentprice: DS.attr('number'),
  quantity: DS.attr('number'),
  subtotal: function() {
    return this.get('quantity') * this.get('currentprice')
  }.property('quantity', 'currentprice'),
})
```

As you can see above, I have added the first few lines defining the adaptor for Item so as to override the RESTAdaptor that we previously set up in main.js. By putting the adaptor code directly in the model's file, we have scoped it so that it will only apply to the Item model. If you're wondering how LSAdaptor is defined- well, that's the next step. Download the Local Storage adaptor from its source <a href="https://raw.github.com/rpflorence/ember-localstorage-adapter/master/localstorage_adapter.js"> here</a>.

Take that file and copy it into your application under the scripts directory. If you have an index.html that lists all the required scripts, be sure to add it there as well. This localstorage aware adaptor is what is going to talk to the client and create the records and relationships there. Be sure to peruse the code so you can see what's happening. This also will give you insight into what the REST adaptor is doing under the hood.

Now even if you had your app all pieced together correctly with fixture data and/or the REST adaptor, this will not work quite yet. You'll have to ensure that anywhere that you wish to create, update, modify, or delete something from your local storage, you must first specify the model that uses the adaptor. So in the example below, you'll see that when I want to add a product to my cart (in this case, creating a record in local storage), I actually must start out by saying this.store.find('item') so that ember knows to go look in the model for 'item'. And as we set before in the model, the REST adaptor is overwritten so that it uses the LSAdaptor.

```javascript
App.ProductRoute = Ember.Route.extend({
  model: function(params) {
    return this.store.find('product', params.product_id)
  },
  actions: {
    addToCart: function(product) {
      var store = this.store
      this.store
        .find('item')
        .then(function(items) {
          return items.find(function(item) {
            return item.get('product_id') === product.get('id')
          })
        })
        .then(function(item) {
          if (item) {
            item.incrementProperty('quantity')
            item.save()
          } else {
            var item = store.createRecord('item', {
              quantity: 1,
              currentprice: product.get('price'),
              product_name: product.get('name'),
              product_category: product.get('category'),
              product_id: product.get('id'),
            })
            item.save()
          }
        })
      this.transitionTo('items')
    },
  },
})
```

In the above example of the "addToCart" action for products, you can see two examples of where you have to tell the app where to look for Items. They are:

```javascript
 var store = this.store;
      this.store.find('item').then(function(items){
        return items.find(function(item){
          return item.get('product_id') === product.get('id')
        })
      }).then(function(item){
        if (item){
          item.incrementProperty('quantity');
          item.save();
```

and

```javascript
var item = store.createRecord('item', {
  quantity: 1,
  currentprice: product.get('price'),
  product_name: product.get('name'),
  product_category: product.get('category'),
  product_id: product.get('id'),
})
item.save()
```

These lines specify that the app has to use the local storage adaptor to find the Items records that we will be using. The first example finds any records that match the current product we are adding to our cart and increases the quantity, while the second example creates a new record in the client's local storage and saves it with the correct data from the product. In this way, we can play with data that comes both from a REST adaptor as well as the locally stored data in the client's browser.

And that's basically the overview of how to use both a REST adaptor and a local storage adaptor in an ember app! You could make all sorts of combinations, like local storage and fixture data, or fixture data and a REST adaptor. The important part is to remember to specify the adaptor in whichever model you want to be different from the default and to make your app go look for that model (and adaptor) before you try to modify the data therein. After you get the adaptors set up, it's just a matter of finding all those actions where you need to access that model's adaptor and making sure that it's specified so the action know where to look. Easy peasy!
