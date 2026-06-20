import { FiMoon, FiSun } from 'react-icons/fi'

export default function ThemeToggle({ theme, toggleTheme }) {
  return (
    <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle dark and light mode">
      <span className="theme-toggle__icon">{theme === 'dark' ? <FiSun /> : <FiMoon />}</span>
    </button>
  )
}
