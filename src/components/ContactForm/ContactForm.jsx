import { useState } from 'react'
import ScrollReveal from '../ScrollReveal/ScrollReveal'

const ADMIN_EMAIL = 'example@gmail.com'

const initialForm = { name: '', email: '', subject: '', message: '' }

export default function ContactForm() {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [success, setSuccess] = useState(false)

  const validate = () => {
    const nextErrors = {}
    if (!form.name.trim()) nextErrors.name = 'Please enter your name.'
    if (!form.email.trim()) nextErrors.email = 'Please enter your email.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) nextErrors.email = 'Please enter a valid email address.'
    if (!form.subject.trim()) nextErrors.subject = 'Please enter a subject.'
    if (!form.message.trim()) nextErrors.message = 'Please enter your message.'
    return nextErrors
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const validationErrors = validate()
    setErrors(validationErrors)
    setSuccess(false)

    if (Object.keys(validationErrors).length === 0) {
      // Future EmailJS integration
      // Future Formspree integration
      // Future backend integration
      // Send contact messages to:
      // example@gmail.com
      console.log('Prepared message for admin:', ADMIN_EMAIL, form)
      setSuccess(true)
      setForm(initialForm)
    }
  }

  const updateField = (field, value) => {
    setForm((current) => ({ ...current, [field]: value }))
  }

  return (
    <section className="section">
      <div className="container narrow">
        <ScrollReveal>
          <div className="section-heading centered">
            <span className="eyebrow">Contact</span>
            <h1>Send us a message</h1>
            <p>We would love to hear from you</p>
          </div>
          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            <label>Full Name<input value={form.name} onChange={(e) => updateField('name', e.target.value)} /></label>
            {errors.name && <small>{errors.name}</small>}
            <label>Email Address<input type="email" value={form.email} onChange={(e) => updateField('email', e.target.value)} /></label>
            {errors.email && <small>{errors.email}</small>}
            <label>Subject<input value={form.subject} onChange={(e) => updateField('subject', e.target.value)} /></label>
            {errors.subject && <small>{errors.subject}</small>}
            <label>Message<textarea rows="6" value={form.message} onChange={(e) => updateField('message', e.target.value)} /></label>
            {errors.message && <small>{errors.message}</small>}
            {success && <p className="success-message">Thank you. Your message is ready for sending integration.</p>}
            <button className="button button--gold" type="submit">Send Message</button>
          </form>
        </ScrollReveal>
      </div>
    </section>
  )
}
