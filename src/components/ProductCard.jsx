import PropTypes from 'prop-types';
import editIcon from '../assets/icons/edit-svgrepo-com.svg'
import deleteIcon from '../assets/icons/delete-svgrepo-com.svg'

export const ProductCard = ( { type, name } ) => {
  return (
    <div className='card'>
        <p className='card-labels'>Tipo:</p>
        <p className='card-text'>{ type }</p>

        <p className='card-labels'>Nombre:</p>
        <p className='card-text'>{ name }</p>
        <figure className='card-icons'>
            <img src={ editIcon } alt="icono editar" title='Editar' />
            <img src={ deleteIcon } alt="icono eliminar" title='Eliminar' />
        </figure>
    </div>
  )
}

ProductCard.propTypes = {
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
}