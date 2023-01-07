import React from 'react'
import "./footer.css"
import { FaFacebookF, FaYoutube } from "react-icons/fa"
import { FiInstagram } from "react-icons/fi"

const Footer = () => {
    return (
        <footer>
            <a href="#" className='footer_logo'>JOSS</a>

            <ul className='permalinks'>
                <li><a href="#">Inicio</a></li>
                <li><a href="#abou">Acerca de</a></li>
                <li><a href="#experience">Experiencia</a></li>
                <li><a href="#services">Servicios</a></li>
                <li><a href="#portfolio">Portafolio</a></li>
                <li><a href="#contact">Contacto</a></li>
            </ul>

            <div className="footer_socials">
                <a href="https://www.facebook.com/jose.her.cast"><FaFacebookF /></a>
                <a href="https://www.instagram.com/hernandez9311/"><FiInstagram /></a>
                <a href="https://www.youtube.com/channel/UCZPJZGFYDfeC5xUDZrjX3Tg"><FaYoutube /></a>
            </div>

            <div className="footer_copyright">
                <small>&copy; EGATOR Todos los derechos reservados</small>
            </div>
        </footer>
    )
}

export default Footer