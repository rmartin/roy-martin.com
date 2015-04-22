{
  "version": 3,
  "sources": [
    "/Users/roymartin/Code/www/roy-martin/app/scripts/modules/about/AboutModule.js"
  ],
  "names": [],
  "mappings": ";;;;;;;;;;;;iBAAc,QAAQ;;;;sBACR,QAAQ;;;;wBACD,UAAU;;;;0BACR,qBAAqB;;;;yBACtB,4BAA4B;;;;qBAChC,gBAAgB;;;;+BAEJ,mBAAmB;;2BACvB,eAAe;;IAG5B,WAAW;AACT,aADF,WAAW,GACP;8BADJ,WAAW;;AAEhB,YAAI,CAAC,KAAK,EAAE,CAAC;KAChB;;iBAHQ,WAAW;;eAKf,iBAAE;AACH,gBAAI,CAAC,aAAa,EAAE,CAAC;AACrB,gBAAI,CAAC,cAAc,EAAE,CAAC;SACzB;;;eAEG,gBAAE;AACF,gBAAI,CAAC,YAAY,EAAE,CAAC;SACvB;;;eAEY,yBAAE;AACX,gBAAI,eAAe,GAAG,qBAnBtB,eAAe,EAmB4B,CAAC;AAC5C,gBAAI,WAAW,GAAG,iBAnBlB,WAAW,CAmBuB;AAC9B,0BAAU,EAAE,eAAe;aAC9B,CAAC,CAAC;SACN;;;eAEa,0BAAE;;AAEZ,gBAAI,iBAAiB,GAAG,sBAAS,KAAK,CAAC,OAAO,CAAC,OAAO,CAAC,CAAC;SAC3D;;;eAEW,wBAAE;AACV,gBAAI,CAAC,UAAU,CAAC,IAAI,EAAE,CAAC;SAC1B;;;WA5BQ,WAAW;;;QAAX,WAAW,GAAX,WAAW",
  "file": "/Users/roymartin/Code/www/roy-martin/app/scripts/modules/about/AboutModule.js",
  "sourcesContent": [
    "import $ from 'jquery';\nimport _ from 'lodash';\nimport Backbone from 'backbone';\nimport Marionette from 'backbone.marionette';\nimport RadioShim from '../../vendor/radio.shim.js';\nimport Radio from 'backbone.radio';\n\nimport {AboutController} from './AboutController';\nimport {AboutRouter} from './AboutRouter';\n\n\nexport class AboutModule {\n    constructor(){\n        this.start();\n    }\n\n    start(){\n        this.startMediator();\n        this.startListeners();\n    }\n\n    stop(){\n        this.stopMediator();\n    }\n\n    startMediator(){\n        var aboutController = new AboutController();\n        var aboutRouter = new AboutRouter({\n            controller: aboutController\n        });\n    }\n\n    startListeners(){\n        //trigger a resize event for all views\n        var visualizerChannel = Backbone.Radio.channel('about');\n    }\n\n    stopMediator(){\n        this.controller.stop();\n    }\n}\n"
  ],
  "sourceRoot": ""
}