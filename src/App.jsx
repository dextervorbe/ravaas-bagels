import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Menu from './pages/Menu'
import './styles/globals.css'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-ravaa-cream">
        <Header />
        <main>
          <Routes>
            <Route path="ravaas-bagels/" element={<Home />} />
            <Route path="ravaas-bagels/menu" element={<Menu />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
