
//Component's
import { BootLoader } from "./components/BootLoader";
import { CubeRotation } from "./components/CubeRotation";
import { Proyects } from "./components/Proyects";

//Style
import "./css/style.css";

export const Portafolio = () => {

    return (
        <div className="mainContainer">
            <BootLoader/>
            <CubeRotation/>
            <Proyects/>
        </div>
    );
}
