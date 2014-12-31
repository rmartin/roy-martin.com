define([
    'jquery',
    'backbone',
    'models/codepen'
], function($, Backbone, CodePenModel) {
    'use strict';

    var CodePenCollection = Backbone.Collection.extend({
        model: CodePenModel,
        url: 'https://ajax.googleapis.com/ajax/services/feed/load?v=1.0&q=http://codepen.io/roymartin/public/feed/',
        sync : function(method, collection, options) {
            options.dataType = "jsonp";
            return Backbone.sync(method, collection, options);
        },
        parse: function(results){
            // debugger;
            return results.responseData.feed.entries;
        }

    });

    return CodePenCollection;
});
