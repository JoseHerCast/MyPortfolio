import React from 'react'
import "./services.css"
import { BsCheck } from "react-icons/bs"

const Services = () => {
    return (
        <section id='services'>
            <h5>¿Que ofrezco?</h5>
            <h2>Servicios</h2>

            <div className='container services_container'>
                <article className='service'>
                    <div className='service_head'>
                        <h3>Diseño UX/UI</h3>
                    </div>

                    <ul className='service_list'>
                        <li>
                            <BsCheck className='service_list-icon'></BsCheck>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </li>
                        <li>
                            <BsCheck className='service_list-icon'></BsCheck>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </li>
                        <li>
                            <BsCheck className='service_list-icon'></BsCheck>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </li>
                        <li>
                            <BsCheck className='service_list-icon'></BsCheck>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </li>
                        <li>
                            <BsCheck className='service_list-icon'></BsCheck>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </li>
                    </ul>
                </article>
                {/* TERMINA UX/UI */}
                <article className='service'>
                    <div className='service_head'>
                        <h3>Diseño UX/UI</h3>
                    </div>

                    <ul className='service_list'>
                        <li>
                            <BsCheck className='service_list-icon'></BsCheck>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </li>
                        <li>
                            <BsCheck className='service_list-icon'></BsCheck>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </li>
                        <li>
                            <BsCheck className='service_list-icon'></BsCheck>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </li>
                        <li>
                            <BsCheck className='service_list-icon'></BsCheck>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </li>
                        <li>
                            <BsCheck className='service_list-icon'></BsCheck>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </li>
                    </ul>
                </article>
                {/* TERMINA WEB */}
                <article className='service'>
                    <div className='service_head'>
                        <h3>Diseño UX/UI</h3>
                    </div>

                    <ul className='service_list'>
                        <li>
                            <BsCheck className='service_list-icon'></BsCheck>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </li>
                        <li>
                            <BsCheck className='service_list-icon'></BsCheck>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </li>
                        <li>
                            <BsCheck className='service_list-icon'></BsCheck>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </li>
                        <li>
                            <BsCheck className='service_list-icon'></BsCheck>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </li>
                        <li>
                            <BsCheck className='service_list-icon'></BsCheck>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </li>
                    </ul>
                </article>
                {/* TERMINA CREACIÓN DE CONTENIDO */}
            </div>
        </section>
    )
}

export default Services