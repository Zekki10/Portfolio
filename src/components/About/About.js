import "./About.css"

export const About = () => {
    
    return (
        <div className="about_container" id='About' >
            <h1 className="about_title">Sobre mi</h1>
            <p className="about_description">
                Hola, me llamo Ezequiel Vera y soy <strong>Desarrollador Web</strong>.
                En este Portfolio vas a encontrar una selección de mis trabajos y proyectos, en los que más trabajé y que mejor me representan.
            </p>
            <br></br>
            <p className="about_description">
                Comencé estudiando de forma autodidacta en el 2020, aprendiendo las bases del Desarrollo Web y los lenguajes HTML, CSS y JavaScript.
                Conseguí una vacante para el curso Full Stack Python de <strong>Codo a codo 4.0</strong> del gobierno de la ciudad, donde profundicé y puse a prueba mis conocimientos en programación.
                Motivado en conocer nuevas herramientas, me inscribí en el curso de <strong>React Js</strong> de <strong>CoderHouse</strong>. Mis últimos trabajos están enfocados en este Framework de JavaScript que considero tiene un gran potencial.
                Actualmente estoy estudiando para elevar mi manejo del idioma Ingles e incursionar aún más en el backend con el curso del conocido framework Django para el desarrollo web en Python.
            </p>
            <h2 className="about_tech_title">TECNOLOGÍAS</h2>
            <div className="img_tech_container">
                <div className="img_tech_firstrow">
                    <div className="spin_container">
                        <img className="spin_img" alt="tech" src="./media/img/react-ico.png"></img>
                        <p className="spin_txt">React</p>
                    </div>
                    <div className="spin_container">
                        <img className="spin_img" alt="tech" src="./media/img/html-ico.png"></img>
                        <p className="spin_txt">HTML5</p>
                    </div>
                    <div className="spin_container">
                        <img className="spin_img" alt="tech" src="./media/img/css-ico.png"></img>
                        <p className="spin_txt">CSS3</p>
                    </div>
                    <div className="spin_container">
                        <img className="spin_img" alt="tech" src="./media/img/javaScript-ico.png"></img>
                        <p className="spin_txt">JavaScript</p>
                    </div>
                    <div className="spin_container">
                        <img className="spin_img" alt="tech" src="./media/img/Python-ico.png"></img>
                        <p className="spin_txt">Python</p>
                    </div>
                </div>
                <div className="img_tech_secondrow">
                    <div className="spin_container">
                        <img className="spin_img" alt="tech" src="./media/img/mySql-ico.png"></img>
                        <p className="spin_txt">MySql</p>
                    </div>
                    <div className="spin_container">
                        <img className="spin_img" alt="tech" src="./media/img/firebase-ico.png"></img>
                        <p className="spin_txt">Firebase</p>
                    </div>
                    <div className="spin_container">
                        <img className="spin_img" alt="tech" src="./media/img/boots-ico.png"></img>
                        <p className="spin_txt">Bootstrap</p>
                    </div>
                </div>
            </div>
            <div className="about_courses_section">
                <h2 className="about_tech_title courses_title">CURSOS</h2>
                <ul className="about_courses">
                    <li className="courses_item">
                        <img alt="codo_logo" className="courses_img" src="/media/img/codoacodo.png" />
                        <p className="courses_name" >Full Stack Python - Codo a codo 4.0</p>
                    </li>
                    <li className="courses_item">
                        <img alt="codo_logo" className="courses_img" src="/media/img/coderhouse-logo.png" />
                        <p className="courses_name" >React js - CoderHouse</p>
                    </li>
                    <li className="courses_item">
                        <img alt="codo_logo" className="courses_img" src="/media/img/codoacodo.png" />
                        <p className="courses_name" >Django - Codo a codo 4.0 <br></br>(En curso)</p>
                    </li>
                </ul>
            </div>
            <div className="about_english">
                <h2 className="about_tech_title english_title">INGLES</h2>
                <div className="english_level">
                    <p className="english_desc courses_name"><strong>Level:</strong> A2 - GSE range: 30-35</p>
                    <span className="english_courses_container">
                        <img alt="codo_logo" className="courses_img" src="/media/img/logo_agencia_solo.png" />
                        <p className="english_desc courses_name" >Ingles para el trabajo - Agencia de aprendizaje a lo largo de la vida (En curso)</p>
                    </span>
                </div>
            </div>
        </div>
    )
}