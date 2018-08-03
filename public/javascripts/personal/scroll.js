


// window.onLoad = function() {

  // init controller
  var controller = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: "onEnter", duration: "100%"}});

  //////////////////////////////////////////////////////////////////////////////
  // build #scenes-0
  new ScrollMagic.Scene({triggerElement: "#scene-0"})
    //.setTween("#scene-0 > div", {y: "0%", ease: Linear.easeNone})
    // .addIndicators({name:"scene-0"});
    .addTo(controller);
    // TweenMax.to("#content-scene-0", 10, {opacity:1});

    var options = {
      horizontalPixelsCount: 250,
      verticalPixelsCount: 5,
      pixelSize: 7,
      disabledPixelColor: '#404040',
      enabledPixelColor: 'red',
      pathToPixelImage: 'public/images/pixel.png',
      stepDelay: 40,
      pixelRatio: 0.7,
      runImmidiatly: true
    };
    $('.led-display-div').leddisplay($.extend(options, {pixelSize: 7}));

    //////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////////
// build #scenes-1
  new ScrollMagic.Scene({triggerElement: "#scene-1"})
    // .setTween("#scene-1 > div", {y: "0%", ease: Linear.easeNone})
    // .addIndicators({name:"scene-1"});
    .addTo(controller);
    //////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////


  //////////////////////////////////////////////////////////////////////////////
  // build #scenes-0
  new ScrollMagic.Scene({triggerElement: "#scene-2"})
    // .setTween("#scene-2 > div", {y: "0%", ease: Linear.easeNone})
    // .addIndicators({name:"scene-2"});
    .addTo(controller);

    // Status viewer
    // var stats = new Stats();
    // stats.showPanel( 0 ); // 0: fps, 1: ms, 2: mb, 3+: custom
    // document.getElementById("scene-2").appendChild( stats.dom );


    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera( 30, window.innerWidth / window.innerHeight, 1, 1500);

    var renderer = new THREE.WebGLRenderer();
    renderer.setPixelRatio( window.devicePixelRatio );
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById("scene-2").appendChild(renderer.domElement);

    // three.js mouse screen controls.... interferes with scroll.js mouse actions
    //controls = new THREE.OrbitControls(camera, renderer.domElement);

    // load a image resource
    var texture = new THREE.TextureLoader().load( 'public/images/rolly_award_dinner.jpg' );

    var geometry = new THREE.BoxGeometry( 1, 1, 1 );
    var material = new THREE.MeshBasicMaterial( { map: texture } );
    //var material = new THREE.MeshBasicMaterial( {color: 0x00ff00, wireframe: true} );
    var cube = new THREE.Mesh( geometry, material );
    scene.add( cube );

    // var geometry = new THREE.BoxGeometry( 1, 1, 1 );
    // var material = new THREE.MeshBasicMaterial( {color: 0x00ff00}, wireframe: true );
    // var cube = new THREE.Mesh( geometry, material );
    // scene.add( cube );



    camera.position.z = 5;

    camera.lookAt( new THREE.Vector3() );

    window.addEventListener("resize", function() {
      var width = window.innerWidth;
      var height = window.innerHeight;
      renderer.setSize(width, height);
      camera.aspect = (width / height);
      camera.updateProjectionMatrix();
    });


    // Game logic
    var update = function() {
    //    torus.rotation.x += 0.01;
    //    torus.rotation.y += 0.005;
    cube.rotation.x += 0.001;
    cube.rotation.y += 0.01;
    };


    // update Scene
    var render = function() {
      renderer.render(scene, camera);
    };


    // Game Loop (update, render, repeat)
    var GameLoop = function() {

      requestAnimationFrame(GameLoop);

      // three.js status panel game loop update
      // stats.begin();
         update();
         render();
      // stats.end();

    };

    GameLoop();
    TweenMax.to("#scene-2", 10, {opacity:1});
  //////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////

  //////////////////////////////////////////////////////////////////////////////
  // build #scenes-3
    new ScrollMagic.Scene({triggerElement: "#scene-3"})
      // .setTween("#scene-1 > div", {y: "0%", ease: Linear.easeNone})
      // .addIndicators({name:"scene-1"});
      .addTo(controller);
    //   //////////////////////////////////////////////////////////////////////////////
      //////////////////////////////////////////////////////////////////////////////



// }; /* end of window.onLoad */
