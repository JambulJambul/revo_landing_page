import HomeHero from './components/Hero'
import HomePartners from './components/Partners'
import HomeProducts from './components/Products'
import HomeContactUs from './components/ContactUs'
import HomeWhyUs from './components/WhyUs'
import ReactGA from "react-ga4";
// import HomeTestimonials from './components/Testimonials'


function Home() {
  ReactGA.send(
    {
      hitType: "pageview",
      page: "/",
      title: "Homepage"
    }
  );
  return (
    <>
      <HomeHero />
      <HomeProducts />
      <HomePartners />
      {/* <HomeTestimonials /> */}
      <HomeWhyUs />
      <HomeContactUs />
    </>
  )
}

export default Home
