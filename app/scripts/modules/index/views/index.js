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

                    vector = new THREE.Vector3();
                    vector.set( ( window.mouseX / window.innerWidth ) * 2 - 1, - ( window.mouseY / window.innerHeight ) * 2 + 1, 0.5 ); // z = 0.5 important!
                    vector.unproject( camera );
                    raycaster = new THREE.Raycaster();
                    raycaster.set( camera.position, vector.sub( camera.position ).normalize() );
                    intersects = _.uniq(raycaster.intersectObjects( objects, true ), false, function(p){return p.object.id;});


                    //when hovering over items, make them full circles, when hover off, revert them
                    if(intersects.length){
                        console.log(activeObjects)
                        if(typeof activeObjects[intersects[0].object.id] === "undefined"){


                            intersects[0].object.scale.x = 1.5;
                            intersects[0].object.scale.y = 1.5;
                            intersects[0].object.scale.z = 1.5;
                            // intersects[0].object.geometry.verticesNeedUpdate = true;
                            activeObjects[intersects[0].object.id] = intersects[0];
                        }
                    }else{
                        if(activeObjects.length !== 0){
                            for(var currentIndex in activeObjects){
                                var currentObj = activeObjects[currentIndex]

                                currentObj.object.scale.x = 1;
                                currentObj.object.scale.y = 1;
                                currentObj.object.scale.z = 1;
                                // currentObj.geometry.verticesNeedUpdate = true;
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


                        sphereArray[i] = {}
                            sphereArray[i].mesh = new THREE.Line(geometry, material);
                            sphereArray[i].mesh.position.set(this.getRandomNumber(),this.getRandomNumber(),0);
                            sphereArray[i].direction = {}
                            sphereArray[i].direction.x = that.getRandomNumber()/1000;
                            sphereArray[i].direction.y = that.getRandomNumber()/1000;
                            // sphereArray[i].direction.z = Math.abs(that.getRandomNumber()/1000);



                        // sphereArray[i].rotation = {}
                        // sphereArray[i].rotation.x = Math.abs(that.getRandomNumber()/1000);
                        // sphereArray[i].rotation.y = Math.abs(that.getRandomNumber()/1000);
                        // sphereArray[i].rotation.z = Math.abs(that.getRandomNumber()/1000);
                        sphereArray[i].mesh.dynamic = true;
                        scene.add( sphereArray[i].mesh );
                        objects.push(sphereArray[i].mesh);
                    }

                    camera.position.z = 10;

                    // initialize object to perform world/screen calculations
                    projector = new THREE.Projector();
                    var render = function() {
                        requestAnimationFrame(render);
                        for(var i=0; i<=sphereCount; i++){
                            sphereArray[i].mesh.position.x += sphereArray[i].direction.x;
                            sphereArray[i].mesh.position.y += sphereArray[i].direction.y;
                            // sphereArray[i].mesh.rotation.z += sphereArray[i].rotation.z;
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
