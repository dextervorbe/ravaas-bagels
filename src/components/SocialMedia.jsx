import { motion } from 'framer-motion'

const SocialMedia = () => {
  return (
    <section className="py-12 bg-ravaa-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-white mb-6">
            Follow Ravaa's Adventures
          </h2>
          <p className="text-ravaa-cream mb-8 max-w-2xl mx-auto">
            Stay updated with Ravaa's daily antics and our latest bagel creations!
          </p>
          
          <div className="flex justify-center">
            <motion.a
              href="https://www.instagram.com/ravaasbagels?igsh=MTRjOXN5OWttdXcydw=="
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-200 flex items-center gap-3"
            >
              <span className="text-2xl">📸</span>
              Follow @ravaasbagels
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default SocialMedia
