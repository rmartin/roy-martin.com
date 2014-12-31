define([
    'jquery',
    'backbone',
    'views/index'
], function ($, Backbone,IndexView) {
    'use strict';

    var IndexRouter = Backbone.Router.extend({
        initialize: function(){

        },

        routes: {
            '' : 'index'
        },

        index: function(){
            var indexView = new IndexView();
        }
    });

    return IndexRouter;
});
