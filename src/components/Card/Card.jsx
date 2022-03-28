import React from 'react'
import { NavLink } from 'react-router-dom';
import arc from "../../assets/arc.png";
import "./styles.css"

export default function Card() {
    return (
        <div className='container bg-white py-2 px-2'>
            <div class="row row-cols-1 row-cols-md-1 ">
                <div class="col">
                    <div class="card">
                        <img src={arc} class="card-img-top" alt="..."/>
                            <div class="card-body justify-content-center text-center">
                                <h5 class="card-title text-center">ARC 001</h5>
                                <NavLink className="btn btn-outline-dark" to={`/navegacao/equipamentos/${arc.id}`}>View</NavLink>
                            </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}
