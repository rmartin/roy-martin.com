{
  "version": 3,
  "sources": [
    "/Users/roymartin/Code/www/roy-martin/app/scripts/modules/about/views/AboutView.js"
  ],
  "names": [],
  "mappings": ";;;;;;;;;;;;;;iBAAc,QAAQ;;;;sBACR,QAAQ;;;;wBACD,UAAU;;;;0BACR,qBAAqB;;;;wBAEvB,4BAA4B;;;;IAEpC,SAAS;aAAT,SAAS;8BAAT,SAAS;;;;;;;cAAT,SAAS;;iBAAT,SAAS;;aACN,YAAG;AACX,yCAAgB;SACnB;;;aACY,YAAG;AACZ,mBAAO,cAAc,CAAC;SACzB;;;aACU,YAAE;AACT,mBAAO,IAAI,CAAC;SACf;;;aACU,YAAG;AACV,mBAAO;AACH,sBAAM,EAAE,SAAS;aACpB,CAAA;SACJ;;;eACa,0BAAG;;AAEb,2BAAE,eAAe,CAAC,CAAC,IAAI,CAAC,OAAO,CAAC,CAAC;AACjC,2BAAE,mBAAmB,CAAC,CAAC,IAAI,CAAC,uEAAuE,CAAC,CAAC;AACrG,2BAAE,qBAAqB,CAAC,CAAC,IAAI,CAAC,gSAAgS,CAAC,CAAA;AAC/T,2BAAE,MAAM,CAAC,CAAC,IAAI,CAAC,OAAO,EAAE,EAAE,CAAC,CAAC,QAAQ,CAAC,gBAAgB,CAAC,CAAC;SAC1D;;;eAEO,oBAAG;AACP,cAAE,CAAC,MAAM,EAAE,UAAU,CAAC,CAAC;SAC1B;;;WAzBQ,SAAS;GAAS,wBAAW,QAAQ;;QAArC,SAAS,GAAT,SAAS",
  "file": "/Users/roymartin/Code/www/roy-martin/app/scripts/modules/about/views/AboutView.js",
  "sourcesContent": [
    "import $ from 'jquery';\nimport _ from 'lodash';\nimport Backbone from 'backbone';\nimport Marionette from 'backbone.marionette';\n\nimport template from '../templates/AboutView.hbs';\n\nexport class AboutView extends Marionette.ItemView {\n    get template() {\n        return template;\n    }\n    get className() {\n        return 'view-content';\n    }\n    get tagName(){\n        return 'ul';\n    }\n    get regions() {\n        return {\n            strava: \"#strava\"\n        }\n    }\n    onBeforeRender() {\n        //add title and class\n        $('#header-title').html('About');\n        $('#header-sub-title').html('I am a developer, technical leader, entrepreneur and student of life.');\n        $('#header-attribution').html('<a href=\"https://commons.wikimedia.org/wiki/File:Cirrus_Clounds.jpg#mediaviewer/File:Cirrus_Clounds.jpg\" target=\"_blank\" rel=\"nofollow\">Cirrus Clounds</a> by <a href=\"//commons.wikimedia.org/wiki/User:Nissim_14\" title=\"User:Nissim 14\" target=\"_blank\" rel=\"nofollow\">Nissim Angdembay</a>')\n        $('body').attr('class', '').addClass('experimentView');\n    }\n\n    onRender() {\n        ga('send', 'pageview');\n    }\n}\n"
  ],
  "sourceRoot": ""
}