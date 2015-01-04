define(['app', 'templates'], function(App, JST) {
    App.module('ThoughtApp.Twitter', function(Twitter, App, Backbone, Marionette, $, _) {

        Twitter.ItemView = Marionette.ItemView.extend({
            tagName: 'div',
            template: JST['app/scripts/modules/thoughts/templates/twitter.hbs'],
            onRender: function(){
                //load tweets
                !function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");
            }
        });

    });
    return App.ThoughtApp.Twitter.ItemView;
});
