import React from 'react'

import { Database } from 'react-bootstrap-icons';
//Component's
import { Bar } from './Knowledge/Bar'

//Style CSS
import "../assets/css/Knowledge.css";

export const Knowledge = () => {
    return (
        <section className="knowledgeContainer">
            <Bar/>
            <div className="myServices">
                
                <h1 className="titulo">TECNOLOGIES<span className="color">.</span></h1>

                <p className="descripcion">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime laboriosam eligendi quia hic laudantium accusamus omnis error architecto illum libero eum adipisci, mollitia nam quidem totam dicta sed? Quidem, repellat.</p>

                <div className="btns">
                    <button type="primary" className="btn2 descripcion"><Database/> Databases</button>
                </div>
            </div>
       </section>
    )
}
