import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Toaster } from '@/components/ui/toaster'
import Homepage from '@/pages/Homepage'
import ToolDetail from '@/pages/ToolDetail'
import SubmitTool from '@/pages/SubmitTool'
import About from '@/pages/About'
import Categories from '@/pages/Categories'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/tool/:id" element={<ToolDetail />} />
            <Route path="/submit" element={<SubmitTool />} />
            <Route path="/about" element={<About />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/categories/:category" element={<Categories />} />
          </Routes>
        </main>
        <Footer />
        <Toaster />
      </div>
    </Router>
  )
}

export default App