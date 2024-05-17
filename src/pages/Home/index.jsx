import HomeHero from './components/Hero'
import HomePartners from './components/Partners'
import HomeProducts from './components/Products'
import HomeContactUs from './components/ContactUs'
// import HomeTestimonials from './components/Testimonials'
import HomeWhyUs from './components/WhyUs'

function Home() {

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
