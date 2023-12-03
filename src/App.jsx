
import styles from './App.module.css'
import About from './components/About/About'
import Hero from './components/Hero/Hero'
import Experience from './components/Experience/Experience'
import { Navbar } from './components/Navbar/Navbar'
import Education from './components/Education/Education'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'

function App() {
  
  return (
    <>
      <div className={styles.App}>
        <Navbar></Navbar>
        <Hero></Hero>
        <About></About>
        <Education></Education>       
        <Experience></Experience>
        <Projects></Projects>
        <Contact></Contact>
      </div>
    </>
  )
}

export default App
