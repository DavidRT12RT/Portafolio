import { useState } from "react";

//Component's
import { BootLoader } from "./components/BootLoader";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Experience } from "./components/Experience";
import { Phrase } from "./components/Phrase";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Contact } from "./components/Contact";

//Style
import "./assets/css/Portafolio.css"; 


export const Portafolio = () => {

    const [isBootLoaderVisible, setIsBootLoaderVisible] = useState(true);

    const onBootLoaderFinish = () => {
        //bootLoaderRef.current.classList.add("d-none")
        setIsBootLoaderVisible(false);
    }

    // if(isBootLoaderVisible) return <BootLoader onBootLoaderFinish={onBootLoaderFinish}/>
    return (
        <div className="mainContainer">
            <Navbar/>
            <Hero/>
            <Experience/>
            <Phrase/>
            <About/>
            <Skills/>
            {/* <Knowledge/> */}
            <Contact/>
        </div>
    );
}
