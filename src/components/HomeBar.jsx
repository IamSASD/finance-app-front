import { Link } from 'react-router-dom';
import github from '../assets/icons/github.svg';
import linkedin from '../assets/icons/linkedin.svg';
import '../css/hero.css'
import { Activity, User } from '../pages';

export const HomeBar = () => {
  return (
    <>
        <h1 className='hero-title'><Link to={ '/' }>SEAN FINANCE APP</Link></h1>
        <figure className='hero-icons-container'>
            <img className='hero-icons' src={ github } alt="github-repo" />
            <img className='hero-icons' src={ linkedin } alt="linkedin" />
        </figure>
    </>
  )
}
