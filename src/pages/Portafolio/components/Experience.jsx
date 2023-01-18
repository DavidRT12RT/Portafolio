import React, { Suspense, useRef } from 'react'

import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import { Html, OrbitControls, Scroll, ScrollControls } from '@react-three/drei';

import * as THREE from "three";
import { TextureLoader } from 'three/src/loaders/TextureLoader';

//Style CSS
import "../assets/css/Experience.css"

const Mesh = ({proyect,index}) => {

    const meshRef = useRef();
    const textRef = useRef();

    const cover = useLoader(
        TextureLoader,
        `proyects/${proyect.title}/1.png`
    );

    useFrame(({clock}) => {

        const t = clock.getElapsedTime();

        // meshRef.current.position.y -= index * 10;
        // meshRef.current.position.y = meshRef.current.position.y - (index *10);

        // meshRef.current.rotation.y = Math.sin(t) * 5;
    });

    return (
        <group>
            <mesh 
                ref={meshRef} 
                rotation={new THREE.Euler(0,5.8,0)}
                position={new THREE.Vector3(2,-4 - index * 10,0)}
            >
                <planeGeometry args={[5,4,3]}/>
                <meshStandardMaterial map={cover}/>
                <Html occlude={true}>
                    <p className="descripcion">{proyect.description}</p>
                </Html>

            </mesh>
        </group>
    );
}

export const Experience = () => {


    const proyects = [
        {
            title:"SANZ_APP",
            description:"WEB APP APLICATION"
        },
        {
            title:"SOCIAL_MEDIA_APP",
            description:"WEB APP APPLICATION"
        },
        {
            title:"GOOGLE_DRIVE_CLONE_APP",
            description:"WEB APP APPLICATION"
        },
        {
            title:"HEROES_APP",
            description:"WEB APP APPLICATION"
        }
    ];

    return (
        <section className="experienceContainer">
            <Canvas id="canvas">
                <ambientLight intensity={0.35}/>
                <Html occlude={false} transform fullscreen>
                    <p className="sub-titulo">PROYECT'S</p>
                </Html>
                <Html 
                    wrapperClass="japones" 
                    position={[0,0,0]} 
                    occlude 
                >
                    <p className="titulo">経験</p>
                    <p className="titulo">プログラミング</p>
                    <p className="titulo">革新</p>
                    <p className="titulo">革新</p>
                </Html>
                <Suspense>
                    <ScrollControls 
                        style={{scrollbarWidth:"none"}}
                        pages={proyects.length + 1.5}
                    >
                        <Scroll>
                            {
                                proyects.map((proyect,i) => (
                                    <Mesh proyect={proyect} index={i} key={i}/>
                                ))
                            }
                        </Scroll>
                    </ScrollControls>
                </Suspense>
            </Canvas>
        </section>
    )
}
