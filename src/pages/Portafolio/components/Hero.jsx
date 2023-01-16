import React from 'react'

import { Award, Box } from "react-bootstrap-icons";

//Style CSS
import "../assets/css/Hero.css";

//Component's
import { Art3D } from './Hero/Art3D';

export const Hero = () => {
    return (
        <section className="heroContainer">

            {/* Content left*/}
            <div className="contentLeft">
                <h1 className="titulo">FULL STACK<br/>DEVELOPER</h1>
            </div>

            {/* Content right*/}
            <div className="contentRight">
                <div className="quote"/>
                <p className="descripcion mt-3">
                    “There are two ways to write error-free programs; only the third one works.” <br/>- Alan J. Perlis
                </p>
            </div>
            
            {/* Buttons and hr*/}
            <div className="contentDown">
                <div className="btns">
                    <button type="primary" className="btn"><Award/> <span className="descripcion">2022 Best agency</span></button>
                    <button type="primary" className="btn"><Box/> <span className="descripcion">World Class Agency</span></button>
                </div>
                <hr/>
            </div>

            {/*Canvas*/}
            <Art3D/>


        </section>
    )
}
