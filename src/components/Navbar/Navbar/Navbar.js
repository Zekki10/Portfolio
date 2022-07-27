import { Logo } from "./icons/logo"
import { Link, animateScroll as scroll } from "react-scroll";
import "./Navbar.css"
import { Settings } from "./icons/settings";
import { ResponsiveNav } from "./ResponsiveNav/ResponsiveNav";

export const NavBar = () => {
    return (
        <>
        <nav className="nav_container">
        <ResponsiveNav />
            <button className="logo_button" onClick={() => scroll.scrollToTop()}>
                <Logo />
            </button>  
            <ul className="nav_list">
                <li className="nav_item">
                    <Link
                        className="nav_link"
                        activeClass="active"
                        to="Home"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >
                    INICIO
                    </Link>
                </li>
                <li className="nav_item">
                    <Link
                    className="nav_link"
                    activeClass="active"
                    to="About"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    >
                    SOBRE MI
                    </Link>
                </li>
                <li className="nav_item">
                    <Link
                        className="nav_link"
                        activeClass="active"
                        to="Portfolio"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        >
                        PORTFOLIO
                    </Link>
                </li>
                <li className="nav_item">
                    <Link
                        className="nav_link"
                        activeClass="active"
                        to="Contact"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={700}
                        >
                        CONTACTO
                    </Link>
                </li>
                {/* <li className="nav_item item_option">
                    <Settings />
                </li> */}

            </ul>
        </nav>
        </>
    )
}