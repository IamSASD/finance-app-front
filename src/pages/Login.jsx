import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { HomeBar } from '../components';

import '../css/hero.css';
import '../css/main.css';
import '../css/session.css'

export const Login = ({ type }) => {
  return (
    <div className="session-background">
        <div className="black-transparency">
            <header className="hero-bar container">
                <HomeBar />
            </header>
            <div className="form-container">
                <form className="session-form container">
                    
                    <h2 className='session-title'>
                        { type == 'login' ? 'Iniciar Sesion' 
                        : type == 'register' ? 'Registro'
                        : 'Finanzas App' }
                    </h2>

                    <label className={ type == 'login' ? 'hide-input' : 'session-label' } htmlFor="name">Nombre</label>
                    <input className={ type == 'login' ? 'hide-input' : 'session-input' } type="text" id='name' required placeholder='Andres' />
                    
                    
                    <label className='session-label' htmlFor="mail">Correo</label>
                    <input className='session-input' type="email" id="mail" required placeholder='example@gmail.com' />

                    <label className='session-label' htmlFor="password">Contraseña</label>
                    <input className='session-input' type="password" id='password' required placeholder='example123' />

                    <Link  to={ '/activity' }>
                        <button className='session-submit'>
                            { type == 'login' ? 'Iniciar' 
                            : type == 'register' ? 'Registrarse'
                            : '' }
                        </button>
                    </Link>
                    
                    <div className='session-redirect'>
                        <p>
                            {
                                type == 'login' ? '¿No tienes una cuenta?'
                                : type == 'register' ? '¿Ya tienes una cuenta?'
                                : ''
                            }
                        </p>
                        <Link to={ type == 'login' ? '/register'
                                : type == 'register' ? '/login'
                                : '' }>
                            {
                                type == 'login' ? 'Registrarse'
                                : type == 'register' ? 'Iniciar Sesion'
                                : ''
                            }
                        </Link>
                    </div>

                </form>
            </div>
        </div>
    </div>
  )
}

Login.propTypes = {
    type: PropTypes.string.isRequired
}