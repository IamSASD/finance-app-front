import PropTypes from 'prop-types';
import close from '../assets/icons/cross-close-svgrepo-com.svg';
import '../css/product-activity.css';

export const FormPopUp = ({ title, fields, fieldType, inputType, placeholder }) => {

    const hidePopUp = () => {
        const popUp = document.querySelector( '.popUp-container' );
        popUp.style.display = 'none';
    }

  return (
    <div className="popUp-container">
        <div className="popUp-wrapper">
            <div className='popUp-head'>
                <div className="popUp-head-title">
                    <h2 className='popUp-title'>{ title }</h2>
                </div>
                <img onClick={ hidePopUp } src={ close } alt="delete" />
            </div>
            <form className="popUp-form">
                { 
                    fields.map( ( fieldName, i ) => (
                        <div key={ fieldName } className="popUp-field">
                            <label className='popUp-label' htmlFor={ fieldName }>{ `${fieldName}:` }</label>
                            { 
                                fieldType[i] == 'input' || fieldType[i] == '' ? <input type={ inputType[i] } placeholder={ placeholder !== undefined ? placeholder[i] : '' } id={ fieldName } min="0" /> 
                                : fieldType[i] == 'select' ? <select defaultValue={ 'DEFAULT' } id={ fieldName }>
                                    <option value={ 'DEFAULT' } disabled>--Selecciona una opcion--</option>
                                    <option value="Debito">Debito Bancolombia</option>
                                    <option value="Banco">Cuenta de Ahorros Davivienda</option>
                                </select>
                                : ''
                            }
                        </div>
                    ) )
                }
                <div className="form-submit">
                    <input type="submit" value={ 'Agregar' } />
                </div>
            </form>
        </div>
    </div>
  )
}

FormPopUp.propTypes = {
    title: PropTypes.string.isRequired,
    fields: PropTypes.array.isRequired,
    fieldType: PropTypes.array.isRequired,
    inputType: PropTypes.array.isRequired,
    placeholder: PropTypes.array
}