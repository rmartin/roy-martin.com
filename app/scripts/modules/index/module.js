import Marionette from 'backbone.marionette';
import {IndexRouter} from './router';
import {IndexController} from './controller';

export class IndexModule extends Marionette.Module{

    initialize(){

    }

    onStart(){
        this.startMediator();
    }

    onStop(){
        this.stopMediator();
    }

    startMediator(){
        var indexController = new IndexController();
        var indexRouter = new IndexRouter({
            controller: indexController

        });
    }

    stopMediator(){
        this.controller.stop();
    }
}
