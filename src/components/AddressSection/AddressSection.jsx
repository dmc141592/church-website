import { FiMapPin, FiMail } from 'react-icons/fi'
import ScrollReveal from '../ScrollReveal/ScrollReveal'

export default function AddressSection() {
  return (
    <section className="section">
      <div className="container">
        <ScrollReveal>
          <div className="section-heading centered">
            <span className="eyebrow">Visit Us</span>
            <h1>Address & Location</h1>
            <p>Find us in the heart of Zürich.</p>
          </div>
        </ScrollReveal>
        <div className="address-grid">
          <ScrollReveal>
            <div className="content-card">
              <h2>Church Address</h2>
              <p><FiMapPin /> Zürich HB<br />Bahnhofplatz<br />8001 Zürich<br />Switzerland</p>
              <p><FiMail /> deepthii.mc@gmail.com</p>
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <div className="map-card">
              <iframe src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d2701.7757777587112!2d8.53683137621671!3d47.37729457116975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x47900a08cc0e6e41%3A0xf5c698b65f8c52a7!2sZ%C3%BCrich%20HB%2C%20Bahnhofplatz%2C%208001%20Z%C3%BCrich!3m2!1d47.3780356!2d8.5403767!5e0!3m2!1sen!2sch!4v1781950552480!5m2!1sen!2sch"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps location of Zürich HB"
              />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
