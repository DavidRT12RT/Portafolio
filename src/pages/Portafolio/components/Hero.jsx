import { Canvas, useFrame } from "@react-three/fiber";
import { useEffect, useMemo, useRef, useCallback } from "react";
import { Vector2, Color } from "three";
import { EffectComposer, Noise } from "@react-three/postprocessing";

//Style CSS
import "../assets/css/Hero.css";

//Component's
import vertexShader from "../components/Hero/vertexShader";
import fragmentShader from "../components/Hero/fragmentShader";

const Gradient = () => {
    // This reference will give us direct access to the mesh
    const mesh = useRef();
    const mousePosition = useRef({ x: 0, y: 0 });

    const updateMousePosition = useCallback((e) => {
        mousePosition.current = { x: e.pageX, y: e.pageY };
    }, []);

    const uniforms = useMemo(
        () => ({
            u_time: {
                value: 0.0,
            },
            u_mouse: { value: new Vector2(0, 0) },
            u_bg: {
                // value: new Color("#FFF"),
                value:new Color("#000"),
            },
            u_colorA: { value: new Color("#FD383E") },
            u_colorB: { value: new Color("#FD383E") },
        }),
        []
    );

    useEffect(() => {
        window.addEventListener("mousemove", updateMousePosition, false);

        return () => {
            window.removeEventListener("mousemove", updateMousePosition, false);
        };
    }, [updateMousePosition]);

    useFrame((state) => {
        const { clock } = state;

        mesh.current.material.uniforms.u_time.value = clock.getElapsedTime();
        mesh.current.material.uniforms.u_mouse.value = new Vector2(
            // mousePosition.current.x / 100,
            // mousePosition.current.y / 100
            1,1
        );
    });

    return (
        <mesh ref={mesh} position={[0, 0, 0]} scale={1.5}>
            <planeGeometry args={[1, 1, 32, 32]} />
            <shaderMaterial
                fragmentShader={fragmentShader}
                vertexShader={vertexShader}
                uniforms={uniforms}
                wireframe={false}
            />
        </mesh>
    );
};

export const Hero = () => {
    return (
        <section className="heroContainer">
            <Canvas camera={{ position: [0.0, 0.0, .2] }}>
                <EffectComposer multisampling={0} disableNormalPass={true}>
                    <Noise opacity={0.15} />
                    <Gradient />
                </EffectComposer>
            </Canvas>
            <div className="information">
                <p className="titulo color">DIGITALIZE YOUR IDEA'S</p>
                <p className="descripcion color">
                    Transform your idea into the most innovative bussiness in the markent today.
                </p>
            </div>
        </section>
    );
};
