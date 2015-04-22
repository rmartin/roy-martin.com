{
  "version": 3,
  "sources": [
    "/Users/roymartin/Code/www/roy-martin/app/scripts/vendor/radio.shim.js"
  ],
  "names": [],
  "mappings": ";;;;sBAAc,QAAQ;;;;AACtB,AAAC,CAAA,UAAS,IAAI,EAAE,OAAO,EAAE;AACvB,MAAI,OAAO,MAAM,KAAK,UAAU,IAAI,MAAM,CAAC,GAAG,EAAE;AAC9C,UAAM,CAAC,CAAC,qBAAqB,EAAE,gBAAgB,EAAE,QAAQ,CAAC,EAAE,OAAO,CAAC,CAAC;GACtE,MAAM,IAAI,OAAO,OAAO,KAAK,WAAW,EAAE;AACzC,UAAM,CAAC,OAAO,GAAG,OAAO,CAAC,OAAO,CAAC,qBAAqB,CAAC,EAAE,OAAO,CAAC,gBAAgB,CAAC,EAAE,OAAO,CAAC,QAAQ,CAAC,CAAC,CAAC;GACxG,MAAM;AACL,WAAO,CAAC,IAAI,CAAC,QAAQ,CAAC,UAAU,EAAE,IAAI,CAAC,QAAQ,CAAC,KAAK,EAAE,IAAI,CAAC,CAAC,CAAC,CAAC;GAChE;CACF,CAAA,YAAO,UAAS,UAAU,EAAE,KAAK,EAAE,CAAC,EAAE;AACrC,cAAY,CAAC;;AAEb,YAAU,CAAC,WAAW,CAAC,SAAS,CAAC,YAAY,GAAG,YAAY;AAC1D,QAAI,CAAC,WAAW,GAAG,CAAC,CAAC,MAAM,CAAC,IAAI,EAAE,aAAa,CAAC,IAAI,QAAQ,CAAC;AAC7D,QAAI,CAAC,OAAO,GAAG,CAAC,CAAC,MAAM,CAAC,IAAI,EAAE,SAAS,CAAC,IAAI,KAAK,CAAC,OAAO,CAAC,IAAI,CAAC,WAAW,CAAC,CAAC;GAC7E,CAAA;CACF,CAAC,CAAE",
  "file": "/Users/roymartin/Code/www/roy-martin/app/scripts/vendor/radio.shim.js",
  "sourcesContent": [
    "import _ from 'lodash';\n(function(root, factory) {\n  if (typeof define === 'function' && define.amd) {\n    define(['backbone.marionette', 'backbone.radio', 'lodash'], factory);\n  } else if (typeof exports !== 'undefined') {\n    module.exports = factory(require('backbone.marionette'), require('backbone.radio'), require('lodash'));\n  } else {\n    factory(root.Backbone.Marionette, root.Backbone.Radio, root._);\n  }\n}(this, function(Marionette, Radio, _) {\n  'use strict';\n\n  Marionette.Application.prototype._initChannel = function () {\n    this.channelName = _.result(this, 'channelName') || 'global';\n    this.channel = _.result(this, 'channel') || Radio.channel(this.channelName);\n  }\n}));\n"
  ],
  "sourceRoot": ""
}