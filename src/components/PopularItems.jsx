import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import breakfastData from '../data/breakfast.json'
import drinksData from '../data/drinks.json'

const PopularItems = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  
  // Get popular items from all categories
  const popularItems = [
    ...breakfastData.filter(item => item.popular),
    ...drinksData.filter(item => item.popular)
  ]

  // Auto-rotate carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === popularItems.length - 1 ? 0 : prevIndex + 1
      )
    }, 4000)

    return () => clearInterval(interval)
  }, [popularItems.length])

  const getImagePath = (imageName) => {
    // Map image names to actual file paths
    const imageMap = {
      '2-eggs-bacon-and-cheese': '/ravaas-bagels/images/Breakfast/2-eggs-bacon-and-cheese.jpg',
      '2-eggs-and-cheese': '/ravaas-bagels/images/Breakfast/2-eggs-and-cheese.jpg',
      '2-eggs-and-bacon': '/ravaas-bagels/images/Breakfast/2-eggs-and-bacon.jpg',
      'Sausage and 2Eggs': '/ravaas-bagels/images/Breakfast/Sausage and 2Eggs.jpg',
      'Hungry Man Hero': '/ravaas-bagels/images/Breakfast/Hungry Man Hero.jpg',
      'energy-drink': '/ravaas-bagels/images/Drinks/energy-drink.jpg'
    }
    
    return imageMap[imageName] || '/ravaas-bagels/images/Logo/ravaasbagel.jpg'
  }

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
            Ravaa's Favorites
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our most popular items that Ravaa would definitely approve of!
          </p>
        </motion.div>

        <div className="relative">
          <div className="overflow-hidden rounded-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 300 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -300 }}
                transition={{ duration: 0.5 }}
                className="bg-gradient-to-r from-ravaa-orange to-ravaa-brown p-8 md:p-12"
              >
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="flex-1 text-white">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="bg-ravaa-red text-white text-sm font-bold px-3 py-1 rounded-full">
                        POPULAR
                      </span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-heading font-bold mb-4">
                      {popularItems[currentIndex].name}
                    </h3>
                    <p className="text-lg mb-6 text-ravaa-cream">
                      {popularItems[currentIndex].description}
                    </p>
                    <div className="text-3xl font-bold text-ravaa-cream">
                      ${popularItems[currentIndex].price}
                    </div>
                  </div>
                  <div className="flex-1">
                    <img
                      src={getImagePath(popularItems[currentIndex].image)}
                      alt={popularItems[currentIndex].name}
                      className="w-full h-64 md:h-80 object-cover rounded-xl shadow-2xl"
                    />
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Carousel indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {popularItems.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                  index === currentIndex ? 'bg-ravaa-red' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default PopularItems
