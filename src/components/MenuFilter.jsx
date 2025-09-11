import { motion } from 'framer-motion'

const MenuFilter = ({ selectedCategory, onCategoryChange }) => {
  const categories = [
    { value: 'all', label: 'All Items' },
    { value: 'Breakfast', label: 'Breakfast' },
    { value: 'Lunch', label: 'Lunch' },
    { value: 'Drinks', label: 'Drinks' }
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="mb-8"
    >
      <div className="flex flex-wrap justify-center gap-4">
        {categories.map((category) => (
          <button
            key={category.value}
            onClick={() => onCategoryChange(category.value)}
            className={`px-6 py-3 rounded-full font-semibold transition-all duration-200 ${
              selectedCategory === category.value
                ? 'bg-ravaa-red text-white shadow-lg'
                : 'bg-white text-ravaa-dark hover:bg-ravaa-orange hover:text-white shadow-md'
            }`}
          >
            {category.label}
          </button>
        ))}
      </div>
    </motion.div>
  )
}

export default MenuFilter
