import Header from "../Header";
import Hero from "../Hero";
import HowItWorks from "../HowItWorks";
import Index from "../Contact";

function MainLayout() {
  return(
    <div>
      <Header/>
      <Hero />
      <HowItWorks/>
      <Index/>
      <div>Footer</div>
    </div>
  )
}

export default MainLayout