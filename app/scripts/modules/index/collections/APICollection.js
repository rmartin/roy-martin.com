{
  "version": 3,
  "sources": [
    "/Users/roymartin/Code/www/roy-martin/app/scripts/modules/index/collections/APICollection.js"
  ],
  "names": [],
  "mappings": ";;;;;;;;;;;;;;wBAAqB,UAAU;;;;wBACR,uBAAuB;;IAEjC,aAAa;aAAb,aAAa;8BAAb,aAAa;;;;;;;cAAb,aAAa;;iBAAb,aAAa;;aACb,YAAE;AACP,6BAJA,QAAQ,CAIQ;SACnB;;;aAEM,YAAE;AACL,mBAAO,iDAAiD,CAAC;SAC5D;;;eAEG,cAAC,MAAM,EAAE,UAAU,EAAE,OAAO,EAAE;AAC9B,mBAAO,CAAC,QAAQ,GAAG,OAAO,CAAC;AAC3B,mBAAO,sBAAS,IAAI,CAAC,MAAM,EAAE,UAAU,EAAE,OAAO,CAAC,CAAC;SACrD;;;eAEI,eAAC,OAAO,EAAC;AACV,mBAAO,OAAO,CAAC,IAAI,CAAC;SACvB;;;WAhBQ,aAAa;GAAS,sBAAS,UAAU;;QAAzC,aAAa,GAAb,aAAa",
  "file": "/Users/roymartin/Code/www/roy-martin/app/scripts/modules/index/collections/APICollection.js",
  "sourcesContent": [
    "import Backbone from 'backbone';\nimport {APIModel} from '../models/APIModel.js';\n\nexport class APICollection extends Backbone.Collection{\n    get model(){\n        return APIModel;\n    }\n\n    get url(){\n        return 'https://api-roy-martin.herokuapp.com/api/v1/all';\n    }\n\n    sync(method, collection, options) {\n        options.dataType = \"jsonp\";\n        return Backbone.sync(method, collection, options);\n    }\n\n    parse(results){\n        return results.data;\n    }\n}\n"
  ],
  "sourceRoot": ""
}