import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import breakfastData from '../data/breakfast.json'
import lunchData from '../data/lunch.json'
import drinksData from '../data/drinks.json'

const PopularItems = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  
  // Get popular items from all categories dynamically
  const popularItems = [
    ...breakfastData.filter(item => item.popular),
    ...lunchData.filter(item => item.popular),
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
    // Use the same comprehensive image mapping as MenuItem component
    const imageMap = {
      // Breakfast images
      'Butter Bagel': '/ravaas-bagels/images/Breakfast/Butter Bagel.jpg',
      'Lox on a Bagel , Roll': '/ravaas-bagels/images/Breakfast/Lox on a Bagel , Roll.jpg',
      'Lox and Cream Cheese': '/ravaas-bagels/images/Breakfast/Lox and Cream Cheese.jpg',
      'Cream Cheese and Bacon': '/ravaas-bagels/images/Breakfast/Cream Cheese and Bacon.jpg',
      'Cream Cheese & Jelly': '/ravaas-bagels/images/Breakfast/Cream Cheese & Jelly.avif',
      'Peanut Butter & Jelly': '/ravaas-bagels/images/Breakfast/Peanut Butter & Jelly.avif',
      'Jelly On a Bagel': '/ravaas-bagels/images/Breakfast/Jelly On a Bagel.webp',
      'Pancakes': '/ravaas-bagels/images/Breakfast/Pancakes.jpg',
      'French Toast': '/ravaas-bagels/images/Breakfast/French Toast.jpg',
      'Side Bacon(5 slices)': '/ravaas-bagels/images/Breakfast/Side Bacon(5 slices).webp',
      'Bacon on a Bagel (5 Slice)': '/ravaas-bagels/images/Breakfast/Bacon on a Bagel (5 Slice).jpg',
      '2 Slice Cheese on a Bagel': '/ravaas-bagels/images/Breakfast/2 Slice Cheese on a Bagel.webp',
      '2-eggs-and-cheese': '/ravaas-bagels/images/Breakfast/2-eggs-and-cheese.jpg',
      'Hungry Man Hero': '/ravaas-bagels/images/Breakfast/Hungry Man Hero.jpg',
      '2-eggs-and-bacon': '/ravaas-bagels/images/Breakfast/2-eggs-and-bacon.jpg',
      '2-eggs-and-turkey': '/ravaas-bagels/images/Breakfast/2-eggs-and-turkey.jpg',
      '2 Eggs & Turkey or Turkey Bacon and Cheese': '/ravaas-bagels/images/Breakfast/2 Eggs & Turkey or Turkey Bacon and Cheese.jpg',
      '2 Eggs & Ham & Cheese': '/ravaas-bagels/images/Breakfast/2 Eggs & Ham & Cheese.avif',
      'Western Omelet 3 eggs ham peppers onion': '/ravaas-bagels/images/Breakfast/Western Omelet 3 eggs ham peppers onion.avif',
      'Staying Fit Omelet': '/ravaas-bagels/images/Breakfast/Staying Fit Omelet.webp',
      '2 Eggs, Sausage & Cheese': '/ravaas-bagels/images/Breakfast/2-eggs-sasuge-and-cheese.jpg',
      '2 Eggs & Sausage': '/ravaas-bagels/images/Breakfast/2 Eggs & Sausage.webp',
      '2 Eggs & Ham': '/ravaas-bagels/images/Breakfast/2 Eggs & Ham.avif',
      'Hungry Women Hero': '/ravaas-bagels/images/Breakfast/Hungry Women Hero.webp',
      'Hungry Boy Hero': '/ravaas-bagels/images/Breakfast/Hungry Boy Hero.avif',
      'Veggie Omelet': '/ravaas-bagels/images/Breakfast/Veggie Omelet.avif',
      'Spinach Omelet': '/ravaas-bagels/images/Breakfast/Spinach Omelet.webp',
      '2 Eggs, Bacon And Cheese': '/ravaas-bagels/images/Breakfast/2-eggs-bacon-and-cheese.jpg',
      '2 Eggs Sandwich': '/ravaas-bagels/images/Breakfast/2 Eggs Sandwich.webp',
      'Muffin With Butter': '/ravaas-bagels/images/Breakfast/Muffin With Butter.webp',
      'Sausage and Cheese Melt': '/ravaas-bagels/images/Breakfast/Sausage and Cheese Melt.webp',
      'Ham and Cheese Melt': '/ravaas-bagels/images/Breakfast/Ham and Cheese Melt.webp',
      'Cream Cheese Bagel': '/ravaas-bagels/images/Breakfast/Cream Cheese Bagel.webp',
      
      // Lunch images
      'roast-beef': '/ravaas-bagels/images/Lunch/roast-beef.jpg',
      'turkey-breast': '/ravaas-bagels/images/Lunch/turkey-breast.jpg',
      'chicken-breast': '/ravaas-bagels/images/Lunch/chicken-breast.jpg',
      'chicken-cutlet': '/ravaas-bagels/images/Lunch/chicken-cutlet.jpg',
      'grilled-chicken': '/ravaas-bagels/images/Lunch/grilled-chicken.jpg',
      'ham': '/ravaas-bagels/images/Lunch/ham.jpg',
      'blt': '/ravaas-bagels/images/Lunch/blt.jpeg',
      'tuna-salad': '/ravaas-bagels/images/Lunch/tuna-salad.jpg',
      'chicken-salad': '/ravaas-bagels/images/Lunch/chicken-salad.jpg',
      'egg-salad': '/ravaas-bagels/images/Lunch/egg-salad.jpg',
      'tuna-melt': '/ravaas-bagels/images/Lunch/tuna-melt.jpg',
      'home-fries': '/ravaas-bagels/images/Lunch/home-fries.jpg',
      
      // Drinks images
      'coffee': '/ravaas-bagels/images/Drinks/coffee.jpg',
      'energy-drink': '/ravaas-bagels/images/Drinks/energy-drink.jpg',
      'ice-coffee': '/ravaas-bagels/images/Drinks/ice-coffee.jpg',
      'ice-tea': '/ravaas-bagels/images/Drinks/ice-tea.jpg',
      'tropicana': '/ravaas-bagels/images/Drinks/tropicana.jpg',
      'soda': '/ravaas-bagels/images/Drinks/soda.jpg',
      'snapple': '/ravaas-bagels/images/Drinks/snapple.jpg',
      'hot-tea': '/ravaas-bagels/images/Drinks/hot-tea.webp',
      'pepsi': '/ravaas-bagels/images/Drinks/Pepsi.webp',
      'water': '/ravaas-bagels/images/Drinks/Water.webp',
      'gatorade': '/ravaas-bagels/images/Drinks/Gatorade.avif',
      'redbull': '/ravaas-bagels/images/Drinks/Redbull.webp',
      'monster-energy-drink': '/ravaas-bagels/images/Drinks/Monster Energy Drinks.webp',
      'celcius': '/ravaas-bagels/images/Drinks/Celcius.webp',
      'c4': '/ravaas-bagels/images/Drinks/C4.webp',
      'bloom': '/ravaas-bagels/images/Drinks/Bloom.webp',
      'poppi': '/ravaas-bagels/images/Drinks/Poppi.webp',
      'coke-soda': '/ravaas-bagels/images/Drinks/Coke Soda.avif',
      'starbucks-frappuccino': '/ravaas-bagels/images/Drinks/Starbucks Frappuccino.avif'
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
