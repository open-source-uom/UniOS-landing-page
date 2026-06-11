import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Description from './components/Description'
import SnakeFeatures from './components/SnakeFeatures'
import Team from './components/Team'
import './index.css'

export default function App() {
  return (
    // bg.jpg is the clean dark background for the whole page
    <div style={{
      backgroundImage: 'url(/assets/bg.jpg)',
      backgroundSize: '100% auto',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'top center',
      backgroundColor: '#0e0714',
    }}>
      {/* bg2 snake pattern overlaid on top for hero -> features section */}
      <div style={{
        backgroundImage: 'url(/assets/bg2.jpg)',
        backgroundSize: '100% auto',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'top center',
      }}>
        <Navbar />
        <Hero />
        <Description />
        <SnakeFeatures />
      </div>

      <Team />
    </div>
  )
}
