
import BackGround from '../components/background.js'
import ProgressBar from '../components/progressionBar.js'
import '../Assets/home.css'





const Home = () => {
  
    return (
      <main>
        <BackGround />
        <div className="accueil">
          <div className="accueil1 container">
            <div className="col-12 col-sm-12 col-lg-6">
              <h2 className="surlign">A propos</h2>
              <img className='cover' src="/images/john-doe-about.jpg" alt="homme de profil assis dans un bureau"></img>
              <div className="loremSize">
                <p>
                  Lorem ipsum dolor sit amert consectetur adipiscing elit. Optio
                  necessitatibus consetetur tempore prefendis nostrum, ex
                  delectus reicendis impedit aut iure enim placeat? Natus, neque
                  at?
                </p>
                <p>
                  Lorem ipsum dolor sit amert consectetur adipiscing elit. Optio
                  necessitatibus consetetur tempore prefendis nostrum, ex
                  delectus reicendis impedit aut iure enim placeat? Natus, neque
                  at?
                </p>
                <p>
                  Lorem ipsum dolor sit amert consectetur adipiscing elit. Optio
                  necessitatibus consetetur tempore prefendis nostrum, ex
                  delectus reicendis impedit aut iure enim placeat? Natus, neque
                  at?
                </p>
              </div>
            </div>
            <ProgressBar/>
          </div>
        </div>
      </main>
    );
}

    export default Home;