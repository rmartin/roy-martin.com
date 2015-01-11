define(['app', 'templates'], function(App, JST) {
    App.module('ExperimentApp', function(ExperimentApp, App, Backbone, Marionette, $, _) {

        ExperimentApp.LayoutView = Backbone.Marionette.LayoutView.extend({
            tagName: 'ul',
            className: 'small-block-grid-2 medium-block-grid-3 large-block-grid-4',
            template: JST['app/scripts/modules/experiments/templates/experiment.hbs'],
            initialize: function(){
                this.listenTo(window, 'resize', this.updateContentPadding);
            },
            regions: {
                codepen: "#codepen",
                github: "#github"
            },
            onBeforeRender: function() {
                //add title and class
                $('#header-title').html('Experiments');
                $('#header-sub-title').html('Experiments and code scribbles in web and mobile development.');
                $('#header-attribution').html('<a href="https://commons.wikimedia.org/wiki/File:Cirrus_Clounds.jpg#mediaviewer/File:Cirrus_Clounds.jpg" target="_blank" rel="nofollow">Cirrus Clounds</a> by <a href="//commons.wikimedia.org/wiki/User:Nissim_14" title="User:Nissim 14" target="_blank" rel="nofollow">Nissim Angdembay</a>')
                $('body').attr('class', '').addClass('experimentView');
            },
            updateContentPadding: function(){
                $('.main-content').css('margin-top', $('.background-image').height() + "px");
            },
            onRender: function() {
                ga('send', 'pageview');
                this.updateContentPadding();
            }
        });

    });
    return App.ExperimentApp.LayoutView;
});
