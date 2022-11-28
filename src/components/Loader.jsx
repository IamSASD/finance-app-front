import '../css/loader.css';

export const Loader = () => {
  return (
    <div className='loader-container'>
        <div className="waveform">
            <div className="waveform__bar"></div>
            <div className="waveform__bar"></div>
            <div className="waveform__bar"></div>
            <div className="waveform__bar"></div>
        </div>
    </div>
  )
}