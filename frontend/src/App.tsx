import '@fontsource/satisfy'

import Header from './components/Header'
import MainFrame from './components/MainFrame'
import Footer from './components/Footer'

function App() {
  return (
    <div className='bg-gris min-h-screen text-stone-800'>
      <Header />
      <main>
      <MainFrame/>
      </main>
      <Footer />
    </div>
  )
}

export default App
