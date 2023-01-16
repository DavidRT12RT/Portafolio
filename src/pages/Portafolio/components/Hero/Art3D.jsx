import React from 'react'
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
        boxRef.current.rotation.x += 0.001;
        boxRef.current.rotation.y += 0.001;
    });

    return (
        <mesh ref={boxRef} {...props}>
            <boxBufferGeometry/>
            <meshBasicMaterial wireframe color="rgb(253, 56, 62)"/>
        </mesh>
    );
}


export const Art3D = () => {
    return (
        <div className="art3DContainer">
            <Canvas
                style={{
                    background:"inherint",
                    border:"1px solid rgb(253, 56, 62)"
                }}
                camera={{position:[0,0,0]}}
            >
                <Box wireframe position={[0,0,-1]}/>
                <Orbit/>
            </Canvas>
            <div className="information">
                <h1 className="sub-titulo">INOVACION</h1>
                <p className="descripcion">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil sit dicta officia accusamus.</p>
            </div>
        </div>
    )
}
