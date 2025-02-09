import React from 'react'; 
import './index.css'; 
import NavbarMain from './Components/Navbar/NavbarMain'; 
import HeroMain from './Components/Hero/HeroMain'; 
import HeroGradient from './Components/Hero/HeroGradient';
import SubHero from './Components/Hero/SubHero';
import AboutMeMain from './Components/AboutMeSection/AboutMeMain';
import HelperSection from './Components/HelperSection';
import SkillMain from './Components/SkillsSection/SkillMain'; 
//import Subskill from './Components/SkillsSection/Subskill';



function App() {
  return (
    <main className='font-body'>
    <HeroGradient/>
     <NavbarMain/>   
     <HeroMain/> 
     <SubHero/> 
     <AboutMeMain/> 
     <SkillMain/> 
     {/* <Subskill/> */}
     <HelperSection/> 
     
    </main>
  );
}

export default App;
