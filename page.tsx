import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import Process from './components/Process'
import Technology from './components/Technology'
import Products from './components/Products'
import Testimonials from './components/Testimonials'
import Gallery from './components/Gallery'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Header />
      <Hero />
      <Features />
      <Process />
      <Technology />
      <Products />
      <Testimonials />
      <Gallery />
      <Contact />
      <Footer />
    </main>
  )
}

