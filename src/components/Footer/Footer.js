import './Footer.css'
import { ReactLogo } from './ReactLogo'

export const Footer = () => {

    return (
        <footer className='footer_container'>
            <p className='footer_text'>Realizado con React</p>
            <ReactLogo />
        </footer>
    )
}