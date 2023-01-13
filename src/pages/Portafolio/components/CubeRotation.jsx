import React from 'react'
import FadeIn from "react-fade-in";

import { Canvas, extend, useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";
import {
    OrbitControls
} from "three/examples/jsm/controls/OrbitControls";
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



export const CubeRotation = () => {
    return (
        <div className="container3D">
            <FadeIn className="information" transitionDuration={800}>
                <h1 className="titulo">Never gear</h1>
                <p className="descripcion">El NerveGear (ナーヴギア Nāvugia) es una interfaz hardware utilizada en los VRMMORPG's para que los jugadores puedan tener una inmersión total en el juego.</p>
            </FadeIn>
            <Canvas
                style={{background:"black"}}
                camera={{position:[3,3,3]}}
            >
                <Box position={[0,0,0]}/>
                <Orbit/>
            </Canvas>
        </div>
    )
}
