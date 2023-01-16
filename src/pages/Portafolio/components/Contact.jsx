import React from 'react'

import "../assets/css/Contact.css";

//Component's
import { RabbitHole } from './Contact/RabbitHole';

export const Contact = () => {
    return (
        <section className="contactContainer">
            <RabbitHole/>
            <p className="descripcion">©DAVID'S PORTAFOLIO 2023</p>
        </section>
    )
}
