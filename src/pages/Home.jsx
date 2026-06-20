import Hero from '../components/Hero/Hero'
import ScrollReveal from '../components/ScrollReveal/ScrollReveal'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <>
      <Hero />
      <section className="section">
        <div className="container">
          <ScrollReveal>
            <div className="section-heading centered">
              <span className="eyebrow">Welcome</span>
              <h2>A modern place for faith and community</h2>
              <p>Discover our events, worship services, book resources and ways to connect with us.</p>
            </div>
          </ScrollReveal>
          <div className="home-cards">
            <ScrollReveal><Link className="home-card" to="/calendar"><h3>Events</h3><p>Explore worship services, meetings and community gatherings.</p></Link></ScrollReveal>
            <ScrollReveal><Link className="home-card" to="/book"><h3>Book</h3><p>Discover an inspiring book about faith and hope.</p></Link></ScrollReveal>
            <ScrollReveal><Link className="home-card" to="/contact"><h3>Contact</h3><p>Send us a message and get in touch.</p></Link></ScrollReveal>
          </div>
        </div>
      </section>
    </>
  )
}
