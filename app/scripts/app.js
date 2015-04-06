// Vendors
var $ = require('jquery');
var Backbone = require('backbone');
Backbone.$ = $;
var Marionette = require('backbone.marionette');

// app bootstrap
export var app = new Marionette.Application();
app.addRegions({
    main: '#main-content'
});
