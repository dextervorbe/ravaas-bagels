import { motion } from 'framer-motion'

const About = () => {
  return (
    <section className="py-16 bg-ravaa-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-ravaa-dark mb-6 text-center lg:text-left">
              About Us
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                This whole bagel shop started with two things: a love of chewy, golden bagels and the boundless energy of our dog, Ravaa. She's the kind of pup who believes every bagel crumb is a personal gift from the universe — and honestly, who are we to argue?
              </p>
              <p>
                We wanted a space that feels like Ravaa on her best day: playful, welcoming, and a little mischievous. So we kept things simple — hand-rolled dough, kettle-boiled, baked golden. No shortcuts, no fluff (well, except Ravaa).
              </p>
              <p>
                Every morning our oven roars to life like it's saying, "Who decided that mornings had to be dull?" (Escanor would approve.) And when those bagels rise, we hear his words in the back of our heads: "My sunshine is peerless." Okay, maybe he meant himself… but we like to think it applies to a fresh sesame bagel, too.
              </p>
              <p className="font-semibold text-ravaa-dark">
                So if you're here for good food, good vibes, and maybe a tail wag or two, welcome home. Ravaa already considers you family.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-white rounded-2xl shadow-2xl p-8">
              <img
                src="./images/Logo/ravaasbagel.jpg"
                alt="Ravaa's Bagels Logo"
                className="w-full h-64 object-cover rounded-xl mb-6"
              />
              <div className="text-center">
                <h3 className="text-2xl font-heading font-bold text-ravaa-dark mb-2">
                  Meet Ravaa! 🐕
                </h3>
                <p className="text-gray-600">
                  Our inspiration, our mascot, and the best taste tester around!
                </p>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 text-6xl opacity-20">
              🥯
            </div>
            <div className="absolute -bottom-4 -left-4 text-4xl opacity-20">
              ☕
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
