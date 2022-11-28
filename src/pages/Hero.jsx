import '../css/hero.css'
import money from '../assets/money.svg';

import { Link } from 'react-router-dom';
import { HomeBar } from '../components/HomeBar';

export const Hero = () => {

    return (
        <header className="hero">
            <div className="black-transparency">
                <div className="container hero-container">
                    <section className="hero-bar">
                        <HomeBar />
                    </section>

                    <section className='hero-content'>
                        <div className='hero-content-text'>
                            <p className='hero-text'>
                            ¿Cansado de no tener claros tus gastos mensaules? ¿no tienes claridad del flujo de tu dinero? No te preocupes, con SEAN Finance te ayudamos a tener el control de tus gastos e ingresos con un modelo deplicación seguro y facil de usar. Unete a la comunidad SEAN Finance y se el mejor administrador de tu bolsillo
                            </p>
                            <div className='button-continer'>
                                <Link to={ '/login' } className='button-start'>Iniciar Ahora</Link>
                            </div>
                        </div>
                        <figure className='hero-image-container'>
                            <img src={ money } alt="finance-image" className="hero-img" />
                        </figure>
                    </section>
                </div>
            </div>
        </header>
    );

}