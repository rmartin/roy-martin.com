import Backbone from 'backbone';
import {APIModel} from '../models/api.js';

export class APICollection extends Backbone.Collection{
    model(){
        return APIModel;
    }

    url(){
        return 'https://api-roy-martin.herokuapp.com/api/v1/all';
    }

    sync(method, collection, options) {
        options.dataType = "jsonp";
        return Backbone.sync(method, collection, options);
    }

    parse(results){
        return results.data;
    }
}
