import PropTypes from 'prop-types';
import editIcon from '../assets/icons/edit-svgrepo-com.svg'
import deleteIcon from '../assets/icons/delete-svgrepo-com.svg'
import { deleteProduct } from '../helpers/deleteProduct';

export const ProductCard = ( { tipo, producto, _id, id, onSubmitMethod, form, onProductsChange, values } ) => {

  const onEdit = (e) => {
    const cardID = e.target.parentElement.parentElement.id;
    onSubmitMethod('put');
    id( cardID );
    form(true);
    const cardValues = []
    document.querySelectorAll('.card-text').forEach( el => el.parentElement.id == cardID ? cardValues.push(el.innerText) : '' );
    values(cardValues);
  }

  const onDelete = (e) => {
    const cardID = e.target.parentElement.parentElement.id;
    deleteProduct(cardID)
      .then( res => onProductsChange(res) )
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
            <img 
              src={ deleteIcon } 
              alt="icono eliminar" 
              title='Eliminar' 
              onClick={ onDelete }
            />
        </figure>
    </div>
  )
}

ProductCard.propTypes = {
    tipo: PropTypes.string.isRequired,
    producto: PropTypes.string.isRequired
}