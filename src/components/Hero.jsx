import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-ravaa-orange to-ravaa-brown text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
              🐕 Ravaa's Bagels 🥯
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-ravaa-cream">
              "Barking up the right tree since 2025!"
            </p>
            <p className="text-lg md:text-xl mb-12 max-w-3xl mx-auto">
              Where every bagel tells a story, and every story starts with our beloved Ravaa. 
              Fresh, handcrafted bagels made with love and a little dog hair!
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="https://www.ubereats.com/store/ravaas-bagels-6278-route-25a/c3_PqjioRo-DlBD2qIj8fA/0c0565a0-ffcd-447f-a926-ce385b8fc43f?ps=1"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-lg px-8 py-4 inline-block"
            >
              Order Now 🚀
            </a>
            <Link
              to="/menu"
              className="btn-secondary text-lg px-8 py-4 inline-block"
            >
              View Menu 📋
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-10 left-10 text-6xl opacity-20">
        🥯
      </div>
      <div className="absolute top-20 right-20 text-4xl opacity-20">
        🐕
      </div>
      <div className="absolute bottom-10 left-20 text-5xl opacity-20">
        ☕
      </div>
      <div className="absolute bottom-20 right-10 text-3xl opacity-20">
        🥓
      </div>
    </section>
  )
}

export default Hero
