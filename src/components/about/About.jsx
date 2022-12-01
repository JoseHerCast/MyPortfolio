import React from 'react'
import "./about.css"
import ME from "../../assets/me_about.png"
import { FaAward } from "react-icons/fa"
import { TbCertificate } from "react-icons/tb"
import { HiCode } from "react-icons/hi"

const About = () => {
    return (
        <section id='about'>
            <h5>Conóceme</h5>
            <h2>Acerca de mí</h2>
            <div className="container about_container">
                <div className="about_me">
                    <div className="about_me-image">
                        <img src={ME} alt="Imagen acerca de mí" />
                    </div>
                </div>
                <div className="about_content">
                    <div className="about_cards">
                        <article className='about_card'>
                            <FaAward className='about_icon'></FaAward>
                            <h5>Experiencia</h5>
                            <small>10+ Años como Desarrollador de Software</small>
                        </article>

                        <article className='about_card'>
                            <HiCode className='about_icon'></HiCode>
                            <h5>Proyectos</h5>
                            <small>20+ Desarrollos de respaldo</small>
                        </article>

                        <article className='about_card'>
                            <TbCertificate className='about_icon'></TbCertificate>
                            <h5>Preparación</h5>
                            <small>15+ Cursos completados y contando</small>
                        </article>
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate, sapiente asperiores ipsum cupiditate repudiandae itaque eveniet, commodi nemo voluptatum a dolor earum dolores. Explicabo et repellendus adipisci cupiditate, reprehenderit excepturi.
                    </p>
                    <a href="#contact" className='btn btn-primary'>Contáctame</a>
                </div>
            </div>
        </section>
    )
}

export default About