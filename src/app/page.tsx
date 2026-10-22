import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Products from '@/components/Products'
import HowToOrder from '@/components/HowToOrder'
import Recetas from '@/components/Recetas'
import Testimonials from '@/components/Testimonials'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Products />
        <HowToOrder />
        <Recetas />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
