{
  "version": 3,
  "sources": [
    "/Users/roymartin/Code/www/roy-martin/app/scripts/modules/index/IndexController.js"
  ],
  "names": [],
  "mappings": ";;;;;;;;;;;;0BAAuB,qBAAqB;;;;mBAC1B,WAAW;;6BACD,6BAA6B;;yBACjC,mBAAmB;;sBACV,wBAAwB;;IAA7C,eAAe;;IAEd,eAAe;aAAf,eAAe;8BAAf,eAAe;;;iBAAf,eAAe;;eACnB,iBAAG;AACJ,gBAAI,aAAa,GAAG,mBANpB,aAAa,EAM0B,CAAC;;AAExC,gBAAI,SAAS,GAAG,eAPhB,SAAS,CAOqB,EAAC,UAAU,EAAE,aAAa,EAAC,UAAU,EAAE,eAAe,EAAC,CAAC,CAAC;AACvF,iBAVA,GAAG,CAUC,IAAI,CAAC,IAAI,CAAC,SAAS,CAAC,CAAC;SAC5B;;;WANQ,eAAe;;;QAAf,eAAe,GAAf,eAAe",
  "file": "/Users/roymartin/Code/www/roy-martin/app/scripts/modules/index/IndexController.js",
  "sourcesContent": [
    "import Marionette from 'backbone.marionette';\nimport {app} from '../../app';\nimport {APICollection} from './collections/APICollection';\nimport {IndexView} from './views/IndexView';\nimport * as IndexVisualizer from './views/VisualizerView';\n\nexport class IndexController{\n    index() {\n        var apiCollection = new APICollection();\n\n        var indexView = new IndexView({collection: apiCollection,visualizer: IndexVisualizer});\n        app.main.show(indexView);\n    }\n}\n"
  ],
  "sourceRoot": ""
}