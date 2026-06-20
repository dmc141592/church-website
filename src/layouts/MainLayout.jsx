import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import BackToTopButton from '../components/BackToTopButton/BackToTopButton'
import { useTheme } from '../hooks/useTheme'

export default function MainLayout() {
  const { theme, toggleTheme } = useTheme()

  return (
    <>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Outlet />
      </main>
      <Footer />
      <BackToTopButton />
    </>
  )
}
