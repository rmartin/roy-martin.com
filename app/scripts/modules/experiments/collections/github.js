define([
    'jquery',
    'backbone',
    'modules/experiments/models/github'
], function($, Backbone, CodePenModel) {
    'use strict';

    var CodePenCollection = Backbone.Collection.extend({
        model: CodePenModel,
        url: 'https://api.github.com/users/rmartin/repos',
        sync : function(method, collection, options) {
            options.dataType = "jsonp";
            return Backbone.sync(method, collection, options);
        },
        parse: function(results){
            return results.data;
        }

    });

    return CodePenCollection;
});
