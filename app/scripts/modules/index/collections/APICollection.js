import Backbone from 'backbone';
import APIModel from '../models/APIModel.js';

export default class APICollection extends Backbone.Collection{
    get model(){
        return APIModel;
    }

    get url(){
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
