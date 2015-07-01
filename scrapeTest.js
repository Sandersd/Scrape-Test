Data = new Mongo.Collection('data');

if (Meteor.isClient) {

  Meteor.call('getData', function (error, result) {
    if(error)
      console.log(error);

    Session.set('data', result);

  });

  Template.main.helpers({
    data: function () {
      return Session.get('data');
    }
  });

}

if (Meteor.isServer) {
  Meteor.startup(function () {

    Meteor.methods ({
      getData: function() {
        websiteData = Scrape.website("https://twitter.com/DylanMSanders");
        var result = JSON.stringify(websiteData);
        console.log(result);
        return websiteData.title;
      }
    });

  });
}
