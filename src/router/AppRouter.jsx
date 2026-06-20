import { Routes, Route } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import Home from '../pages/Home'
import Calendar from '../pages/Calendar'
import Book from '../pages/Book'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Address from '../pages/Address'

export default function AppRouter() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/book" element={<Book />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/address" element={<Address />} />
      </Route>
    </Routes>
  )
}
