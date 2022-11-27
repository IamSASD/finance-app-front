import { useEffect, useState } from 'react';
import close from '../assets/icons/cross-close-svgrepo-com.svg';
import '../css/product-activity.css';
import { getProducts } from '../helpers/getProducts';
import { newActivity } from '../helpers/newActivity';

export const FormPopUpActivity = ({ form, onNewActivity }) => {

    const [concepto, setConcepto] = useState('');
    const [cantidad, setCantidad] = useState('');
    const [products, setProducts] = useState([]);

    useEffect( () => {
        getProducts()
            .then( res => {
                setProducts(res);
            } )
    }, [] )

    const hidePopUp = () => {
        setConcepto('');
        setCantidad('');
        form(false);
    }

    const onInputChange = (e) => {
        const { value, id } = e.target;
        id == 'concepto' ? setConcepto( value ) : '';
        id == 'cantidad' ? setCantidad( value ) : '';
    }

    const onSubmitForm = (e) => {
        e.preventDefault();
        const producto = document.getElementById( 'producto-actividad' ).value;
        const ingreso_egreso = document.getElementById( 'egreso-ingreso' ).value;
        const body = {
            concepto,
            cantidad,
            producto,
            ingreso_egreso
        }
        newActivity(body)
            .then( res => onNewActivity(res) );
        hidePopUp()
    }

  return (
    <div className="popUp-container">
        <div className="popUp-wrapper">
            <div className='popUp-head'>
                <div className="popUp-head-title">
                    <h2 className='popUp-title'>Agregar Actividad</h2>
                </div>
                <img onClick={ hidePopUp } src={ close } alt="delete" />
            </div>
            <form className="popUp-form">
                <div className="popUp-field">
                    <label 
                        htmlFor='concepto' 
                        className='popUp-label'
                    >Concepto</label>
                    <input 
                        type='text' 
                        id='concepto' 
                        placeholder='Pago de la factura de internet' 
                        value={ concepto }
                        onChange={ onInputChange }
                    />
                </div>

                <div className="popUp-field">
                    <label 
                        htmlFor='cantidad'
                        className='popUp-label'
                    >Cantidad</label>
                    <input 
                        type='number' 
                        id='cantidad'
                        placeholder='90000' 
                        value={ cantidad }
                        onChange={ onInputChange }
                    />
                </div>
                <div className="popUp-field">
                    <label 
                        htmlFor='producto-actividad'
                        className='popUp-label'
                    >Producto</label>
                    <select defaultValue={ 'DEFAULT' } id='producto-actividad' onChange={ onInputChange }>
                        <option value={ 'DEFAULT' } disabled>--Selecciona una opcion--</option>
                        {
                            products?.map( el => <option key={ el._id } value={ el.producto }>{ el.producto }</option>  )
                        }
                    </select>
                </div>
                <div className="popUp-field">
                    <label 
                        htmlFor='egreso-ingreso'
                        className='popUp-label'
                    >Ingreso/Egreso</label>
                    <select defaultValue={ 'DEFAULT' } id='egreso-ingreso'>
                        <option value={ 'DEFAULT' } disabled>--Selecciona una opcion--</option>
                        <option value="Ingreso">Ingreso</option>
                        <option value="Egreso">Egreso</option>
                    </select>
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