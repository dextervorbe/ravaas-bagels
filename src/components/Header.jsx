import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useState } from 'react'

const Header = () => {
  const location = useLocation()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header className="bg-ravaa-orange shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-3"
            >
              <img 
                src="/ravaas-bagels/images/Logo/ravaasbagel.jpg" 
                alt="Ravaa's Bagels Logo" 
                className="h-16 w-16 rounded-full object-cover border-4 border-white shadow-lg"
              />
              <div>
                <h1 className="text-2xl font-heading font-bold text-white">
                  Ravaa's Bagels
                </h1>
                <p className="text-ravaa-cream text-sm">
                  Wading River, NY
                </p>
              </div>
            </motion.div>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link
              to="/"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                location.pathname === 'ravaas-bagels/'
                  ? 'bg-ravaa-red text-white'
                  : 'text-white hover:bg-ravaa-red hover:text-white'
              }`}
            >
              Home
            </Link>
            <Link
              to="/menu"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                location.pathname === '/menu'
                  ? 'bg-ravaa-red text-white'
                  : 'text-white hover:bg-ravaa-red hover:text-white'
              }`}
            >
              Menu
            </Link>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white hover:text-ravaa-cream focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden bg-ravaa-orange"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                to="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                  location.pathname === '/'
                    ? 'bg-ravaa-red text-white'
                    : 'text-white hover:bg-ravaa-red hover:text-white'
                }`}
              >
                Home
              </Link>
              <Link
                to="/menu"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                  location.pathname === '/menu'
                    ? 'bg-ravaa-red text-white'
                    : 'text-white hover:bg-ravaa-red hover:text-white'
                }`}
              >
                Menu
              </Link>
            </div>
          </motion.div>
        )}
      </div>
    </header>
  )
}

export default Header
