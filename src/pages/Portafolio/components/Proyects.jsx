import { useState } from "react";
import FadeIn from "react-fade-in";
import VisibilitySensor from "react-visibility-sensor";

export const Proyects = () => {

    const [isComponentVisible, setIsComponentVisible] = useState(false);

    const onChange = (visible) => {
        console.log("Is component visible: ",visible);
        setIsComponentVisible(visible);
    }

    return (
        <VisibilitySensor onChange={onChange}>
            <div className="proyectsContainer">
                <FadeIn transitionDuration={800} visible={isComponentVisible}>
                    <h1 className="titulo">Proyect's</h1>
                    <p className="descripcion">Some of the proyects i had working on</p>
                </FadeIn>
            </div>
       </VisibilitySensor>
    )
}
