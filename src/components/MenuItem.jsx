import { motion } from 'framer-motion'

const MenuItem = ({ item }) => {
  const getImagePath = (imageName) => {
    // Map image names to actual file paths based on category
    const imageMap = {
      // Breakfast images
      'Butter Bagel': '/ravaas-bagels/images/Breakfast/Butter Bagel.jpg',
      'Plain Cream Cheese on a Bagel': '/ravaas-bagels/images/Breakfast/Plain Cream Cheese on a Bagel.jpg',
      'Flavored Cream Cheese on a Bagel': '/ravaas-bagels/images/Breakfast/Flavored Cream Cheese on a Bagel.jpg',
      '2-eggs-bacon-and-cheese': '/ravaas-bagels/images/Breakfast/2-eggs-bacon-and-cheese.jpg',
      '2-eggs-and-cheese': '/ravaas-bagels/images/Breakfast/2-eggs-and-cheese.jpg',
      '2-eggs-and-bacon': '/ravaas-bagels/images/Breakfast/2-eggs-and-bacon.jpg',
      'Sausage and 2Eggs': '/ravaas-bagels/images/Breakfast/Sausage and 2Eggs.jpg',
      'Hungry Man Hero': '/ravaas-bagels/images/Breakfast/Hungry Man Hero.jpg',
      'Lox and Cream Cheese': '/ravaas-bagels/images/Breakfast/Lox and Cream Cheese.jpg',
      'Cream Cheese and Bacon': '/ravaas-bagels/images/Breakfast/Cream Cheese and Bacon.jpg',
      'Pancakes': '/ravaas-bagels/images/Breakfast/Pancakes.jpg',
      'French Toast': '/ravaas-bagels/images/Breakfast/French Toast.jpg',
      
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
            ${item.price}
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
