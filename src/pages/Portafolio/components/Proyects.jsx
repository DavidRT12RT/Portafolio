//Icon's
import { Github } from "react-bootstrap-icons";

//Style CSS
import "../assets/css/Proyects.css";

const proyects = [
    {
        name:"SANZAPP",
        stack:"MERN"
    },
    {
        name:"SOCIALMEDIAAPP",
        stack:"MERN"
    },
];

export const Proyects = () => {

    return (
        <section className="proyectsContainer">
            <div className="japones">
                <p className="titulo">規律</p>
                <p className="titulo">忍耐</p>
            </div>

            <div className="contentLeftBottom">
                <p className="sub-titulo">#PROYECTS BY DAVID ARCOS</p>
                <p className="descripcion">Exclusive limited edition sneakers for someone special</p>
                <button type="primary" className="btn2 descripcion">VER TODOS</button>
            </div>
            <div className="contentRightBottom">
               <Github className="sub-titulo"/>
            </div>
            <div className="content">
                <p className="sub-titulo">PROYECT'S.</p>

                <div className="cardsContainer">
                    <img src={require("../assets/imgs/proyects/SANZAPP/1.png")}/>

                    <div className="infoProyect">
                        <p className="descripcion">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci ratione hic fuga, assumenda debitis ea expedita a molestiae nihil, ut esse quibusdam mollitia corrupti quae veniam iste magni porro aspernatur.</p>
                    </div>

                    <div className="btns">
                        <button type="primary" className="btn2 descripcion"> {`<`} </button>
                        <button type="primary" className="btn2 descripcion"> {`>`} </button>
                    </div>

                </div>


            </div>

        </section>
    )
}
