import "./Home.css"

export const Home = () => {

    return (
        <div className="home_container"  id='Home'>
            <div className="video_container">
                <video src="./media/video/dcd067708a.mp4" autoPlay muted loop className="background_video">
                </video>
            </div>
            <section className="home_info">
                <div className="home_title">
                    <h2 className="home_name home_animation">EZEQUIEL VERA</h2>
                    <h4 className="home_dev home_animation_two">WEB DEVELOPER</h4>
                </div>
                {/* <img alt="img_cubo" src="./media/img/1.png" className="home_img" /> */}
            </section>
            
        </div>
    )
}