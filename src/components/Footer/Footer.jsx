import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div>
          <img src="/images/logo.png" alt="Church logo" />
          <h3>Church Name</h3>
          <p>Living faith together, sharing hope, and building community.</p>
        </div>
        <div>
          <h4>Quick Links</h4>
          <Link to="/">Home</Link>
          <Link to="/calendar">Calendar</Link>
          <Link to="/book">Book</Link>
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div>
          <h4>Contact</h4>
          <p>Zürich HB, Bahnhofplatz, 8001 Zürich</p>
          <p>example@gmail.com</p>
        </div>
      </div>
      <div className="footer__bottom">© 2026 Church Name. All Rights Reserved.</div>
    </footer>
  )
}
