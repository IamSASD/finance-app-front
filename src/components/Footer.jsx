import github from '../assets/icons/github.svg';
import linkedin from '../assets/icons/linkedin.svg';

export const Footer = () => {
  return (
    <div className="footer">
        <div className="container">
            <p>SEAN FINANCE APP - Mision Tic 2022</p>
            <figure className='footer-icons'>
                <img src={ github } alt="gitgub repo" />
                <img src={ linkedin } alt="linkedin" />
            </figure>
        </div>
    </div>
  )
}
