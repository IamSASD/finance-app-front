import { Link, NavLink } from 'react-router-dom';
import '../css/product-activity.css';
import card from '../assets/icons/credit-card.svg';
import finance from '../assets/icons/money-finance.svg';
import user from '../assets/icons/user-svgrepo-com.svg'



export const NavBar = () => {

  return (
    <div className="nav">
        <div className='container'>
            <nav className='nav-container'>
                <h1 className='nav-title'>SEAN FINANCE APP</h1>
                <ul className="nav-menu">
                    <li className='nav-element'>
                        <NavLink title='Productos'>
                            <img className='nav-img' src={ card } alt="productos" />
                        </NavLink>
                    </li>
                    <li className='nav-element'>
                        <NavLink title='Actividad'>
                            <img className='nav-img' src={ finance } alt="actividad" />
                        </NavLink>
                    </li> 
                    <li className='nav-user'>
                        <img className='nav-user-button' src={ user } alt="perfil" />
                    </li>
                </ul>
            </nav>
            
        </div>
    </div>
  )
}
