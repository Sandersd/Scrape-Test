
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
        websiteData = Scrape.website("https://twitter.com/DylanMSanders");    //Use Scrape.website with any URL
        console.log(JSON.stringify(websiteData));                             //Log text result
        return websiteData.title;                                             //Return website's title
      }
    });

  });
}
