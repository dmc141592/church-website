import { useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FiX, FiMapPin, FiClock, FiCalendar } from 'react-icons/fi'

export default function EventModal({ event, onClose }) {
  useEffect(() => {
    const onKeyDown = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [onClose])

  return (
    <AnimatePresence>
      {event && (
        <motion.div className="modal-backdrop" onClick={onClose} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <motion.div
            className="event-modal"
            role="dialog"
            aria-modal="true"
            aria-label={event.title}
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 20 }}
          >
            <button className="modal-close" onClick={onClose} aria-label="Close event details"><FiX /></button>
            <img src={event.image} alt={event.title} />
            <div className="event-modal__content">
              <h2>{event.title}</h2>
              <div className="event-modal__meta"><FiCalendar /> {event.date}</div>
              <div className="event-modal__meta"><FiClock /> {event.time}</div>
              <div className="event-modal__meta"><FiMapPin /> {event.location}</div>
              <p>{event.description}</p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
