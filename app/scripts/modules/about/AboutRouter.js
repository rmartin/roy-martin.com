{
  "version": 3,
  "sources": [
    "/Users/roymartin/Code/www/roy-martin/app/scripts/modules/about/AboutRouter.js"
  ],
  "names": [],
  "mappings": ";;;;;;;;;;;;;;;;mBAAgB,WAAW;;;;0BACJ,qBAAqB;;;;IAE/B,WAAW;AACT,aADF,WAAW,CACR,OAAO,EAAE;8BADZ,WAAW;;AAEhB,mCAFK,WAAW,6CAEV,OAAO,EAAE;KAClB;;cAHQ,WAAW;;iBAAX,WAAW;;aAIP,YAAG;AACZ,mBAAO;AACH,uBAAU,OAAO;aACpB,CAAA;SACJ;;;WARQ,WAAW;GAAS,wBAAW,SAAS;;QAAxC,WAAW,GAAX,WAAW",
  "file": "/Users/roymartin/Code/www/roy-martin/app/scripts/modules/about/AboutRouter.js",
  "sourcesContent": [
    "import app from '../../app';\nimport Marionette from 'backbone.marionette';\n\nexport class AboutRouter extends Marionette.AppRouter{\n    constructor(options) {\n        super(options);\n    }\n    get appRoutes() {\n        return {\n            'about' : 'about'\n        }\n    }\n}\n"
  ],
  "sourceRoot": ""
}