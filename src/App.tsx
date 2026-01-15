import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import BeforeAfterSlider from './components/BeforeAfterSlider'
import Process from './components/Process'
import WhyUs from './components/WhyUs'
import Gallery from './components/Gallery'
import ChristmasLights from './components/ChristmasLights'
import Testimonials from './components/Testimonials'
import About from './components/About'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import GoogleReviewCTA from './components/GoogleReviewCTA'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <BeforeAfterSlider />
        <Process />
        <WhyUs />
        <Gallery />
        <ChristmasLights />
        <Testimonials />
        <About />
        <FAQ />
        <Contact />
        <GoogleReviewCTA />
      </main>
      <Footer />
    </>
  )
}

export default App
