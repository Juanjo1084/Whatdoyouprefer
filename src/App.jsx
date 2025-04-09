import './styles/App.css'
import {Routes, Route} from "react-router-dom"
import Home from "./pages/home.jsx"
import Genero from "./components/genero.jsx"
import questionsData from "./data/Questions.json"
import Questions from './components/questions.jsx'

function App() {

  return (
    <div className='app'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/genero" element={<Genero />} />
        <Route path="/questions" element={<Questions questions={questionsData} />} />
      </Routes>
    </div>
  )
}

export default App
