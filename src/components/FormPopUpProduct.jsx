import { useEffect, useState } from 'react';
import close from '../assets/icons/cross-close-svgrepo-com.svg';
import '../css/product-activity.css';
import { newProduct } from '../helpers/newProduct';
import { updateProduct } from '../helpers/updateProduct';

export const FormPopUpProduct = ({ onProductsChange, submitMethod, cardId, form, values }) => {

    const [tipo, setTipo] = useState('');
    const [producto, setProducto] = useState('');

    useEffect(() => {
        document.getElementById('tipo').focus();
        if(submitMethod == 'put'){
            setTipo(values[0]);
            setProducto(values[1]);
        }
    }, [])
    

    const onInputChange = (e) => {
        const { value, id } = e.target;
        id == 'tipo' ? setTipo( value ) : '';
        id == 'producto' ? setProducto( value ) : '';
      }

    const hidePopUp = () => {
        setTipo('');
        setProducto('');
        form(false);
    }

    const onSubmitForm = (e) => {
        e.preventDefault();
        const body = {
            tipo,
            producto
        }
        if( submitMethod === 'post' ){
            newProduct( body ).then( res => onProductsChange(res) );
            hidePopUp();
        }else if( submitMethod === 'put' ){
            const id = cardId;
            updateProduct(body, id)
                .then( res => onProductsChange(res) );
            hidePopUp();
        }
    }
    
  return (
    <div className="popUp-container">
        <div className="popUp-wrapper">
            <div className='popUp-head'>
                <div className="popUp-head-title">
                    <h2 className='popUp-title'>Agregar Producto</h2>
                </div>
                <img onClick={ hidePopUp } src={ close } alt="delete" />
            </div>
            <form className="popUp-form" id="popUp-form-producto">
                <div className="popUp-field">
                    <label 
                        htmlFor='tipo' 
                        className='popUp-label'
                    >Tipo</label>
                    <input 
                        type='text' 
                        id='tipo' 
                        placeholder='Tarjeta Debito' 
                        value={ tipo }
                        onChange={ onInputChange }
                    />
                </div>
                <div className="popUp-field">
                    <label 
                        htmlFor='producto'
                        className='popUp-label'
                    >Producto</label>
                     <input 
                        type='text' 
                        id='producto' 
                        placeholder='Visa Bancolombia' 
                        value={ producto }
                        onChange={ onInputChange }
                    />
                </div>
                <div className="form-submit">
                    <input 
                        type="submit" 
                        value={ 'Agregar' }
                        onClick={ onSubmitForm } 
                    />
                </div>
            </form>
        </div>
    </div>
  )
}