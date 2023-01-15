import { useState } from "react";
import FadeIn from "react-fade-in";
import VisibilitySensor from "react-visibility-sensor";


//Style CSS
import "../css/Proyects.css";

//Component's
import { ProyectCard } from "./ProyectCard";


export const Proyects = () => {

    const [isComponentVisible, setIsComponentVisible] = useState(false);

    const onChange = (visible) => {
        console.log("Is component visible: ",visible);
        setIsComponentVisible(visible);
    }

    return (
        <VisibilitySensor onChange={onChange}>
            <section className="proyectsContainer">
                <div className="content">
                </div>

                <div className="proyectsLeftBar">
                    <h1 className="titulo" id="textBar">-EXPERIENCE-</h1>
                </div>
            </section>
       </VisibilitySensor>
    )
}
