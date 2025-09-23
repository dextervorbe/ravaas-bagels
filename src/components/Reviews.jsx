import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Reviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  
  // Reviews data - only 5-star ratings
  const reviews = [
    {
      id: 1,
      name: "Jack S",
      rating: 5,
      date: "8/11/25",
      platform: "DoorDash",
      review: "Homemade Pancakes were made to perfect. The Two 2 Eggs with Cheese Sandwich can be made with any bagel and it's absolutely delicious! Ravaa's Bagels never disappoints.",
      contributions: 3,
      avatar: "J"
    },
    {
      id: 2,
      name: "Amber N",
      rating: 5,
      date: "8/19/25",
      platform: "DoorDash",
      review: "My bacon egg and cheese on a bagel was amazing :) they always have the freshest bagels!!",
      contributions: 2,
      avatar: "A"
    },
    {
      id: 3,
      name: "Stephanie L",
      rating: 5,
      date: "2/3/25",
      platform: "DoorDash",
      review: "Truly the best in SWR. Consistently good!!",
      contributions: 6,
      avatar: "S"
    },
    {
      id: 4,
      name: "Sarah L",
      rating: 5,
      date: "10/28/25",
      platform: "DoorDash",
      review: "Absolutely love this place! The Hungry Man Hero is incredible and the staff is always friendly. Ravaa's Bagels has become my go-to breakfast spot!",
      contributions: 15,
      avatar: "S"
    },
    {
      id: 5,
      name: "Mike R",
      rating: 5,
      date: "9/12/25",
      platform: "DoorDash",
      review: "Great bagels and fast service! The 2 Eggs and Bacon combo is perfect for breakfast. Will definitely order again.",
      contributions: 6,
      avatar: "M"
    },
    {
      id: 6,
      name: "Alex M",
      rating: 5,
      date: "11/15/25",
      platform: "DoorDash",
      review: "My bagel was amazing! Fresh and perfectly toasted. The cream cheese was delicious. Only complaint is the wait time was longer than expected.",
      contributions: 8,
      avatar: "A"
    }
  ]

  // Auto-rotate carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
      )
    }, 5000) // 5 seconds per review

    return () => clearInterval(interval)
  }, [reviews.length])

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span
        key={index}
        className={`text-lg ${
          index < rating ? 'text-yellow-400' : 'text-gray-300'
        }`}
      >
        ★
      </span>
    ))
  }

  const getAvatarColor = (avatar) => {
    const colors = [
      'bg-blue-500',
      'bg-green-500', 
      'bg-amber-600',
      'bg-purple-500',
      'bg-pink-500',
      'bg-indigo-500'
    ]
    return colors[avatar.charCodeAt(0) % colors.length]
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-ravaa-dark mb-4">
            Customer Reviews
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See what our customers are saying about Ravaa's Bagels!
          </p>
          <div className="flex items-center justify-center gap-2 mt-4">
            <div className="flex items-center gap-1">
              {renderStars(5)}
            </div>
            <span className="text-gray-600 ml-2">5.0 out of 5 stars</span>
          </div>
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
                className="bg-white p-8 md:p-12 shadow-lg"
              >
                <div className="flex flex-col md:flex-row items-start gap-6">
                  {/* Avatar and basic info */}
                  <div className="flex-shrink-0">
                    <div className={`w-16 h-16 rounded-full ${getAvatarColor(reviews[currentIndex].avatar)} flex items-center justify-center text-white text-xl font-bold`}>
                      {reviews[currentIndex].avatar}
                    </div>
                  </div>

                  {/* Review content */}
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">
                          {reviews[currentIndex].name}
                        </h3>
                        <p className="text-sm text-gray-500">
                          {reviews[currentIndex].contributions} contributions
                        </p>
                      </div>
                      <div className="flex items-center gap-2 mt-2 sm:mt-0">
                        {renderStars(reviews[currentIndex].rating)}
                        <span className="text-sm text-gray-500">
                          {reviews[currentIndex].date} • {reviews[currentIndex].platform} order
                        </span>
                      </div>
                    </div>
                    
                    <p className="text-gray-700 leading-relaxed">
                      {reviews[currentIndex].review}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Carousel indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                  index === currentIndex ? 'bg-ravaa-orange' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Reviews
