
import Intro from './components/Intro'
import Portfolio from  './components/Portfolio'
import Timeline from './components/Timeline'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Navbar from './components/Navbar'

function App() {

  
  return (
    <>
    {/* all relevant sections */}
		<div className="bg-stone-100 dark:bg-stone-900 text-stone-900 dark:text-stone-300 min-h-screen font-inter">
			<div className="max-w-5xl w-11/12 mx-auto">
        <Navbar/>
        <div className="pt-16 text-stone-900 bg-stone-100 dark:text-stone-100 dark:bg-stone-900">
          <Intro />
          <Timeline />
          <Portfolio />
          <Contact />
          <Footer />
        </div>
      </div>
    </div>
    </>
  )
}

export default App
