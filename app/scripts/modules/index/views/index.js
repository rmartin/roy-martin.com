define(['app', 'THREE', 'templates'], function(App, THREE, JST) {
    App.module('IndexApp', function(IndexApp, App, Backbone, Marionette, $, _) {

        //number of spheres to generate
        var sphereCount = 20;

        var scene, camera, renderer, sphereArray,projector;
        var objects = [];
        var activeObjects = {};
        var sphereArray = [];

        var vector = new THREE.Vector3();
        var raycaster = new THREE.Raycaster();
        var dir = new THREE.Vector3();
        var intersects;

        IndexApp.View = Marionette.ItemView.extend({
            template: JST['app/scripts/modules/index/templates/index.hbs'],
            className: 'view-content',
            initialize: function(){
                this.listenTo(window, 'mouseMove', this.getIntersections);
                this.listenTo(window, 'touchStart', this.getIntersections);
                this.listenTo(window, 'resize', this.getIntersections);
            },
            onBeforeRender: function() {
                //add title and class
                $('#header-title').html('<a href="http://thoughts.roy-martin.com">Thoughts</a> and <a href="#experiments">Experiments</a><br />by <a href="#about">Roy Martin</a>');
                $('#header-sub-title').html('');
                $('#header-attribution').html('');
                $('body').attr('class', '').addClass('indexView');
            },
            getRandomNumber: function(){
                // return Math.floor((Math.random() * 21) - 10);
                return (Math.random() * 11) -5;
            },
            getIntersections: function(){
                if($('.background-image canvas').length !== 0){

                    // find the unique intersections for the object based on the position of the mouse
                    vector = new THREE.Vector3();
                    vector.set( ( window.mouseX / window.innerWidth ) * 2 - 1, - ( window.mouseY / window.innerHeight ) * 2 + 1, 0.5 ); // z = 0.5 important!
                    vector.unproject( camera );
                    raycaster = new THREE.Raycaster();
                    raycaster.set( camera.position, vector.sub( camera.position ).normalize() );
                    intersects = _.uniq(raycaster.intersectObjects( objects, true ), false, function(p){return p.object.id;});

                    // when hovering over items, make them full circles, when hover off, revert them
                    if(intersects.length){
                        if(typeof activeObjects[intersects[0].object.id] === "undefined"){

                            // get active object and update scale and 'pause' the animation
                            var currentObject = sphereArray[intersects[0].object.id];

                            // increase the size of the circle on hover
                            currentObject.mesh.scale.x = 1.5;
                            currentObject.mesh.scale.y = 1.5;
                            currentObject.mesh.scale.z = 1.5;

                            //stop the animation on hover
                            currentObject.direction.x = 0;
                            currentObject.direction.y = 0;
                            activeObjects[intersects[0].object.id] = intersects[0];
                        }
                    }else{
                        if(activeObjects.length !== 0){
                            for(var currentIndex in activeObjects){
                                // get active object and update scale and 'pause' the animation
                                var currentObject = sphereArray[activeObjects[currentIndex].object.id];

                                // reset the scale
                                currentObject.mesh.scale.x = 1;
                                currentObject.mesh.scale.y = 1;
                                currentObject.mesh.scale.z = 1;

                                // resume the animation
                                currentObject.direction.x = this.getRandomNumber()/1000;
                                currentObject.direction.y = this.getRandomNumber()/1000;

                                // remove the item from the active hover state array
                                delete activeObjects[currentIndex];
                            }
                        }
                    }
                }
            },
            renderBackgroundImage: function(){
                var that = this;

                if($('.background-image canvas').length === 0){
                    scene = new THREE.Scene();
                    camera = new THREE.PerspectiveCamera(45, $('body').width()/$('body').height(), 0.1, 1000);

                    renderer = new THREE.WebGLRenderer({alpha: true});
                    renderer.setSize($('body').width(), $('body').height());
                    $('.background-image').html(renderer.domElement);

                    for(var i=0; i<=sphereCount; i++){

                        var geometry = new THREE.CircleGeometry(.5, 30);
                        geometry.vertices.shift();
                        geometry.dynamic = true;
                        var material = new THREE.LineBasicMaterial({wireframe: true, color: 0x5e5e5e});
                        var currentCircle = new THREE.Line(geometry, material);
                        currentCircle.position.set(this.getRandomNumber(),this.getRandomNumber(),0);

                        sphereArray[currentCircle.id] = {
                            'mesh' : currentCircle,
                            'direction': {
                                'x' : that.getRandomNumber()/1000,
                                'y' : that.getRandomNumber()/1000
                            }
                        }
                        scene.add(currentCircle);
                        objects.push(currentCircle);
                    }

                    camera.position.z = 10;

                    // initialize object to perform world/screen calculations
                    projector = new THREE.Projector();
                    var render = function() {
                        requestAnimationFrame(render);
                        for(var currentIndex in sphereArray){
                            sphereArray[currentIndex].mesh.position.x += sphereArray[currentIndex].direction.x;
                            sphereArray[currentIndex].mesh.position.y += sphereArray[currentIndex].direction.y;
                        }
                        renderer.render(scene, camera);
                    };

                    render();
                }
            },
            onRender: function() {
                ga('send', 'pageview');
                this.renderBackgroundImage();
            }
        });
    });
    return App.IndexApp.View;
});
