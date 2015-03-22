define(['app',
    'THREE',
    'THREECanvasRenderer',
    'templates'
], function(App, THREE, CanvasRenderer, JST) {
    'use strict';
    App.module('IndexApp', function(IndexApp, App, Backbone, Marionette, $, _) {

        //number of spheres to generate
        var sphereCount = 20,
            scene,
            sceneWidth = window.innerWidth,
            sceneHeight = window.innerHeight,
            sceneAspectRatio = (sceneWidth / sceneHeight),
            camera,
            cameraDist = 20,
            cameraFOV,
            cameraFOVWidth,
            cameraFOVHeight,
            headlight,
            renderer,
            projector,
            objects = [],
            activeObjects = {},
            asteroidArray = [],
            asteroidInitialScale = 0.5,
            vector = new THREE.Vector3(),
            raycaster = new THREE.Raycaster(),
            dir = new THREE.Vector3(),
            intersects,
            currentLines = [],
            currLine,
            currLineGeometry,
            currLineMaterial,
            apiMeshTypes = {
                'default': {
                    'name': '',
                    'material': new THREE.MeshLambertMaterial({
                        wireframe: true,
                        wireframeLinewidth: 8,
                        color: 0x5e5e5e,
                        ambient: 0x606060
                    })
                },
                'blog': {
                    'name': '',
                    'material': new THREE.MeshLambertMaterial({
                        wireframe: true,
                        wireframeLinewidth: 8,
                        color: 0xFC4C02,
                        ambient: 0x606060
                    })
                },
                'strava': {
                    'name': '',
                    'material': new THREE.MeshLambertMaterial({
                        wireframe: true,
                        wireframeLinewidth: 8,
                        color: 0xFC4C02,
                        ambient: 0x606060

                    })
                },
                'twitter': {
                    'name': '',
                    'material': new THREE.MeshLambertMaterial({
                        wireframe: true,
                        wireframeLinewidth: 8,
                        color: 0x3b5998,
                        ambient: 0x606060
                    })
                },
                'amazon': {
                    'name': '',
                    'material': new THREE.MeshLambertMaterial({
                        wireframe: true,
                        wireframeLinewidth: 8,
                        color: 0xab1b1c,
                        ambient: 0x606060
                    })
                }
            },
            apiMeshTypeKeys = _.keys(apiMeshTypes);

        IndexApp.Visualizer = (function() {

            var setCollection = function(config){
                this.collection = config.collection;
            }

            var getIntersections = function() {
                if ($('.background-image canvas').length !== 0) {

                    // find the unique intersections for the object based on the position of the mouse
                    vector = new THREE.Vector3();
                    vector.set((window.mouseX / window.innerWidth) * 2 - 1, -(window.mouseY / window.innerHeight) * 2 + 1, 0.5);
                    vector.unproject(camera);
                    raycaster = new THREE.Raycaster();
                    raycaster.set(camera.position, vector.sub(camera.position).normalize());
                    intersects = _.uniq(raycaster.intersectObjects(objects, true), false, function(p) {
                        return p.object.id;
                    });

                    // when hovering over items, make them full circles, when hover off, revert them
                    if (intersects.length) {
                        if (typeof activeObjects[intersects[0].object.id] === "undefined") {
                            var currentObject = asteroidArray[intersects[0].object.id];

                            // increase the size of the asteroid on hover
                            currentObject.mesh.scale.x = 2.5;
                            currentObject.mesh.scale.y = 2.5;
                            currentObject.mesh.scale.z = 2.5;

                            //stop the animation on hover
                            currentObject.direction.x = 0;
                            currentObject.direction.y = 0;
                            activeObjects[intersects[0].object.id] = intersects[0];
                        }
                    } else {
                        if (activeObjects.length !== 0) {
                            for (var i in activeObjects) {
                                // get active object and update scale and 'pause' the animation
                                var currentObject = asteroidArray[activeObjects[i].object.id];

                                // reset the scale
                                currentObject.mesh.scale.x = 1;
                                currentObject.mesh.scale.y = 1;
                                currentObject.mesh.scale.z = 1;

                                // resume the animation
                                currentObject.direction.x = _.random(-10, 10) / 1000;
                                currentObject.direction.y = _.random(-10, 10) / 1000;

                                // remove the item from the active hover state array
                                delete activeObjects[i];
                            }
                        }
                    }
                }
            }

            var createNewAsteroid = function() {
                var xPosition = _.random(cameraFOVWidth * -1, cameraFOVWidth),
                    yPosition = _.random(cameraFOVHeight * -1, cameraFOVHeight),
                    zPosition = 0,
                    xDirection = _.random(-10, 10) / 1000,
                    yDirection = _.random(-10, 10) / 1000,
                    zDirection = 0;

                //TODO: Currently randomly selected mesh types. Convert this to the API call to return a real type.
                var currentMeshType = apiMeshTypeKeys[_.random(0, apiMeshTypeKeys.length - 1)];
                var currAstroid = new THREE.Mesh(new THREE.SphereGeometry(asteroidInitialScale, 5, 5), apiMeshTypes[currentMeshType].material);
                currAstroid.position.set(xPosition, yPosition, zPosition);
                currAstroid.receiveShadow = true;
                currAstroid.castShadow = false;

                return {
                    'id': currAstroid.id,
                    'mesh': currAstroid,
                    'direction': {
                        'x': xDirection,
                        'y': yDirection,
                        'z': zDirection
                    },
                    'attributes': {
                        'positiveXDirection': (xDirection > 0),
                        'positiveYDirection': (yDirection > 0)
                    }
                }
            }

            var updateasteroidsPosition = function() {
                for (var currentIndex in asteroidArray) {
                    if (asteroidArray[currentIndex].attributes.positiveYDirection) {
                        if ((asteroidArray[currentIndex].mesh.position.y - asteroidInitialScale) > (cameraFOVHeight)) {
                            asteroidArray[currentIndex].mesh.position.y = ((cameraFOVHeight * -1) - asteroidInitialScale);
                        }
                    } else {
                        if ((asteroidArray[currentIndex].mesh.position.y + asteroidInitialScale) < (cameraFOVHeight * -1)) {
                            asteroidArray[currentIndex].mesh.position.y = ((cameraFOVHeight) + asteroidInitialScale);
                        }
                    }

                    if (asteroidArray[currentIndex].attributes.positiveXDirection) {
                        if ((asteroidArray[currentIndex].mesh.position.x - asteroidInitialScale) > (cameraFOVWidth)) {
                            asteroidArray[currentIndex].mesh.position.x = ((cameraFOVWidth * -1) - asteroidInitialScale);
                        }
                    } else {
                        if ((asteroidArray[currentIndex].mesh.position.x + asteroidInitialScale) < (cameraFOVWidth * -1)) {
                            asteroidArray[currentIndex].mesh.position.x = ((cameraFOVWidth) + asteroidInitialScale);
                        }
                    }

                    asteroidArray[currentIndex].mesh.position.x += asteroidArray[currentIndex].direction.x;
                    asteroidArray[currentIndex].mesh.position.y += asteroidArray[currentIndex].direction.y;

                    asteroidArray[currentIndex].mesh.rotation.x += asteroidArray[currentIndex].direction.x;
                    asteroidArray[currentIndex].mesh.rotation.y += asteroidArray[currentIndex].direction.y;
                }
            }

            var webglAvailable = function() {
                try {
                    var canvas = document.createElement('canvas');
                    return !!(window.WebGLRenderingContext && (
                        canvas.getContext('webgl') ||
                        canvas.getContext('experimental-webgl')));
                } catch (e) {
                    return false;
                }
            }

            var renderScene = function() {
                var that = this,
                    skybox = null,
                    skyboxImage = null,
                    skyboxImagePrefix = "images/background-spacescape_",
                    skyboxImageSuffix = ["right1", "left2", "top3", "bottom4", "front5", "back6"],
                    skyGeometry = null,
                    skyboxMaterialArray = [],
                    skyboxMaterial = null;

                if ($('.background-image canvas').length === 0) {
                    scene = new THREE.Scene();
                    //set camera and calculate FOV
                    camera = new THREE.PerspectiveCamera(45, sceneAspectRatio, 1, 1100);
                    camera.position.set(0, 0, cameraDist);
                    //set render engine and scene
                    //detect the appropriate rendering engine
                    if (webglAvailable()) {
                        renderer = new THREE.WebGLRenderer({
                            alpha: true,
                            antialias: true
                        });
                    } else {
                        renderer = new THREE.CanvasRenderer({
                            alpha: true,
                            antialias: true
                        });
                    }

                    updateWindowSize();
                    //renderer.setSize(window.innerWidth, window.innerHeight);
                    renderer.showMapEnabed = true;

                    // initialize object to perform world/screen calculations
                    projector = new THREE.Projector();

                    //render canvas to the background image
                    $('.background-image').html(renderer.domElement);

                    //add lighting
                    // scene.add(new THREE.AmbientLight(0x606060));
                    headlight = new THREE.PointLight(0x606060, 2, 100);
                    headlight.position.copy(camera.position);
                    scene.add(headlight);

                    //left / right side of canvas
                    headlight = new THREE.PointLight(0x606060, 2, 100);
                    headlight.position.set(-cameraFOVWidth, camera.position.y, 0);
                    scene.add(headlight);

                    headlight = new THREE.PointLight(0x606060, 2, 100);
                    headlight.position.set(cameraFOVWidth, camera.position.y, 0);
                    scene.add(headlight);

                    //top and bottom of canvas
                    //left / right side of canvas
                    headlight = new THREE.PointLight(0x606060, 2, 100);
                    headlight.position.set(camera.position.x, -cameraFOVHeight, 0);
                    scene.add(headlight);

                    headlight = new THREE.PointLight(0x606060, 2, 100);
                    headlight.position.set(camera.position.x, cameraFOVHeight, 0);
                    scene.add(headlight);

                    // add skybox to the scene

                    skyGeometry = new THREE.CubeGeometry( 1000, 1000, 1000 );
                    for(skyboxImage in skyboxImageSuffix){
                        skyboxMaterialArray.push( new THREE.MeshBasicMaterial({
                            map: THREE.ImageUtils.loadTexture( skyboxImagePrefix + skyboxImageSuffix[skyboxImage] + ".png" ),
                            side: THREE.BackSide
                        }));
                    }
                    skyboxMaterial = new THREE.MeshFaceMaterial( skyboxMaterialArray );
                    skybox = new THREE.Mesh( skyGeometry, skyboxMaterial );
                    scene.add( skybox );

                    //add asteroids to the scene
                    for (var i = 1; i <= this.collection.length; i++) {
                        var currAsteroid = createNewAsteroid();
                        asteroidArray[currAsteroid.id] = currAsteroid;
                        scene.add(currAsteroid.mesh);
                        objects.push(currAsteroid.mesh);
                    }

                    //render view for each animation frame
                    var render = function() {
                        requestAnimationFrame(render);
                        updateasteroidsPosition();
                        renderer.render(scene, camera);
                    };
                    render();
                }
            }

            var updateWindowSize = function() {
                sceneWidth = window.innerWidth,
                    sceneHeight = window.innerHeight,
                    sceneAspectRatio = window.innerWidth / window.innerHeight


                camera.aspect = sceneAspectRatio;
                camera.updateProjectionMatrix();

                renderer.setSize(window.innerWidth, window.innerHeight);
                cameraFOV = camera.fov * Math.PI / 180;
                cameraFOVHeight = 2 * Math.tan(cameraFOV / 2) * cameraDist;
                cameraFOVWidth = cameraFOVHeight * sceneAspectRatio;
                //adjust for half of the screen
                cameraFOVHeight = cameraFOVHeight / 2;
                cameraFOVWidth = cameraFOVWidth / 2;
            }

            return {
                getIntersections: getIntersections,
                renderScene: renderScene,
                updateWindowSize: updateWindowSize,
                setCollection: setCollection
            };
        });
    });
    return App.IndexApp.Visualizer;
});
