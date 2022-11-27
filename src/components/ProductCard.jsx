import PropTypes from 'prop-types';
import editIcon from '../assets/icons/edit-svgrepo-com.svg'
import deleteIcon from '../assets/icons/delete-svgrepo-com.svg'

export const ProductCard = ( { tipo, producto, _id, id, onSubmitMethod, form } ) => {

  const onEdit = (e) => {
    const cardID = e.target.parentElement.parentElement.id;
    const popUp = document.querySelector( ".popUp-container" );
    popUp.style.display = 'flex';
    onSubmitMethod('put');
    id( cardID );
    form(true);
  }

  return (
    <div className='card' id={ _id }>
        <p className='card-labels'>Tipo:</p>
        <p className='card-text'>{ tipo }</p>

        <p className='card-labels'>Nombre:</p>
        <p className='card-text'>{ producto }</p>
        <figure className='card-icons'>
            <img 
              src={ editIcon } 
              alt="icono editar" 
              title='Editar' 
              onClick={ onEdit }
            />
            <img src={ deleteIcon } alt="icono eliminar" title='Eliminar' />
        </figure>
    </div>
  )
}

ProductCard.propTypes = {
    tipo: PropTypes.string.isRequired,
    producto: PropTypes.string.isRequired
}