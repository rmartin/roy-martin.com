import AboutController from './AboutController.js';
import AboutRouter from './AboutRouter.js';


export default class AboutModule {
    constructor(){
        this.start();
    }

    start(){
        this.startMediator();
        this.startListeners();
    }

    stop(){
        this.stopMediator();
    }

    startMediator(){
        var aboutController = new AboutController();
        var aboutRouter = new AboutRouter({
            controller: aboutController
        });
    }

    startListeners(){
        //trigger a resize event for all views
        var visualizerChannel = Radio.channel('about');
    }

    stopMediator(){
        this.controller.stop();
    }
}
