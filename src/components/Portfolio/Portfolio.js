import './Portfolio.css'
import { proyectsList } from '../../utils/cardsMock'

export const Portfolio = () => {

    return (
        <div className="portfolio_container" id='Portfolio'>
            <h1 className="portfolio_title">Portfolio</h1>
            {/* <img alt='rombo' className='img_rombo' src='/media/img/2.png' /> */}
        {   
            proyectsList.map(({id, title, description, img, gitHub, url }) =>{
                if (id % 2 === 0 ) {
                return (          
                    <div key={id} className="portfolio_card card_left">
                        <img className='portfolio_img' alt='img_proyecto' src={`./media/img/portfolio/${img}`} />
                        <img className='portfolio_branch' alt='' src='./media/img/portfolio/rama-izq.png' />
                        <div className='portfolio_description'>
                            <h1 className='card_title'>{title}</h1>
                            <p className='card_description'>{description}</p>
                            {
                                url === "" && <p className='error_host'>Este proyecto aún no esta hosteado</p>
                            }
                        <div className='links_container'>

                            <a className='card_link' target={'_blank'} rel="noreferrer" href={gitHub}>GitHub</a>
                            { 
                            url === "" ?
                            <a className='card_link link_disable' role="link" aria-disabled="true">Website</a>
                            : <a className='card_link' target={'_blank'} rel="noreferrer" href={url}>Website</a>
                            }                            

                        </div>
                        </div>
                    </div>
                )
                } else {
                    return (
                        <div key={id} className="portfolio_card card_right"  >
                            <div className='portfolio_description'>
                                <h1 className='card_title'>{title}</h1>
                                <p className='card_description'>{description}</p>
                                <div className='links_container'>
                                    <a className='card_link' target={'_blank'} rel="noreferrer" href={gitHub}>GitHub</a>
                                    <a className='card_link' target={'_blank'} rel="noreferrer" href={url}>Website</a>
                                </div>
                            </div>
                            <img className='portfolio_branch' alt='' src='./media/img/portfolio/rama-der.png' />
                            <img className='portfolio_img' alt='img_proyecto' src={`./media/img/portfolio/${img}`} />
                        </div>
                    )
                }
            })
        }      
        </div>
    )
}