import React from "react";

import classes from "./Hero.module.css";
import '../../index.css';  


function Hero() {
    return (
        <div className={classes.Hero}>
            <div className="font-sans py-6 px-12 h-full flex content-between justify-between md:justify-around flex-row md:flex-col">
                <div className="self-center md:text-center p-4">
                    <h1>Cervera</h1>
                    <h2>Hitta Inspiration</h2>
                </div>
                <div className="self-center md:text-justify max-w-xl p-4">
                    <p className="text-base">
                    Upptäck vår nya receptsida – din bästa vän i köket! Vi på Cervera är glada att kunna presentera en helt ny plattform där du hittar inspiration och idéer för alla tillfällen. Oavsett om du är en erfaren kock eller nybörjare i köket, erbjuder vi recept som passar varje smak och nivå.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Hero;
