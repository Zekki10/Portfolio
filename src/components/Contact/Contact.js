import './Contact.css'
import { Linkedin } from './ico/Linkedin'
import { Mail } from './ico/Mail'

export const Contact = () => {

    return (
        <div className='contact_container' id='Contact'>
            {/* <img alt='cube' className='contact_cube' src='/media/img/3.png'></img> */}
            <div className='contact_buttons'>
                <h1 className="about_title">Contacta conmigo</h1>
                <p className='contact_description'>Accede a mis redes a través de los siguientes Links, o descarga mi CV para seguir conociéndome!</p>
                <div className='ico_container'>
                    <a target={"_blank"} rel="noreferrer" href='https://www.linkedin.com/in/ezequielvera391/'><Linkedin /></a>
                    <a href='mailto:ezequiel.vera.rodriguez@gmail.com'><Mail /></a> 
                </div>
                <a 
                    className='contact_download'
                    download="Ezequiel Vera - CV" 
                    href="/media/Ezequiel Vera - CV.pdf"
                >
                    Descargar CV
                </a> 
            </div>
        </div>
    )
}