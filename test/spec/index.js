define(function(require) {
    var IndexController = require('/scripts/modules/index/controllers/index.js'),
        Assert = require('../bower_components/assert/assert.js');


    describe('Index Module', function() {

        var indexController = new IndexController();

        it('should be true', function() {
            assert(true);
        });
    });
});
