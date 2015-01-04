define([
    'jquery',
    'backbone',
    'modules/thoughts/models/medium'
], function($, Backbone, MediumModel) {
    'use strict';

    var MediumCollection = Backbone.Collection.extend({
        model: MediumModel,
        url: 'https://ajax.googleapis.com/ajax/services/feed/load?v=1.0&q=https://medium.com/feed/@roy_martin',
        sync: function(method, collection, options) {
            options.dataType = "jsonp";
            return Backbone.sync(method, collection, options);
        },
        parse: function(results) {
            return results.responseData.feed.entries;
        }

    });

    return MediumCollection;
});
