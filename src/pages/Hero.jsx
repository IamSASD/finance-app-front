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
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda adipisci exercitationem cupiditate, nesciunt enim quas commodi blanditiis in. Accusamus voluptatem nisi nulla consequatur rem a dolorem veniam vitae blanditiis, error reiciendis temporibus atque sapiente amet rerum! Sint voluptatum excepturi consequuntur.
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