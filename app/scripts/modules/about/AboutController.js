{
  "version": 3,
  "sources": [
    "/Users/roymartin/Code/www/roy-martin/app/scripts/modules/about/AboutController.js"
  ],
  "names": [],
  "mappings": ";;;;;;;;;;;;0BAAuB,qBAAqB;;;;mBAC1B,WAAW;;yBACL,mBAAmB;;IAE9B,eAAe;aAAf,eAAe;8BAAf,eAAe;;;iBAAf,eAAe;;eACnB,iBAAG;;AAEJ,gBAAI,SAAS,GAAG,eALhB,SAAS,EAKsB,CAAC;AAChC,iBAPA,GAAG,CAOC,IAAI,CAAC,IAAI,CAAC,SAAS,CAAC,CAAC;SAC5B;;;WALQ,eAAe;;;QAAf,eAAe,GAAf,eAAe",
  "file": "/Users/roymartin/Code/www/roy-martin/app/scripts/modules/about/AboutController.js",
  "sourcesContent": [
    "import Marionette from 'backbone.marionette';\nimport {app} from '../../app';\nimport {AboutView} from './views/AboutView';\n\nexport class AboutController {\n    about() {\n        //render main template\n        var aboutView = new AboutView();\n        app.main.show(aboutView);\n    }\n}\n"
  ],
  "sourceRoot": ""
}