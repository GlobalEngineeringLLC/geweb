import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.118/build/three.module.js';

import { FBXLoader } from 'https://cdn.jsdelivr.net/npm/three@0.118/examples/jsm/loaders/FBXLoader.js';

function main(){
    var scene = new THREE.Scene();
    var box = generateBox(1,1,1);
    box.position.y = box.geometry.parameters.height/2;

    var floor = generateFloor(10, 20);
    floor.rotation.x = Math.PI/2;

    floor.add(box);

    var pointLight = generatePointLight(0xffffff, 1);
    pointLight.position.y = 5;

    scene.add(floor);
    scene.add(pointLight);

    var camera = new THREE.PerspectiveCamera(
        45,
        window.innerWidth/window.innerHeight,
        1,
        1000
    );
    camera.position.x = 1;
    camera.position.y = 5;
    camera.position.z = 5;
    camera.lookAt(new THREE.Vector3(0,0,-5));

    var renderer = new THREE.WebGLRenderer();
    renderer.shadowMap.enabled = true;
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor('rgb(60,60,60)');
    document.getElementById('background1').appendChild(renderer.domElement);
    update(renderer, scene, camera);


    function generateFloor(w, d) {
        var geo = new THREE.PlaneGeometry(w, d);
        var mat = new THREE.MeshPhongMaterial({
            color: 'rgb(100,100,100)',
            side: THREE.DoubleSide
        });
        var mesh = new THREE.Mesh(geo, mat);
        mesh.receiveShadow = true;
        return mesh;
    }

    function generateBox(w, h, d){
        var geo = new THREE.BoxGeometry(w, h, d);
        var mat = new THREE.MeshPhongMaterial({
            color: 'rgb(100,100,100)'
        });
        var mesh = new THREE.Mesh(geo, mat);
        mesh.castShadow = true;
        return mesh;
    }

    function generatePointLight(color, intensity){
        var light = new THREE.PointLight(color, intensity);
        light.castShadow = true;
        return light;
    }

    function update(renderer, scene, camera){
        renderer.render(scene, camera);

        scene.children[0].rotation.y += 0.002;
        floor.rotation.z += 0.0001;

        scene.traverse(function(child){
            //child.position.x += 0.001;
        });

        requestAnimationFrame(function(){
            update(renderer, scene, camera);
        });
    }
}

main();

/*

import { AnaglyphEffect } from 'https://cdn.jsdelivr.net/npm/three@0.118/examples/jsm/effects/AnaglyphEffect.js';


*/
