import React from 'react'

//Style CSS
import "../assets/css/About.css";

export const About = () => {
    return (
        <section className="aboutContainer">
            <div className="content">

                <p className="sub-titulo">ABOUT ME.</p>

                <p className="descripcion">
                    I'M DAVID ARCOS MELGAREJO,<br/>
                    A FULL STACK DEVELOPER.DISCOVERING BEAUTY IN THE CODE<br/>
                    RETHINKING NEW FORMS TO SOLVE OLD PROBLEMS.<br/>
                </p>

                <p className="descripcion mt-3">
                    I LOVE TO DISCOVER AND LEARN NEW THINGS EVERY SINGLE DAY<br/>
                    LIKE NEW TECNOLOGIES OR WAYS TO DO A BETTER WORK LIKE 
                    SOLID PRINCIPLES,ALGORITMHS,ETC.
                </p>
                <button type="primary" className="btn2 descripcion mt-3">View proyect's</button>
            </div>
       </section>
    )
}
