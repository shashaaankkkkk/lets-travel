import { useEffect, useRef, useState } from 'react'
import Navbar from './components/Navbar'
import Landing from './components/Landing'
import Why_us from './components/Why_us'
import Trips from './components/Trips'
import ExperienceSection from './components/Experience'
import TestimonialSection from './components/Testimonial'
import Contactus from './components/Contactus'
import Footer from './components/Footer'
import Gallery from './components/Gallery'
const navItems = [
  { label: "Home", active: true },
  { label: "Destinations", active: false },
  { label: "About", active: false },
  { label: "Contact", active: false },
];

function App() {
  const landingRef = useRef(null);
  const whyUsRef = useRef(null);

  const [landingHeight, setLandingHeight] = useState(0);
  const [whyUsHeight, setWhyUsHeight] = useState(0);

  useEffect(() => {
    if (landingRef.current) {
      setLandingHeight(landingRef.current.offsetHeight);
    }
    if (whyUsRef.current) {
      setWhyUsHeight(whyUsRef.current.offsetHeight);
    }
  }, []);

  return (
    <>
    <Navbar navItems={navItems} />

  <Landing />


<Why_us />

<Trips />
<ExperienceSection/>
<TestimonialSection/>
<Gallery/>
<Contactus/>

<Footer/>
    </>
  );
}

export default App;
