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
                value: new Color("#A1A3F7"),
            },
            u_colorA: { value: new Color("#9FBAF9") },
            u_colorB: { value: new Color("#FEB3D9") },
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
            mousePosition.current.x,
            mousePosition.current.y
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
                    <Noise opacity={0.25} />
                    <Gradient />
                </EffectComposer>
            </Canvas>
            <div className="information">
                <p className="titulo color">DIGITALIZE YOUR IDEA'S</p>
                <p className="descripcion color">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Obcaecati ipsa vero ipsum id dignissimos? Repudiandae at
                    ipsam dicta officiis provident temporibus dolor hic ab
                    distinctio. Architecto, perspiciatis. Dolore, impedit!
                    Repellat.
                </p>
            </div>
        </section>
    );
};
