define(['app', 'THREE', 'templates'], function(App, THREE, JST) {
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
            currentIndex,
            currentObject,
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
                        ambient: 0x000000,
                        emissive: 0x5e5e5e
                    })
                },
                'blog': {
                    'name': '',
                    'material': new THREE.MeshLambertMaterial({
                        wireframe: true,
                        wireframeLinewidth: 8,
                        color: 0xFC4C02,
                        ambient: 0x000000,
                        emissive: 0xFC4C02
                    })
                },
                'strava': {
                    'name': '',
                    'material': new THREE.MeshLambertMaterial({
                        wireframe: true,
                        wireframeLinewidth: 8,
                        color: 0xFC4C02,
                        ambient: 0x000000,
                        emissive: 0xFC4C02

                    })
                },
                'twitter': {
                    'name': '',
                    'material': new THREE.MeshLambertMaterial({
                        wireframe: true,
                        wireframeLinewidth: 8,
                        color: 0x3b5998,
                        ambient: 0x000000,
                        emissive: 0x3b5998
                    })
                },
                'amazon': {
                    'name': '',
                    'material': new THREE.MeshLambertMaterial({
                        wireframe: true,
                        wireframeLinewidth: 8,
                        color: 0xab1b1c,
                        ambient: 0x000000,
                        emissive: 0xab1b1c
                    })
                }
            },
            apiMeshTypeKeys = _.keys(apiMeshTypes);

        IndexApp.Visualizer = (function() {

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
                            currentObject = asteroidArray[intersects[0].object.id];

                            //change the material based on the type of the post
                            //currentObject.mesh.material = twitterMaterial;

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
                            for (currentIndex in activeObjects) {
                                // get active object and update scale and 'pause' the animation
                                currentObject = asteroidArray[activeObjects[currentIndex].object.id];

                                //currentObject.mesh.material = defaultMaterial;

                                // reset the scale
                                currentObject.mesh.scale.x = 1;
                                currentObject.mesh.scale.y = 1;
                                currentObject.mesh.scale.z = 1;

                                // resume the animation
                                currentObject.direction.x = _.random(-0.01, 0.01);
                                currentObject.direction.y = _.random(-0.01, 0.01);

                                // remove the item from the active hover state array
                                delete activeObjects[currentIndex];
                            }
                        }
                    }
                }
            }

            var createNewAsteroid = function() {
                var xPosition = _.random(cameraFOVWidth * -1, cameraFOVWidth),
                    yPosition = _.random(cameraFOVHeight * -1, cameraFOVHeight),
                    zPosition = 0,
                    xDirection = _.random(-0.01, 0.01),
                    yDirection = _.random(-0.01, 0.01),
                    zDirection = 0;

                //TODO: Currently randomly selected mesh types. Convert this to the API call to return a real type.

                var currentMeshType = apiMeshTypeKeys[_.random(0, apiMeshTypeKeys.length - 1)];

                var currentObject = new THREE.Mesh(new THREE.SphereGeometry(asteroidInitialScale, 5, 5), apiMeshTypes[currentMeshType].material);
                currentObject.position.set(xPosition, yPosition, zPosition);
                currentObject.receiveShadow = true;
                currentObject.castShadow = false;

                return {
                    'id': currentObject.id,
                    'mesh': currentObject,
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

            var renderScene = function() {
                var that = this;

                if ($('.background-image canvas').length === 0) {
                    scene = new THREE.Scene();
                    //set camera and calculate FOV
                    camera = new THREE.PerspectiveCamera(45, sceneAspectRatio, 1, 1000);
                    camera.position.set(0, 0, cameraDist);
                    cameraFOV = camera.fov * Math.PI / 180;
                    cameraFOVHeight = 2 * Math.tan(cameraFOV / 2) * cameraDist;
                    cameraFOVWidth = cameraFOVHeight * sceneAspectRatio;
                    //adjust for half of the screen
                    cameraFOVHeight = cameraFOVHeight / 2;
                    cameraFOVWidth = cameraFOVWidth / 2;

                    //set render engine and scene
                    renderer = new THREE.WebGLRenderer({
                        alpha: true
                    });
                    renderer.setSize(window.innerWidth, window.innerHeight);
                    renderer.showMapEnabed = true;

                    // initialize object to perform world/screen calculations
                    projector = new THREE.Projector();

                    //render canvas to the background image
                    $('.background-image').html(renderer.domElement);

                    //add lighting
                    // scene.add(new THREE.AmbientLight(0x000000));
                    headlight = new THREE.PointLight(0x606060, 2, 100);
                    headlight.position.copy(camera.position);
                    scene.add(headlight);

                    //add asteroids to the scene
                    for (var i = 1; i <= sphereCount; i++) {
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

            return {
                getIntersections: getIntersections,
                renderScene: renderScene
            };
        });
    });
    return App.IndexApp.Visualizer;
});
