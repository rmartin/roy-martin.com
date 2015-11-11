import app from '../../app';

export default class IndexRouter extends Marionette.AppRouter{
    constructor(options) {
        super(options);
    }
    get appRoutes() {
        return {
            '': 'index'
        }
    }
}
