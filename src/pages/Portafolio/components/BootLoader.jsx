import React from 'react'
import FadeIn from "react-fade-in";

import "../assets/css/BootLoader.css";

export const BootLoader = ({onBootLoaderFinish}) => {

    return (
        <div className="bootLoaderContainer">
            <FadeIn 
                className="demonsContainer" 
                transitionDuration={3} 
                delay={50} 
                onComplete={onBootLoaderFinish}
            >
                <p className="statusNotification">Welcome to <span className="text-primary">David Arcos OS</span></p>
                <p className="statusNotification">Run levels set to 3 by default</p>

                <p className="nameDemon mt-5">Enabling /etc/fstab swaps: </p>
                <p className="statusDemon mt-5">[ <span className="demonLoaded">OK</span> ]</p>

                <p className="statusNotification">INIT:Entering runlevel: 3</p>
                <p className="statusNotification">INIT:Entering non-interactive startup</p>

                <p className="nameDemon">Applying Intel CPU microcode update: </p>
                <p className="statusDemon">[ <span className="demonLoaded">OK</span> ]</p>

                <p className="nameDemon">Checking for hardware changes: </p>
                <p className="statusDemon">[ <span className="demonLoaded">OK</span> ]</p>

                <p className="nameDemon">Bringing up interface eth0: </p>
                <p className="statusDemon">[ <span className="demonLoaded">OK</span> ]</p>

                <p className="nameDemon">Determining IP information for eth0: </p>
                <p className="statusDemon">[ <span className="demonLoaded">OK</span> ]</p>


                <p className="nameDemon mt-5">Starting auditd: </p>
                <p className="statusDemon mt-5">[ <span className="demonLoaded">OK</span> ]</p>

                <p className="nameDemon">Starting restorecond: </p>
                <p className="statusDemon">[ <span className="demonLoaded">OK</span> ]</p>

                <p className="nameDemon">Starting system logger: </p>
                <p className="statusDemon">[ <span className="demonLoaded">OK</span> ]</p>

                <p className="nameDemon">Starting kernel logger: </p>
                <p className="statusDemon">[ <span className="demonLoaded">OK</span> ]</p>

                <p className="nameDemon">Starting irqbalance: </p>
                <p className="statusDemon">[ <span className="demonLoaded">OK</span> ]</p>

                <p className="nameDemon">Starting mcstransd: </p>
                <p className="statusDemon">[ <span className="demonLoaded">OK</span> ]</p>

                <p className="nameDemon">Starting portmap: </p>
                <p className="statusDemon">[ <span className="demonLoaded">OK</span> ]</p>

                <p className="nameDemon">Starting setroubleshootd: </p>
                <p className="statusDemon">[ <span className="demonLoaded">OK</span> ]</p>

                <p className="nameDemon">Starting NFS statd: </p>
                <p className="statusDemon">[ <span className="demonLoaded">OK</span> ]</p>

                <p className="nameDemon">Starting mdmonitor: </p>
                <p className="statusDemon">[ <span className="demonLoaded">OK</span> ]</p>

                <p className="nameDemon">Starting RFC idmapd: </p>
                <p className="statusDemon">[ <span className="demonLoaded">OK</span> ]</p>

                <p className="nameDemon">Starting RFC system message bus: </p>
                <p className="statusDemon">[ <span className="demonLoaded">OK</span> ]</p>

                <p className="nameDemon">Starting Bluetooth services: </p>
                <p className="statusDemon">[ <span className="demonLoaded">OK</span> ]</p>

                <p className="nameDemon">Mounting other filesystems: </p>
                <p className="statusDemon">[ <span className="demonLoaded">OK</span> ]</p>

                <p className="nameDemon">Starting PC/SC smart card daemon(pcscd): </p>
                <p className="statusDemon">[ <span className="demonLoaded">OK</span> ]</p>

                <p className="nameDemon">Starting hidd: </p>
                <p className="statusDemon">[ <span className="demonLoaded">OK</span> ]</p>

                <p className="nameDemon">Load David's portafolio: </p>
                <p className="statusDemon">[ <span className="demonLoaded">OK</span> ]</p>

            </FadeIn>

        </div>
    )
}
