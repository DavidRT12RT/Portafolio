import React, { useEffect } from 'react'
import { Dot } from 'react-bootstrap-icons';

import "../assets/css/Skills.css";


const Container = ({skill}) => {

    return (
        <div className="skillContainer">
            <p className="sub-titulo2">{skill.name}</p>
        </div>
    );
}

export const Skills = () => {

    const Marquee = (selector,speed) => {
        const parentSelector = document.querySelector(selector);
        const clone = parentSelector.innerHTML;
        //Clone ALL the content inside the div
        const firtsElement = parentSelector.children[0];

        let i = 0;

        parentSelector.insertAdjacentHTML("beforeend",clone);
        parentSelector.insertAdjacentHTML("beforeend",clone);

        setInterval(() => {

            firtsElement.style.marginLeft = `-${i}px`;
            if(i > firtsElement.clientWidth) i = 0;
            i += speed;
        }, 0);
    }

    useEffect(() => {
        Marquee(".marquee",1);
    }, []);
    
    const skills = {
        fronted:[
            "HTML5",
            "CSS3",
            "JAVASCRIPT/NODEJS",
            "REACT",
            "REDUX",
            "NEXTJS",
            "THREEJS/REACT-THREE-FIBER",
            "SOCKET-IO CLIENT"
        ],
        backend:[
            "JAVASCRIPT/NODEJS",
            "EXPRESS",
            "NESTJS",
            "SOCKET-IO SERVER",
            "POSTMAN",
            "DOCKER",
            "ORM/SEQUEALIZE",
            "ORM/MONGOOSE",
        ],
        databases:[
            "MYSQL",
            "MONGODB",
            "POSTGRESQL",
        ],
        operativeSystems:[
            "Windows",
            "Linux",
        ],
    };

    return (
        <section className="skillsContainer">
            {/* JAPONES TEXTO */}
            <div className="japones">
                <p className="titulo">規律</p>
                <p className="titulo">忍耐</p>
            </div>

            {/* CONTENT */}
            <div className="content">
                <p className="sub-titulo">
                    SKILLS.
                </p>
                <div className="tecnologiesContainer">
                    {/* CONTAINER'S */}
                    {Object.keys(skills).map((skill,index) => (
                        <Container skill={{name:skill,tecnologies:skills[skill]}} key={index}/>
                    ))}
                </div>
            </div>


           

            {/* MARQUEE */}
            <div className="marquee">
                <p className="sub-titulo"><Dot/> FRONTED <Dot/> フロンテッド <Dot/> BACKEND <Dot/> バックエンド<Dot/></p>
            </div>

        </section>
    )
}
