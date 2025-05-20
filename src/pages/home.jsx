
import BackGround from '../components/background.js'
import ProgressBar from '../components/progressionBar.js'
import Footer from '../components/footer.js'
import {useEffect, useState } from 'react';




const Home = () => {
  
    return (
        <main>
        
         <BackGround />
         <div className='accueil'>
    <div className='accueil1'>
      
      <div className='sizeAccueil1'>
        <h2 className='surlign'>A propos</h2>
        <img src="/images/john-doe-about.jpg" alt='homme'></img>
        <div className='loremSize'>
          <p>
            Lorem ipsum dolor sit amert consectetur adipiscing elit. Optio
            necessitatibus consetetur tempore prefendis nostrum, ex delectus
            reicendis impedit aut iure enim placeat? Natus, neque at?
          </p>
          <p>
            Lorem ipsum dolor sit amert consectetur adipiscing elit. Optio
            necessitatibus consetetur tempore prefendis nostrum, ex delectus
            reicendis impedit aut iure enim placeat? Natus, neque at?
          </p>
          <p>
            Lorem ipsum dolor sit amert consectetur adipiscing elit. Optio
            necessitatibus consetetur tempore prefendis nostrum, ex delectus
            reicendis impedit aut iure enim placeat? Natus, neque at?
          </p>
        </div>
      </div>
      <ProgressBar/>
      
    </div>
    </div>
   <Footer/>
    
    </main>
    )
}

    export default Home;