import React from 'react'
import { BsLinkedin, BsYoutube, BsGithub } from "react-icons/bs"


const HeaderSocials = () => {
    return (
        <div className='header_socials'>
            <a href="http://linkedin.com/in/jose-hernandez-wd" target="_blank"><BsLinkedin></BsLinkedin></a>
            <a href="https://github.com/JoseHerCast" target="_blank"><BsGithub></BsGithub></a>
            <a href="https://www.youtube.com/channel/UCZPJZGFYDfeC5xUDZrjX3Tg" target="_blank"><BsYoutube></BsYoutube></a>
        </div>
    )
}

export default HeaderSocials