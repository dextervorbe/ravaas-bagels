import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import MenuFilter from '../components/MenuFilter'
import MenuItem from '../components/MenuItem'
import breakfastData from '../data/breakfast.json'
import lunchData from '../data/lunch.json'
import drinksData from '../data/drinks.json'

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [filteredItems, setFilteredItems] = useState([])

  // Combine all menu items
  const allItems = [...breakfastData, ...lunchData, ...drinksData]

  useEffect(() => {
    if (selectedCategory === 'all') {
      setFilteredItems(allItems)
    } else {
      setFilteredItems(allItems.filter(item => item.category === selectedCategory))
    }
  }, [selectedCategory, allItems])

  return (
    <div className="min-h-screen bg-ravaa-cream">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-ravaa-orange to-ravaa-brown text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Our Menu
            </h1>
            <p className="text-xl text-ravaa-cream max-w-2xl mx-auto">
              Fresh, handcrafted bagels and delicious meals made with Ravaa's approval!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter and Menu Items */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <MenuFilter 
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredItems.map((item) => (
              <MenuItem key={item.id} item={item} />
            ))}
          </motion.div>

          {filteredItems.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-heading font-semibold text-ravaa-dark mb-2">
                No items found
              </h3>
              <p className="text-gray-600">
                Try selecting a different category
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Order Now CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-ravaa-dark mb-6">
              Ready to Order?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Can't decide what to get? Ravaa recommends starting with our popular items!
            </p>
            <a
              href="https://www.ubereats.com/store/ravaas-bagels-6278-route-25a/c3_PqjioRo-DlBD2qIj8fA/0c0565a0-ffcd-447f-a926-ce385b8fc43f?ps=1"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-lg px-8 py-4 inline-block"
            >
              Order on UberEats 🚀
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Menu
