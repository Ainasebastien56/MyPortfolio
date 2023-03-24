import Navbar from './components/Navbar'
import { Banner } from './components/Banner'
import { Skills } from './components/Skills'
import { Projects } from './components/Projects'
import './App.css'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

function App() {
  return(
    <div className='App'>
       <Navbar/>
      <Banner/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
   

  )
 
}

export default App
