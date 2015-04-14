import Backbone from 'backbone';
import {APIModel} from '../models/api.js';

export default class APICollection extends Backbone.Collection{
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
