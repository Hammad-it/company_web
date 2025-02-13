import { Fragment } from 'react';
import LandingPage from '../components/UI/landingPage/LandingPage';
import SoftwarePlanning from '../components/UI/landingPage/SoftwarePlanning';
import AboutUs from '../components/UI/landingPage/AboutUs';
import Services from '../components/UI/landingPage/Services';
import Counter from '../components/UI/landingPage/Counter';
import Products from '../components/UI/landingPage/Products';
import Testimonial from '../components/UI/landingPage/Testimonials';
import OurTeam from '../components/UI/landingPage/OurTeam';
import Product from '../components/containrs/Product';
import Contact from '../components/contactus/Contact';
import NewSectionEight from '../components/UI/landingPage/NewTestimonialSection';

export default function Home() {
  return (<Fragment>
    <LandingPage/> 
    {/* <Counter/> */}
    <SoftwarePlanning/>
    <Services/>
    {/* <Products/> */}
    <Product/>
    {/* <Testimonial/> */}
    <NewSectionEight />
    <AboutUs/>
    <OurTeam/>
    <Contact/>
   
    
  </Fragment>
    
  )
}
