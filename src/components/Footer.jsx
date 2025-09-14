import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-ravaa-dark text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-3 mb-4">
              <img 
                src="./images/Logo/ravaasbagel.jpg" 
                alt="Ravaa's Bagels Logo" 
                className="h-12 w-12 rounded-full object-cover border-2 border-white"
              />
              <div>
                <h3 className="text-xl font-heading font-bold">
                  Ravaa's Bagels
                </h3>
                <p className="text-ravaa-cream text-sm">
                  Wading River, NY
                </p>
              </div>
            </div>
            <p className="text-ravaa-cream text-sm">
              "Barking up the right tree since 2025!"
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h4 className="text-lg font-heading font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-ravaa-cream hover:text-white transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/menu" className="text-ravaa-cream hover:text-white transition-colors duration-200">
                  Menu
                </Link>
              </li>
              <li>
                <a 
                  href="https://www.ubereats.com/store/ravaas-bagels-6278-route-25a/c3_PqjioRo-DlBD2qIj8fA/0c0565a0-ffcd-447f-a926-ce385b8fc43f?ps=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ravaa-cream hover:text-white transition-colors duration-200"
                >
                  Order Online
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-left">
            <h4 className="text-lg font-heading font-semibold mb-4">Visit Us</h4>
            <div className="space-y-2 text-ravaa-cream text-sm">
              <p>6278 Route 25a</p>
              <p>Wading River, NY 11792-2009</p>
              <p>5:30 AM - 2:30 PM Daily</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-8 pt-6 text-center">
          <p className="text-ravaa-cream text-sm">
            © 2025 Ravaa's Bagels. Made with ❤️ and a little dog hair.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
