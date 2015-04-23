import app from '../../app';
import Marionette from 'backbone.marionette';

export class IndexRouter extends Marionette.AppRouter{
    constructor(options) {
        super(options);
    }
    get appRoutes() {
        return {
            '': 'index'
        }
    }
}
