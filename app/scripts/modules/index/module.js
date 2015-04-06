import Marionette from 'backbone.marionette';
import {IndexRouter} from './router';
import {IndexController} from './controller';

console.log(Marionette);

export class IndexModule extends Marionette.Module{

    initialize(){
        console.log('init');
    }

    onStart(){
        console.log('start');
    }

    onStop(){
        console.log('stop');
    }
}
