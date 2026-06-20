import { motion } from 'framer-motion'
import { FiClock, FiCalendar } from 'react-icons/fi'

export default function EventCard({ event, onDetails }) {
  return (
    <motion.article className="event-card" whileHover={{ y: -8 }} transition={{ type: 'spring', stiffness: 280 }}>
      <img src={event.image} alt={event.title} loading="lazy" />
      <div className="event-card__body">
        <h3>{event.title}</h3>
        <div className="event-card__meta"><FiCalendar /> {event.date}</div>
        <div className="event-card__meta"><FiClock /> {event.time}</div>
        <p>{event.shortDescription}</p>
        <button className="button button--outline" onClick={() => onDetails(event)}>View Details</button>
      </div>
    </motion.article>
  )
}
