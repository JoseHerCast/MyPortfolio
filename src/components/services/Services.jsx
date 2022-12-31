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
                            <p>Interfaces amigables e intuitivas con el usuario.</p>
                        </li>
                        <li>
                            <BsCheck className='service_list-icon'></BsCheck>
                            <p>Productos atractivamente visuales.</p>
                        </li>
                        <li>
                            <BsCheck className='service_list-icon'></BsCheck>
                            <p>Experiencias únicas relacionadas con tu marca</p>
                        </li>
                        <li>
                            <BsCheck className='service_list-icon'></BsCheck>
                            <p>Funcionalidades inmersivas y de realidad virtual</p>
                        </li>
                        <li>
                            <BsCheck className='service_list-icon'></BsCheck>
                            <p>Diseño responsivo</p>
                        </li>
                    </ul>
                </article>
                {/* TERMINA UX/UI */}
                <article className='service'>
                    <div className='service_head'>
                        <h3>Desarrollo Web</h3>
                    </div>

                    <ul className='service_list'>
                        <li>
                            <BsCheck className='service_list-icon'></BsCheck>
                            <p>Páginas web estáticas y dinamicas</p>
                        </li>
                        <li>
                            <BsCheck className='service_list-icon'></BsCheck>
                            <p>WebApps</p>
                        </li>
                        <li>
                            <BsCheck className='service_list-icon'></BsCheck>
                            <p>Frontend y Backend con manejo de frameworks</p>
                        </li>
                        <li>
                            <BsCheck className='service_list-icon'></BsCheck>
                            <p>Desarrollo contínuo (CI/CD)</p>
                        </li>
                    </ul>
                </article>
                {/* TERMINA WEB */}
                <article className='service'>
                    <div className='service_head'>
                        <h3>Desarrollo Móvil</h3>
                    </div>

                    <ul className='service_list'>
                        <li>
                            <BsCheck className='service_list-icon'></BsCheck>
                            <p>Desarrollo multiplataforma</p>
                        </li>
                        <li>
                            <BsCheck className='service_list-icon'></BsCheck>
                            <p>Servicios en tiempo real</p>
                        </li>
                        <li>
                            <BsCheck className='service_list-icon'></BsCheck>
                            <p>Integración con WebApps e interfaces externas</p>
                        </li>
                        <li>
                            <BsCheck className='service_list-icon'></BsCheck>
                            <p>Gamificación</p>
                        </li>
                    </ul>
                </article>
                {/* TERMINA DESARROLLO MÓVIL */}
            </div>
        </section>
    )
}

export default Services