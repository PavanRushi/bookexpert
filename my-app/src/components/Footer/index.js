
import "./index.css"

const Footer = () => (
    <div className="footer-container">
        <div className="video-container">
            <div className="video" >
                <a href="https://youtu.be/5bI1vSBFzsI" target="_blank" rel="noreferrer" className="video-card"> 
                    <img   src="https://i.ibb.co/c3nnSKr/login-image-fb.png"  alt="login-img" className="img-footer"/>
                    Click here
                </a>
            </div>
            <div className="video">
                <a href="https://youtu.be/zrwd62fBY_A" target="_blank" rel="noreferrer" className="video-card"> 
                    <img   src="https://i.ibb.co/D9bDMwr/insta-login.jpg"  alt="login-img" className="img-footer"/>
                    Click here
                </a>
            </div> 
        </div>
        <div className="info-card">
            <h2 className="info-heading">Info: </h2>
            <div className="info-row">
                <img src="https://i.ibb.co/p4VY7KP/call-img.png" alt="call-img" className="location-img" />
                <a href="tel:9014538006" className="map-para">9014538006</a>
            </div>
            <div className="info">
                <a href="https://www.google.com/maps/place/Bahadurguda,+Hyderabad,+Telangana/@17.358925,78.5324901,14z/data=!3m1!4b1!4m6!3m5!1s0x3bcb98aeadc10291:0x6e2e7faa27222ade!8m2!3d17.3457176!4d78.5522296!16zL20vMDlubV93" target="_blank" rel="noreferrer" className="info-row" >
                    <img src="https://i.ibb.co/HCbsJzq/location.webp" alt="location-img" className="location-img"/>
                    <p className="map-para">Route Map</p>
                </a>
            </div>
        </div>
    </div>
)
export default Footer