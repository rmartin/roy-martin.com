define([
    'jquery',
    'backbone',
    'modules/index/models/api'
], function($, Backbone, APIModel) {
    'use strict';

    var APICollection = Backbone.Collection.extend({
        model: APIModel,
        url: 'https://api-roy-martin.herokuapp.com/api/v1/all',
        sync : function(method, collection, options) {
            options.dataType = "jsonp";
            return Backbone.sync(method, collection, options);
        },
        parse: function(results){
            return results.data;
        }

    });

    return APICollection;
});
