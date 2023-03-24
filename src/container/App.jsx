import React from "react";

import { BsKeyboard } from "react-icons/bs";
import '../styles/App.css'

import Biseccion from "../components/Biseccion";
import NewtonRaphson from "../components/NewtonRaphson";
import FalsaPosicion from "../components/FalsaPosicion";
import Secante from "../components/Secante";


function App() {

    const quadraticFunction = (x) => {
        return -1 * (x * x) + 300;
    };

    return (
        <div className="main">

            <nav>
                <div class="nav nav-tabs " id="nav-tab" role="tablist">
                    <button class="nav-link active" id="nav-home-tab"  data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Biseccion</button>
                    <button class="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Newton-Raphson</button>
                    <button class="nav-link" id="nav-disabled-tab" data-bs-toggle="tab" data-bs-target="#nav-disabled" type="button" role="tab" aria-controls="nav-disabled" aria-selected="false" >Secante</button>
                    <button class="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Falsa posición</button>
                </div>
            </nav>
            <div class="tab-content methods" id="nav-tabContent">
                <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab" tabindex="0">
                    <div id="biseccion " className="section-mn">
                        <Biseccion />
                    </div>
                </div>
                <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab" tabindex="0">
                    <div id="newton-raphson" className="section-mn">
                        <NewtonRaphson />
                    </div>
                </div>
                <div class="tab-pane fade" id="nav-disabled" role="tabpanel" aria-labelledby="nav-disabled-tab" tabindex="0">
                    <div id="secante" className="section-mn">
                        <Secante />
                    </div>
                </div>
                <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab" tabindex="0">
                    <div id="falsa-posicion" className="section-mn">
                        <FalsaPosicion />
                    </div>
                </div>

            </div>

        </div>
    );
}

export default App;
