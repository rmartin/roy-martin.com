/*global define*/

define([
    'jquery',
    'backbone',
    'views/Home'
], function ($, Backbone,HomeView) {
    'use strict';

    var HomeRouter = Backbone.Router.extend({
        initialize: function(){

        },

        routes: {
            '' : 'home'
        },

        home: function(){
            var homeView = new HomeView();
        }
    });

    return HomeRouter;
});
