import { motion } from 'framer-motion'

const LocationHours = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-ravaa-dark mb-4">
            Visit Us
          </h2>
          <p className="text-lg text-gray-600">
            Come say hello to Ravaa and enjoy our fresh bagels!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Location */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-ravaa-cream rounded-2xl p-8 text-center"
          >
            <div className="text-4xl mb-4">📍</div>
            <h3 className="text-2xl font-heading font-bold text-ravaa-dark mb-4">
              Location
            </h3>
            <p className="text-lg text-gray-700">
              6278 Route 25a<br />
              Wading River, NY 11792-2009
            </p>
          </motion.div>

          {/* Hours */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-ravaa-orange rounded-2xl p-8 text-center text-white"
          >
            <div className="text-4xl mb-4">🕐</div>
            <h3 className="text-2xl font-heading font-bold mb-4">
              Hours
            </h3>
            <p className="text-lg">
              <strong>Every Day</strong><br />
              5:30 AM - 2:30 PM
            </p>
            <p className="text-ravaa-cream mt-2">
              Fresh bagels every morning!
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default LocationHours
