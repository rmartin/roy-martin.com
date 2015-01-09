define(['app', 'modules/about/views/about'], function(App, Aboutview) {
    App.module('AboutApp', function(AboutApp, App, Backbone, Marionette, $, _) {

        AboutApp.Controller = Marionette.Controller.extend({
            about: function() {

                //render main template
                var aboutView = new AboutView();
                App.main.show(aboutView);

            }
        });
    });

    return App.AboutApp.Controller;
});
