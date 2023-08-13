"use client";

// Import Three.js library
import * as THREE from "three";


// -- Global Variables --
// scene, camera, renderer
const scene = new THREE.Scene();


const renderer = new THREE.WebGLRenderer({ antialias: true });
import { LightProbeHelper } from 'three/addons/helpers/LightProbeHelper.js';

import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';


const loader = new GLTFLoader();

// cube or geometric object
const geometry = new THREE.BoxGeometry(2, 2, 2);
const material = new THREE.MeshPhongMaterial({ color: "purple" });
const cube = new THREE.Mesh(geometry, material);

const box = new THREE.BoxHelper( cube, 0xffff00 );
scene.add( box );
// scene.overrideMaterial = new THREE.MeshBasicMaterial({ color: "green" });

// Main function
function main({ parentEl }) {
	// remove the default canvas on web page (output)
	// document.querySelector("canvas").remove();

	// add scene background color, set rendering size,
	// and add to DOM on web page (output)
	scene.background = new THREE.Color("#161718");
	renderer.setSize(window.innerWidth, window.innerHeight);
	parentEl.appendChild(renderer.domElement);

    const width = parentEl.width;
    const height = parentEl.height;

    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    // const camera = new THREE.OrthographicCamera(
    //     width / - 2, width / 2, height / 2, height / - 2, 1, 1000
    // );

	// reposition or transform camera
	camera.position.set(0, 0, 5);

	// create world light and add to scene
	const light = new THREE.HemisphereLight("#FFFFFF", "#757575", 1.7);
	scene.add(light);

    // const helper = new LightProbeHelper( lightProbe, 1 );
    // scene.add( helper );

	// set initial cube position, rotation, and add to scene
	cube.position.set(0, 0, 0);
	cube.rotation.set(0.5, 0, 0);
	scene.add(cube);

    const controls = new OrbitControls( camera, renderer.domElement );
    scene.add( controls );

	// render the scene
	renderer.render(scene, camera);
}
import React, { useEffect, useRef } from "react";

function BoxObject() {
	const ref = useRef();
	useEffect(() => {
		const el = ref.current;
		main({ parentEl: el });
	}, []);
	return <div ref={ref}></div>;
}

export default BoxObject;

// call the main() function to initiate the scene
// main();
