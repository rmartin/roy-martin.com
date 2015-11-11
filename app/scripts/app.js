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
