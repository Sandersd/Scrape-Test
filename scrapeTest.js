
if (Meteor.isClient) {

  Meteor.call('getData', function (error, result) {
    if(error)
      console.log(error);

    Session.set('data', result);

  });

  Template.result.helpers({
    title: function () {
      return Session.get('data').title;
    },
    description: function () {
      return Session.get('data').description;
    }
  });

}

if (Meteor.isServer) {
  Meteor.startup(function () {

    Meteor.methods ({
      getData: function() {
        websiteData = Scrape.website("https://twitter.com/DylanMSanders");    //Use Scrape.website with any URL
        console.log(JSON.stringify(websiteData));                             //Log text result
        return websiteData;                                                   //Return website's json
      }
    });

  });
}
