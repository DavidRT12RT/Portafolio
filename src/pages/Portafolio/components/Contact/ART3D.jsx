import React from 'react'
import { Canvas, extend, useFrame, useThree } from "@react-three/fiber";
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

    return (
        <mesh {...props}>
            <boxBufferGeometry/>
            <meshBasicMaterial wireframe color="rgb(253, 56, 62)"/>
        </mesh>
    );
}


export const ART3D = () => {
    return (
        <div className="contact">
            <Canvas
                style={{
                    background:"inherint",
                }}
                camera={{position:[0,0,0]}}
            >
                <Box wireframe position={[0,0,-1]}/>
                <Box wireframe position={[0,0,-2]}/>
                <Box wireframe position={[0,0,-3]}/>
                <Box wireframe position={[0,0,-4]}/>
                <Box wireframe position={[0,0,-5]}/>
                <Box wireframe position={[0,0,-6]}/>
                <Box wireframe position={[0,0,-7]}/>
                <Orbit/>
            </Canvas>
            <div className="information">
                <h1 className="titulo">LET'S DISCUSS <br/> YOUR IDEAS</h1>
                <button type="primary" className="btn2">LET'S TALK</button>
            </div>
        </div>
    )
}

