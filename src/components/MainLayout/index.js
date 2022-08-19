import Header from "../Header";
import Hero from "../sections/Hero";
import HowItWorks from "../sections/HowItWorks";
import ContactForm from "../sections/Contact";
import WhoWeServe from "../sections/WhoWeServe";
import OurServices from "../sections/OurServices";
import About from "../sections/About";
import Sales from "../sections/Sales";

function MainLayout() {
  return(
    <div>
      <Header/>
      <Hero />
      <HowItWorks/>
      <WhoWeServe />
      <OurServices/>
      <About/>
      <Sales/>
      <ContactForm/>
      <div>Footer</div>
    </div>
  )
}

export default MainLayout