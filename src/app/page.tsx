import Header from '../components/Header'
import Hero from '../components/Hero'
import Features from '../components/Features'
import Products from '../components/Products'
import Testimonials from '../components/Testimonials'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      <Products />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  )
}