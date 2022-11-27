import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { HomeBar } from '../components';

import '../css/hero.css';
import '../css/main.css';
import '../css/session.css'
import { fetchLogin } from '../helpers/fetchLogin';

export const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setpassword] = useState('');

    const onInputChange = (e) => {
        const { id, value } = e.target;
        id == 'email' ? setEmail(value) : '';
        id == 'password' ? setpassword(value) : '';
    }

    const onFormSumbit = (e) => {
        e.preventDefault();
        const body = {
            email,
            password
        }
        fetchLogin(body)
        .then( res => isLogin(res) );
    }

    const navigate = useNavigate();
    const isLogin = (code) => {
        if(code == 2){
            navigate('/products');
        }
    }

  return (
    <div className="session-background">
        <div className="black-transparency">
            <header className="hero-bar container">
                <HomeBar />
            </header>
            <div className="form-container">
                <form onSubmit={ onFormSumbit } className="session-form container">
                    
                    <h2 className='session-title'>
                        Iniciar Sesion
                    </h2>
                    
                    <label className='session-label' htmlFor="mail">Correo</label>
                    <input 
                        className='session-input' 
                        type="email" 
                        id="email" 
                        onChange={ onInputChange }
                        value={ email }
                        required placeholder='example@gmail.com' />

                    <label className='session-label' htmlFor="password">Contraseña</label>
                    <input 
                        className='session-input' 
                        type="password" 
                        id='password'
                        onChange={ onInputChange }
                        value={ password }
                        required placeholder='example123' />

                    <button className='session-submit' type='submit'>
                        Iniciar Sesion
                    </button>
                    
                    <div className='session-redirect'>
                        <p>
                            ¿No tienes una cuenta?
                        </p>
                        <Link to={'/register'}>
                            Crear una cuenta
                        </Link>
                    </div>

                </form>
            </div>
        </div>
    </div>
  )
}
