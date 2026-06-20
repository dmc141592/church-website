import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="hero">
      <motion.div
        className="hero__content"
        initial={{ opacity: 0, y: 35, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.9, ease: 'easeOut' }}
      >
        <span className="eyebrow">Faith · Hope · Community</span>

        <h1>Welcome to Our Church</h1>

        <p>
          Living faith together, sharing hope, and building community.
        </p>

        <Link className="button button--gold" to="/about">
          Learn More
        </Link>
      </motion.div>
    </section>
  )
}