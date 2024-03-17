import { useState } from 'react'
import './App.css'
import SubHeader from './Components/SubHeader/SubHeader'
import Navbar from './Components/NavBarF/NavBarF'
import CarouselF from './Components/CarouselF/CarouselF'
import Featured from './Components/Featured/Featured'
import SectionV from './Components/SectionV/SectionV'
import FunFacts from './Components/FunFacts/FunFacts'
import BestDeal from './Components/BestDeal/BestDeal'
import VillaProperties from './Components/VillaProperties/VillaProperties'
import Fcontact from './Components/Fcontact/Fcontact'
import FScontact from './Components/FScontact/FScontact'





function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='body'>
    <SubHeader />
    <Navbar /> 
    <CarouselF />
    <Featured />
    <SectionV />
    <FunFacts />
    <BestDeal />
    <VillaProperties />
    <Fcontact/>
    <FScontact/>

    </div>
    

    
    </>
  )
}

export default App
