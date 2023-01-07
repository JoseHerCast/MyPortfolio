import React from 'react'
import "./header.css"
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
    return (
        <header>
            <div className="container header_container">
                <h5>Hola soy</h5>
                <h1>José Hernández</h1>
                <h5 className="text-light">Desarrollador Full-stack</h5>
                <CTA></CTA>
                <HeaderSocials></HeaderSocials>
                <div className="me">
                    <img src={ME} alt="Imágen de perfil" />
                </div>

                <a href="#contact" className='scroll_down'>Continúa hacia abajo</a>
            </div>
        </header>
    )
}

export default Header