{
  "version": 3,
  "sources": [
    "/Users/roymartin/Code/www/roy-martin/app/scripts/main.js"
  ],
  "names": [],
  "mappings": ";;;;mBAAkB,UAAU;;wBACP,UAAU;;;;2BACL,6BAA6B;;2BAC7B,6BAA6B;;AAEvD,iBAHQ,WAAW,EAGF,CAAC;AAClB,iBAHQ,WAAW,EAGF,CAAC;AAClB,KAPQ,GAAG,CAOP,KAAK,EAAE,CAAC",
  "file": "/Users/roymartin/Code/www/roy-martin/app/scripts/main.js",
  "sourcesContent": [
    "import {app} from './app.js';\nimport Backbone from 'backbone';\nimport {IndexModule} from './modules/index/IndexModule';\nimport {AboutModule} from './modules/about/AboutModule';\n\nnew IndexModule();\nnew AboutModule();\napp.start();\n"
  ],
  "sourceRoot": ""
}