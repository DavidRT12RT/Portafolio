import React from 'react'

import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";

import vertexShader from "../components/Phrase/vertexShader";
//import fragmentShader from "../components/Phrase/fragmentShader";

import "../assets/css/Phrase.css";


const MovingPlane = () => {
    // This reference will give us direct access to the mesh
    const mesh = useRef();

    const uniforms = useMemo(
        () => ({
            u_time: {
                value: 0.0,
            },
        })
    , []);

    useFrame((state) => {
        const { clock } = state;
        mesh.current.material.uniforms.u_time.value = clock.getElapsedTime();
    });

    return (
        <mesh ref={mesh} position={[0, 0, 0]}  rotation={[-Math.PI / 2, 0, 0]} scale={1.5}>
            <planeGeometry args={[1, 1, 32, 32]} />
            <shaderMaterial
                // fragmentShader={fragmentShader}
                vertexShader={vertexShader}
                uniforms={uniforms}
                wireframe
            />
        </mesh>
  );
};

export const Phrase = () => {
    return (
        <section className="phraseContainer">
            <Canvas
                style={{
                    background:"inherint",
                }}
                camera={{position:[0,0,0]}}
            >
                <MovingPlane/>
            </Canvas>
            <div className="information">
                <p className="titulo">A CREATIVE MIND KNOWS HOW TO DO THE RIGHT THING AT THE RIGHT PLACE AND AT THE RIGHT TIME</p>
            </div>
        </section>
    )
}
