import $ from 'jquery';
import _ from 'lodash';
import Backbone from 'backbone';
import Marionette from 'backbone.marionette';
import RadioShim from '../../vendor/radio.shim.js';
import Radio from 'backbone.radio';

import {AboutController} from './controller';
import {AboutRouter} from './router';


export class AboutModule extends Marionette.Module{

    onStart(){
        this.startMediator();
        this.startListeners();
    }

    onStop(){
        this.stopMediator();
    }

    startMediator(){
        console.log(AboutController)
        var aboutController = new AboutController();
        var aboutRouter = new AboutRouter({
            controller: aboutController
        });
    }

    startListeners(){
        //trigger a resize event for all views
        var visualizerChannel = Backbone.Radio.channel('about');
    }

    stopMediator(){
        this.controller.stop();
    }
}
