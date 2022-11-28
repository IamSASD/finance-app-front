import PropTypes from 'prop-types'
import '../css/errorMessage.css'

export const ErrorMessage = ( {message} ) => {
  return (
    <div className="error-message">
        <p className="error-text">
            {message}
        </p>
    </div>
  )
}

ErrorMessage.propTypes = {
    message: PropTypes.string.isRequired
}