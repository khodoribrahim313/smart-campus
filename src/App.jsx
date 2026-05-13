import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Services from './pages/Services'
import StudySpots from './pages/StudySpots'
import Contact from './pages/Contact'

function App() {
  return (
    <Router>
      <Navbar />
      <main className="mt-16 min-h-screen bg-surface">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/study-spots" element={<StudySpots />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  )
}

export default App
