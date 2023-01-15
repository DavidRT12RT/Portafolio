import React from 'react'
import FadeIn from "react-fade-in";

import { Canvas, extend, useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";
import {
    OrbitControls
} from "three/examples/jsm/controls/OrbitControls";

//Style CSS
import "../css/Hero.css";

extend({OrbitControls});


const Orbit = () => {
    const { camera,gl } = useThree();
    return (
        <orbitControls args={[camera,gl.domElement]}/>
    );
}

const Box = (props) => {
    const boxRef = useRef();

    useFrame((state) => {
        boxRef.current.rotation.x += 0.01;
        boxRef.current.rotation.y += 0.01;
    });

    return (
        <mesh ref={boxRef} {...props}>
            <boxBufferGeometry/>
            <meshBasicMaterial color="blue"/>
        </mesh>
    );
}

export const Hero = () => {
    return (
        <section className="container3D">
            <FadeIn className="information" transitionDuration={800}>
                <h1 className="titulo">FULL STACK DEVELOPER</h1>
                <p className="descripcion">DAVID ARCOS</p>
            </FadeIn>
            <Canvas
                style={{background:"black"}}
                camera={{position:[0,0,0]}}
            >
                <Box position={[0,0,-2.5]}/>
                <Orbit/>
            </Canvas>
        </section>
    )
}
