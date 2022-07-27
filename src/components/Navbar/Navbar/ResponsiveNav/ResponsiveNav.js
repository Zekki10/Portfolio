import { Turn as Hamburger } from 'hamburger-react'
import { useState } from 'react'
import { Link, animateScroll as scroll } from "react-scroll";

// https://hamburger-react.netlify.app/


export const ResponsiveNav = () => {
    const [isOpen, setOpen] = useState(false)
    const [color, setColor] = useState('#fff')

    return(
        <div className="responsiveNav_container">
            <Hamburger 
                onToggle={toggled => {
                    if (toggled) {
                        setColor('#000')
                    } else {
                        setColor('#fff')
                    }}}
                toggled={isOpen}
                toggle={setOpen}
                color={color}
                size={20}
            />
            { isOpen &&
            <>
            <div className='responsive_background'>
            </div>
            <div className='responsive_menu'>
                <ul className="responsive_nav_list">
                    <li className="responsive_nav_item">
                        <Link
                            className="responsive_nav_link"
                            activeClass="responsive_active"
                            to="Home"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            onClick={() => {
                                setOpen(false)
                                setColor('#fff')
                            }}
                        >
                        INICIO
                        </Link>
                    </li>
                    <li className="responsive_nav_item">
                        <Link
                        className="responsive_nav_link"
                        activeClass="responsive_active"
                        to="About"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        onClick={() => {
                            setOpen(false)
                            setColor('#fff')
                        }}
                        >
                        SOBRE MI
                        </Link>
                    </li>
                    <li className="responsive_nav_item">
                        <Link
                            className="responsive_nav_link"
                            activeClass="responsive_active"
                            to="Portfolio"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            onClick={() => {
                                setOpen(false)
                                setColor('#fff')
                            }}
                            >
                            PORTFOLIO
                        </Link>
                    </li>
                    <li className="responsive_nav_item">
                        <Link
                            className="responsive_nav_link"
                            activeClass="responsive_active"
                            to="Contact"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={700}
                            onClick={() => {
                                setOpen(false)
                                setColor('#fff')
                            }}
                            >
                            CONTACTO
                        </Link>
                    </li>
                    {/* <li className="nav_item item_option">
                        <Settings />
                    </li> */}
                </ul>
            </div>
            
            </>
            }
        </div>
    )
}