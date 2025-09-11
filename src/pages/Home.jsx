import Hero from '../components/Hero'
import PopularItems from '../components/PopularItems'
import About from '../components/About'
import LocationHours from '../components/LocationHours'
import SocialMedia from '../components/SocialMedia'

const Home = () => {
  return (
    <div>
      <Hero />
      <PopularItems />
      <About />
      <LocationHours />
      <SocialMedia />
    </div>
  )
}

export default Home
