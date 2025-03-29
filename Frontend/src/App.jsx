import './app.css'
import LeftBar from './Components/LeftBar/leftBar'
import TopBar from './Components/TopBar/topBar'
import Gallery from './Components/Gallery/gallery'


const App = () => {
  return (
    <div className='app'>
      <LeftBar />
      <div className='content'>
        <TopBar />
        
        <Gallery />
      </div>
    </div>
  )
}

export default App