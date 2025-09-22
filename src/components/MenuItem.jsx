import { motion } from 'framer-motion'
import { getImagePath } from '../utils/imageMapping'

const MenuItem = ({ item }) => {

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
      className="card group cursor-pointer"
    >
      <div className="relative">
        <img
          src={getImagePath(item.image)}
          alt={item.name}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {item.popular && (
          <div className="popular-badge">
            POPULAR
          </div>
        )}
      </div>
      
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-heading font-semibold text-ravaa-dark group-hover:text-ravaa-red transition-colors duration-200">
            {item.name}
          </h3>
          <span className="text-2xl font-bold text-ravaa-orange">
            ${item.price.toFixed(2)}
          </span>
        </div>
        
        <p className="text-gray-600 text-sm leading-relaxed">
          {item.description}
        </p>
        
        <div className="mt-4 flex items-center justify-between">
          <span className="text-xs font-semibold text-ravaa-blue bg-ravaa-cream px-2 py-1 rounded-full">
            {item.category}
          </span>
          <div className="text-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-200">
            🥯
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default MenuItem
