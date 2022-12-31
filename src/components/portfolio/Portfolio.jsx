import React from 'react'
import "./portfolio.css"

import IMG1 from '../../assets/Batatabit.png'
import IMG2 from '../../assets/Zgym.png'
import IMG3 from '../../assets/LastTry.png'
import IMG4 from '../../assets/TPS.png'
import IMG5 from '../../assets/Adventure.png'
import IMG6 from '../../assets/pilomex.png'
import IMG7 from '../../assets/ts.png'
import IMG8 from '../../assets/google clone.png'
import IMG9 from '../../assets/doggies.png'
import IMG10 from '../../assets/chilango.png'
import IMG11 from '../../assets/Q.png'

const data = [
    {
        id: 1,
        image: IMG1,
        title: 'Batatabit 2020 - Mi primera landing page',
        github: 'https://github.com/JoseHerCast/Batatabit_2020',
        demo: 'https://josehercast.github.io/Batatabit_2020/'
    },
    {
        id: 2,
        image: IMG2,
        title: 'Zgym - landing page gimnasio',
        github: 'https://github.com/JoseHerCast/ZGYM',
        demo: 'https://josehercast.github.io/ZGYM/'
    },
    {
        id: 3,
        image: IMG3,
        title: 'Last Try - Videojuego (Demo)',
        github: 'https://github.com/JoseHerCast/LasTry',
        demo: 'https://josehercast.github.io/zombies-demo/'
    },
    {
        id: 4,
        image: IMG4,
        title: 'Space TPS - Videojuego (Demo)',
        github: 'https://playcanvas.com/editor/project/854557',
        demo: 'https://playcanv.as/p/ePi9vdIo/'
    },
    {
        id: 5,
        image: IMG5,
        title: 'Adventure - Landing page utilizando una API de la NASA',
        github: 'https://github.com/JoseHerCast/DEVF_Prueba/tree/master/prueba_DEVF',
        demo: 'https://josehercast.github.io/DEVF_Prueba/prueba_DEVF/'
    },
    {
        id: 6,
        image: IMG6,
        title: 'Pilomex - Id virtual responsiva',
        github: 'https://github.com/JoseHerCast/PILOMEX',
        demo: 'https://josehercast.github.io/PILOMEX/004.html'
    },
    {
        id: 7,
        image: IMG7,
        title: 'TS email - Pagina en HTML para añadirse en correo',
        github: 'https://github.com/JoseHerCast/TS-email-page',
        demo: 'https://josehercast.github.io/TS-email-page/'
    },
    {
        id: 8,
        image: IMG8,
        title: 'Google Clone - Clon no funcional del buscador',
        github: 'https://github.com/JoseHerCast/Google_Clone',
        demo: 'https://josehercast.github.io/Google_Clone/'
    },
    {
        id: 9,
        image: IMG9,
        title: 'Patitas a casa - Concepto de aplicación',
        github: 'https://github.com/JoseHerCast/patitasACasa',
        demo: 'https://www.youtube.com/watch?v=oDap4EOvl5s'
    },
    {
        id: 10,
        image: IMG10,
        title: 'Chilan-Go - Concepto de aplicación',
        github: 'https://github.com/JoseHerCast/Chilan-Go',
        demo: 'https://www.youtube.com/watch?v=MFhuL6gE1vU'
    },
    {
        id: 11,
        image: IMG11,
        title: 'Q - Concepto de aplicación',
        github: 'https://github.com/JoseHerCast/Q',
        demo: 'https://www.youtube.com/watch?v=NZdhHIPeh9Q'
    }
]

const Portfolio = () => {
    return (
        <section id='portfolio'>
            <h5>Mis trabajos</h5>
            <h2>Portafolio</h2>

            <div className="container portfolio_container">
                {
                    data.map(({ id, image, title, github, demo }) => {
                        return (
                            <article key={id} className="portfolio_item">
                                <div className="portfolio_item-image">
                                    <img src={image} alt="" />
                                </div>
                                <h3>{title}</h3>
                                <div className="portfolio_item-cta">
                                    <a href={github} className='btn' target="_blank">GitHub</a>
                                    <a href={demo} className='btn btn-primary' target="_blank">Live Demo</a>
                                </div>
                            </article>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Portfolio