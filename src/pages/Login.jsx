import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { HomeBar } from '../components';
import validator from 'validator';

import '../css/hero.css';
import '../css/main.css';
import '../css/session.css'
import { fetchLogin } from '../helpers/fetchLogin';
import { ErrorMessage } from '../components/ErrorMessage';

export const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setpassword] = useState('');
    const [showError, setShowError] = useState(false);
    const [message, setMessage] = useState('');

    const onInputChange = (e) => {
        const { id, value } = e.target;
        id == 'email' ? setEmail(value) : '';
        id == 'password' ? setpassword(value) : '';
    }

    useEffect( () => {
        const inputEmail = document.getElementById('email');
        email == '' ? inputEmail.style.border = 'none' : '';
        if( validator.isEmail( email ) ){
            inputEmail.style.border = 'none';
        }else if( email != '' ){
            inputEmail.style.border = '1px solid red';
        }
    }, [email] )

    useEffect( () => {
        const inputPassword = document.getElementById('password');
        password == '' ? inputPassword.style.border = 'none' : '';
        if( password.length >= 8 ){
            inputPassword.style.border = 'none';
        }else if(password != ''){
            inputPassword.style.border = '1px solid red';
        }
    }, [password] )

    const onFormSumbit = (e) => {
        e.preventDefault();
        const body = {
            email,
            password
        }
        fetchLogin(body)
        .then( res => {
            if(res == 2){
                isLogin(res)
            }else if( res == 401 ){
                setShowError(true);
                setMessage('El usuario no esta registrado');
                document.getElementById('email').focus();
                setInterval( () => {
                    setShowError(false);
                }, 5000 )
            }
        } )
        setEmail('');
        setpassword('');
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
                {
                    showError 
                        && <ErrorMessage 
                                message={ message }
                            />
                }
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
                        required 
                        placeholder='example@gmail.com' 
                        autoFocus={true}
                    />

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
