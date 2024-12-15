
import { Outlet } from 'react-router-dom'
import './App.css'
import MyNavItems from './components/MyNavItems'
import Slieder from './components/Slider'

import HomCategory from './home/HomCategory'
import SliederPoster from './components/SliderPoster'
function App() {
  

  return (
    <>
    
      <MyNavItems></MyNavItems>
      <Outlet/>
      <Slieder/>
      <HomCategory/>
      <SliederPoster/>
    </>
  )
}

export default App
