import React  from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Quality from './Components/Qualities/Quality'
import './App.css'
import OurStory from './Components/Our Story/OurStory'
import Collections from './Components/Our Story/Collections'
import Footer from './Components/Footer/Footer'
import Team from './Components/Our Team/Team'
import Services from './Components/Services/Services'
import Notification from './Components/UnderDevelopment/Notification'




function App() {

  return (
 <>
  {/* <Notification /> */}
<Navbar />
<Hero   />
<section id='services'>
  <Services />
  </section>
<section id='our-team'>
  <Team />


</section>
<section id='our-qualities'>
<Quality  />
</section>
<section id="about-us">

<OurStory  />
</section>
<section id="portfolio">
  <Collections />
</section>
<Footer/>
 </>
  )
}

export default App
