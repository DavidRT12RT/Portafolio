import React from 'react'
import { Canvas } from "@react-three/fiber";

const Box = (props) => {


    // useFrame((state,delta) => {
    //     boxRef.current.rotation.z += 0.0006;
    //     boxRef.current.rotation.z += 0.0006;
    // });

    return (
        <mesh {...props}>
            <boxBufferGeometry/>
            <meshBasicMaterial wireframe color="rgb(253, 56, 62)"/>
        </mesh>
    );
}


export const RabbitHole = () => {
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
            </Canvas>
            <div className="information">
                <h1 className="titulo">LET'S DISCUSS <br/> YOUR IDEAS</h1>
                <button type="primary" className="btn2">LET'S TALK</button>
            </div>
        </div>
    )
}

