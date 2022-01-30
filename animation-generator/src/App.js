import { useState } from 'react';
import './App.css';
import { ContextProvider, GlobalContext } from './components/context/GlobalContext';
import Header from './components/header/header';
import CodeDrawer from './components/code-drawer/code-drawer';
import SectionHero from './components/sections/section-hero';




function App() {

  const [ isDrawerOpen, setDrawerOpen ] = useState(true);

  const openDrawer = () => {
    setDrawerOpen(true);
  }

  const closeDrawer = () => {
    setDrawerOpen(false);
  }

  return (
    <div className="App">
      <ContextProvider>
        <Header drawerAction={openDrawer} drawerState={isDrawerOpen} />
        <CodeDrawer drawerAction={closeDrawer} drawerState={isDrawerOpen} />
        <div className="content">
          <SectionHero />
        </div>
      </ContextProvider>
    </div>
    
  );
}

export default App;
