import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { HomeBar } from '../components';
import validator from 'validator';

import '../css/hero.css';
import '../css/main.css';
import '../css/session.css'
import { fetchRegister } from '../helpers/fetchRegister';
import { ErrorMessage } from '../components/ErrorMessage';

export const Register = () => {
    const [usuario, setUsuario] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showError, setShowError] = useState(false);
    const [message, setMessage] = useState('');

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

    const onChangeInput = (e) => {
        const { id, value } = e.target;
        id == 'usuario' ? setUsuario(value) : '';
        id == 'email' ? setEmail(value): '';
        id == 'password' ? setPassword(value): '';
    }

    
    const onFormSubmit = (e) => {
        e.preventDefault();
        const formData = {
            usuario,
            email,
            password
        }
        const resForm = fetchRegister(formData);
        resForm.then( res => {
            if(res == 2){
                isRegister(res)
            }else if(res == 0){
                setMessage('El correo ya esta en uso');
                setShowError(true)
                document.getElementById('usuario').focus();
                setInterval( () => {
                    setShowError(false)
                }, 5000 );
            }
        } );
        setUsuario('');
        setEmail('');
        setPassword('');
    }

    const navigate = useNavigate()
    const isRegister = (code) => {
        if( code == 2 ){
            navigate('/login');
        }else if(code == 0){
            console.log("El email ya esta en uso");
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
                        showError &&
                            <ErrorMessage 
                                message={ message }
                            />
                    }
                    <form 
                        className="session-form container" 
                        id='form-register'
                        onSubmit={ onFormSubmit }
                    >
                        
                        <h2 className='session-title'>
                            Registro
                        </h2>

                        <label className={ 'session-label' } htmlFor="name">Nombre</label>
                        <input 
                            className={ 'session-input' } 
                            type="text" 
                            id='usuario' 
                            required 
                            placeholder='Andres'
                            onChange={ onChangeInput }
                            value={usuario}
                            autoFocus={true}
                        />
                        
                        
                        <label className='session-label' htmlFor="mail">Correo</label>
                        <input 
                            className='session-input' 
                            type="email" 
                            id="email" 
                            required 
                            placeholder='example@gmail.com'
                            onChange={ onChangeInput }
                            value={email}
                        />

                        <label className='session-label' htmlFor="password">Contraseña</label>
                        <input 
                            className='session-input' 
                            type="password" 
                            id='password' 
                            required 
                            placeholder='example123'
                            onChange={ onChangeInput }
                            value={password}
                        />

                        <button className='session-submit' type="submit">
                            Registrarse
                        </button>
                        
                        <div className='session-redirect'>
                            <p>
                                ¿Ya tienes una cuenta?
                            </p>
                            <Link to={ '/login' }>
                                Iniciar Sesion
                            </Link>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    )
}