
//Component's
import { CubeRotation } from "./components/CubeRotation";
import { Proyects } from "./components/Proyects";

//Style
import "./css/style.css";

export const Portafolio = () => {

    return (
        <div className="mainContainer">
            <CubeRotation/>
            <Proyects/>
        </div>
    );
}
