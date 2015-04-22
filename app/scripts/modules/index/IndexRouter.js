{
  "version": 3,
  "sources": [
    "/Users/roymartin/Code/www/roy-martin/app/scripts/modules/index/IndexRouter.js"
  ],
  "names": [],
  "mappings": ";;;;;;;;;;;;;;;;mBAAgB,WAAW;;;;0BACJ,qBAAqB;;;;IAE/B,WAAW;AACT,aADF,WAAW,CACR,OAAO,EAAE;8BADZ,WAAW;;AAEhB,mCAFK,WAAW,6CAEV,OAAO,EAAE;KAClB;;cAHQ,WAAW;;iBAAX,WAAW;;aAIP,YAAG;AACZ,mBAAO;AACH,kBAAE,EAAE,OAAO;aACd,CAAA;SACJ;;;WARQ,WAAW;GAAS,wBAAW,SAAS;;QAAxC,WAAW,GAAX,WAAW",
  "file": "/Users/roymartin/Code/www/roy-martin/app/scripts/modules/index/IndexRouter.js",
  "sourcesContent": [
    "import app from '../../app';\nimport Marionette from 'backbone.marionette';\n\nexport class IndexRouter extends Marionette.AppRouter{\n    constructor(options) {\n        super(options);\n    }\n    get appRoutes() {\n        return {\n            '': 'index'\n        }\n    }\n}\n"
  ],
  "sourceRoot": ""
}