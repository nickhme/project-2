import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

import Home from "./components/Home"
import About from "./components/About"
import CountriesList from "./components/CountriesList"
import ShowCountry from "./components/ShowCountry"
import Navbar from "./components/Navbar"

function App() {
  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/countries" element={<CountriesList />} />
          <Route path="/about" element={<About />} />
          <Route path="/country/:countryName" element={<ShowCountry />} />
        </Routes>
      </main>
    </Router>
  )
}

export default App
