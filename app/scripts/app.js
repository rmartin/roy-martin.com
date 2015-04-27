// Vendors
var $ = require('jquery');
var Backbone = require('backbone');
Backbone.$ = $;
var Marionette = require('backbone.marionette');

// app bootstrap
let app = new Marionette.Application();
app.addRegions({
    main: '#main-content'
});

app.on('start', function() {
    if (Backbone.history) {
        Backbone.history.start();
    }
});

export default app; 
