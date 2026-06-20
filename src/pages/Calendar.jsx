import { useState } from 'react'
import { events } from '../data/events'
import EventCard from '../components/EventCard/EventCard'
import EventModal from '../components/EventModal/EventModal'
import ScrollReveal from '../components/ScrollReveal/ScrollReveal'

export default function Calendar() {
  const [selectedEvent, setSelectedEvent] = useState(null)

  return (
    <section className="section page-section">
      <div className="container">
        <ScrollReveal>
          <div className="section-heading centered">
            <span className="eyebrow">Calendar</span>
            <h1>Events & Worship Services</h1>
            <p>Stay connected through worship, prayer, Bible study and community events.</p>
          </div>
        </ScrollReveal>
        <div className="event-grid">
          {events.map((event) => <EventCard key={event.id} event={event} onDetails={setSelectedEvent} />)}
        </div>
      </div>
      {selectedEvent && <EventModal event={selectedEvent} onClose={() => setSelectedEvent(null)} />}
    </section>
  )
}
