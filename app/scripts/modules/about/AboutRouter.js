import app from '../../app';

export default class AboutRouter extends Marionette.AppRouter{
    constructor(options) {
        super(options);
    }
    get appRoutes() {
        return {
            'about' : 'about'
        }
    }
}
