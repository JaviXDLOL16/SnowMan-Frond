import React from 'react'
import { useState } from 'react';

import '../styles/FalsaPosicion.css'

import Graph from "./Graph";


function FalsaPosicion() {

    const [valueA, setValueA] = useState(0);
    const [valueB, setValueB] = useState(0);
    const [funcion, setFuncion] = useState("");
    const [tol, setTol] = useState(0);
    const [funcionToG, setFuncionToG] = useState("")

    const [data, setData] = useState();
    const [iterations, setIterations] = useState();
    const [result, setResult] = useState();
    const [valueR, setValueR] = useState();



    const resolve = (e) => {
        e.preventDefault();



        fetch('http://localhost:8080/falsa-posicion/resolve', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'valueA': valueA,
                'valueB': valueB,
                'function': funcion,
                'tolerance': tol
            })
        })
            .then(res => {
                if (!res.ok) {
                    return Promise.reject(res);
                }
                return res.json();
            })
            .then(data => {
                setIterations(data.iterations);
                setResult(data.result);
                setValueR(data.value);

                var fTemp = funcion;
                fTemp = fTemp.replaceAll('exp', 'Math.exp');
                fTemp = fTemp.replaceAll('ln', 'Math.exp');
                fTemp = fTemp.replaceAll('sin', 'Math.sin')
                fTemp = fTemp.replaceAll('cos', 'Math.cos')
                fTemp = fTemp.replaceAll('tan', 'Math.tan')
                fTemp = fTemp.replaceAll('sqrt', 'Math.sqrt')
                console.log("Valor transformado: " + fTemp)

                setFuncionToG(fTemp)
            })
            .catch(error => {
                if (typeof error.json === "function") {
                    error.json().then(jsonError => {
                        alert(jsonError.message);
                    }).catch(genericError => {
                        console.log("Generic error from API");
                        console.log(error.statusText);
                    });
                } else {
                    console.log("Fetch error");
                    console.log(error);
                }
            })
    }

    class FuncionClass {

        expresion;

        constructor(expresion) {
            this.expresion = expresion;
        }

        quadraticFunction = (x) => {
            let value2 = this.expresion;
            return eval(value2);
        };

    }

    var funcionG = new FuncionClass(funcionToG)

    return (
        <div className='nr-main'>

            <div className='nr-body'>

                <h4 className='nr-title title'>Método de Falsa Posición</h4>

                <form onSubmit={resolve}>
                    <section className='nr-form-div form-div'>
                        <div class="mb-3  nr-input-div input-value input">
                            <label for="FpValueA" class="form-label">Valor A</label>
                            <input type="number" step=".01" class="form-control" id="FpValueA" onChange={(e) => setValueA(e.target.value)} required />
                        </div>

                        <div class="mb-3  nr-input-div input-value input">
                            <label for="FpValueB" class="form-label">Valor B</label>
                            <input type="number" step=".01" class="form-control" id="FpValueB" onChange={(e) => setValueB(e.target.value)} required />
                        </div>

                        <div class="mb-3  nr-input-div input-func input">
                            <label for="FpFuncion" class="form-label">Función matemática</label>
                            <input type="text" class="form-control" id="FpFuncion" onChange={(e) => setFuncion(e.target.value)} required />
                        </div>

                        <div class="mb-3 nr-input-div input-tolerancia input">
                            <label for="FpTolerancia" class="form-label">Tolerancia de resultado</label>
                            <input type="number" step="0.0000001" class="form-control" id="FpTolerancia" onChange={(e) => setTol(e.target.value)} placeholder='Default: 0' />
                        </div>


                        <button type="submit" class="nr-button-submit btn btn-primary">Calcular</button>
                    </section>
                </form>

            </div>

            <section className='result-div'>

                {
                    iterations &&
                    <div className='bis-table-div table-rows'>
                        <table className=" table">
                            <thead>
                                <tr>
                                    <th scope="col">Iteraciones</th>
                                    <th scope="col">X<sub>1</sub></th>
                                    <th scope="col">X<sub>2</sub></th>
                                    <th scope="col">f(X<sub>1</sub>)</th>
                                    <th scope="col">f(X<sub>2</sub>)</th>
                                    <th scope="col">X<sub>3</sub></th>
                                    <th scope="col">f(X<sub>3</sub>)</th>
                                    <th scope="col">Ear</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    iterations.map(iteration => {
                                        return (
                                            <tr>
                                                <th scope="row">{iteration.i}</th>
                                                <td>{iteration.x0}</td>
                                                <td>{iteration.x1}</td>
                                                <td>{iteration.fx0}</td>
                                                <td>{iteration.fx1}</td>
                                                <td>{iteration.x2}</td>
                                                <td>{iteration.fx2}</td>
                                                <td>{iteration.ear}</td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                }

                {
                    result &&
                    <div className='nr-result-div'>
                        <p>{result}</p>
                    </div>
                }

                {
                    funcionToG &&
                    <>
                        <button type="button" class="btn btn-primary btn-modal-func" data-bs-toggle="modal" data-bs-target="#modalF">
                            Gráfica de la función
                        </button>

                        <div class="modal fade" id="modalF" tabindex="-1" aria-labelledby="modalLabelF" aria-hidden="true">
                            <div class="modal-dialog modal-xl">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h1 class="modal-title fs-5" id="modalLabelF">Gráfica</h1>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body" >
                                        <div className="grafica-main">
                                            <Graph functionToGraph={funcionG.quadraticFunction} rangeIn={valueR - 4} rangeEnd={valueR + 4} />
                                        </div>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                }

            </section>

        </div>
    )
}

export default FalsaPosicion