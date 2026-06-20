import { motion } from 'framer-motion'
import ScrollReveal from '../ScrollReveal/ScrollReveal'

export default function BookSection() {
  return (
    <section className="section section--split">
      <div className="container split-grid">
        <ScrollReveal>
          <motion.img className="feature-image book-cover" src="/images/book.jpg" alt="Book cover" whileHover={{ rotate: -1, scale: 1.02 }} />
        </ScrollReveal>
        <ScrollReveal>
          <div className="content-card content-card--large">
            <span className="eyebrow">Featured Book</span>
            <h1>My Journey with God</h1>
            <p>An inspiring book about faith, hope, personal growth, and experiences with God.</p>
            <p>This book invites readers into a journey of encouragement, reflection and spiritual renewal.</p>
            <a className="button button--gold" href="https://www.google.com/" target="_blank" rel="noreferrer">Buy the Book</a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
