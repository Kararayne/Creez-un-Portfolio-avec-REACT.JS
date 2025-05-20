import '../index.css';
import Popup from './popup.js';
import Header from './header.js';



function BackGround() {
    return (
        <div className="BackGround">
            
            <Header />
            <div className="body-div">
            <h1 className='body-div-h1'>Bonjour je suis john doe</h1>
            <h2 className='body-div-h1'>Devellopeur Web Full Stack</h2>
            <Popup />
            </div>

        </div>

    )

}
export default BackGround;