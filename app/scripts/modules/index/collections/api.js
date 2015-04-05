import {$, _, Backbone, Marionette, app} from '../../../app.js';
import {APIModel} from '../models/api.js';

export var APICollection = Backbone.Collection.extend({
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
