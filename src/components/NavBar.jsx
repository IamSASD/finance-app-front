import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../css/product-activity.css';
import card from '../assets/icons/credit-card.svg';
import finance from '../assets/icons/money-finance.svg';
import user from '../assets/icons/user-svgrepo-com.svg'
import add from '../assets/icons/add-svgrepo-com.svg'



export const NavBar = ({ component }) => {

    const showPopUp = () => {
        const popUp = document.querySelector( ".popUp-container" );
        popUp.style.display = 'flex';
    }

  return (
    <div className="nav">
        <div className='container'>
            <nav className='nav-container'>
                <h1 className='nav-title'>SEAN FINANCE APP</h1>
                <figure onClick={ showPopUp } className={ component == 'user' ? 'hide-input' : 'add' }>
                    <img src={ add } alt="Agregar" />
                </figure>
                <ul className="nav-menu">
                    <li className='nav-element'>
                        <NavLink title='Productos' to={ '/products' }>
                            <img className='nav-img' src={ card } alt="productos" />
                        </NavLink>
                    </li>
                    <li className='nav-element'>
                        <NavLink title='Actividad' to={ '/activity' }>
                            <img className='nav-img' src={ finance } alt="actividad" />
                        </NavLink>
                    </li> 
                    <li className='nav-user'>
                        <NavLink to={ '/user' }>
                            <img className='nav-user-button' src={ user } alt="perfil" />
                        </NavLink>
                    </li>
                </ul>
            </nav>
            
        </div>
    </div>
  )
}

NavBar.propTypes = {
    component: PropTypes.string
}
