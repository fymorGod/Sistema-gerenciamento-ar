import React from 'react'
import arc from "../../assets/arc.png";
import "./styles.css"

export default function Card() {
    return (
        <div className='container bg-white py-3 px-3'>
            <div class="row row-cols-4 row-cols-md-4 g-3">
                <div class="col">
                    <div class="card">
                        <img src={arc} class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title text-center">ARC 001</h5>
                                
                            </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <img src={arc} class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title text-center">ARC 001</h5>
                                
                            </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <img src={arc} class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title text-center">ARC 001</h5>
                            </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <img src={arc} class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title text-center">ARC 001</h5>
                                
                            </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}
