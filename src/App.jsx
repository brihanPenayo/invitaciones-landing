import './index.css'
import Home from '../pages/Home'
import { Personalization } from '../pages/Personalization'
import { Header } from '../components/Header/Header'
import ActiveEvents from '../pages/ActiveEvents'
import Contact from '../pages/Contact'
function App() {

  return (
    <>
      <Header />
      <Home />
      <Personalization />
      <ActiveEvents />
      <Contact/>
    </>
  )
}

export default App
