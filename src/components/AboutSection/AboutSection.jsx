import ScrollReveal from '../ScrollReveal/ScrollReveal'

export default function AboutSection() {
  return (
    <section className="section">
      <div className="container split-grid">
        <ScrollReveal>
          <div className="content-card content-card--large">
            <span className="eyebrow">About Us</span>
            <h1>A place of hope, faith and community</h1>
            <p>Our church is a place of hope, faith, and community. We seek to help people grow spiritually and experience God's love together.</p>
            <div className="value-grid">
              <div><h3>Mission</h3><p>To help people encounter God and grow in faith.</p></div>
              <div><h3>Vision</h3><p>To build a welcoming community that shares hope.</p></div>
              <div><h3>Values</h3><p>Faith, compassion, service, prayer and unity.</p></div>
            </div>
          </div>
        </ScrollReveal>
        <ScrollReveal>
          <img className="feature-image" src="/images/about.jpg" alt="Church community" loading="lazy" />
        </ScrollReveal>
      </div>
    </section>
  )
}
