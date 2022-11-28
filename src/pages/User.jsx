import axios from "axios"
import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { Footer, NavBar } from "../components"
import '../css/product-activity.css'
import '../css/user.css'
import { BASE_URL } from "../helpers/config"
import { fetchLogout } from "../helpers/fetchLogout"

export const User = () => {

  const [userName, setUserName] = useState('')
  const [userEmail, setUserEmail] = useState('');

  const onLogout = () => {
    fetchLogout()
    .then(res => isLogOut(res))
  }

  const navigate = useNavigate();
  const isLogOut = (code) => {
    code ? navigate('/') : '';
  }

  useEffect( () => {
    const userData = async() => {
      await axios({
        url: `${BASE_URL}/checkout`,
        method: 'POST',
        withCredentials: true
      })
      .then( res => {
        const { usuario, email } = res.data.user;
        setUserEmail(email);
        setUserName(usuario);
      } )
      .catch( err => console.log(err) );
    }
    userData()
  }, [] )

  return (
    <div>
        <NavBar component={ 'user' } />
        <main className="content">
          <div className="container">
            <h2 className="h2-title">
              Mi Perfil
            </h2>
            <div className="form-container">
              <form className="user-form">
                <label htmlFor="name">Nombre</label>
                <input type="text" id="name" disabled placeholder="Andres" value={userName}/>
                
                <label htmlFor="mail">Correo</label>
                <input type="email" disabled  placeholder="example@gmail.com" value={userEmail}/>
              </form>
              <div className="button-container">
                <button 
                  className="close-session"
                  onClick={ onLogout }
                >Cerrar Sesion</button>
              </div>
            </div>
          </div>
        </main>
        <Footer />
    </div>
  )
}
