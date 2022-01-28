import './App.css';
import SettingsGlobal from './components/settings-global/settings-global';
import SectionHero from './components/sections/section-hero';
import react, {useState} from 'react';

function App() {

  const [animDuration, setAnimDuration] = useState('610');
  const [animEasing, setAnimEasing] = useState('ease-out');
  const [animStyle, setAnimStyle] = useState('fade');

  return (
    <div className="App">
      <header className="App-header">
        <button className="code-toggle">&#60;&#47;&#62; Code</button>
        <span className="logo-wrapper">
          <svg className="logo" viewBox="0 0 37 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M25.9496 0.399994C24.6496 0.399994 23.4496 0.699994 22.2496 1.29999C19.8496 0.199994 17.1496 0.199994 14.7496 1.29999C13.5496 0.699994 12.2496 0.399994 11.0496 0.399994C5.14961 0.399994 0.349609 6.49999 0.349609 14C0.349609 21.5 5.14961 27.6 11.0496 27.6C12.3496 27.6 13.5496 27.3 14.7496 26.7C17.1496 27.8 19.8496 27.8 22.2496 26.7C23.4496 27.3 24.7496 27.6 25.9496 27.6C31.8496 27.6 36.6496 21.5 36.6496 14C36.6496 6.49999 31.8496 0.399994 25.9496 0.399994ZM20.6496 14C20.6496 16.9 19.8496 19.8 18.4496 22.1C17.0496 19.8 16.2496 16.9 16.2496 14C16.2496 11.1 17.0496 8.19999 18.4496 5.89999C19.9496 8.19999 20.6496 11.1 20.6496 14ZM18.4496 4.29999C17.6496 3.19999 16.6496 2.39999 15.5496 1.69999C17.4496 0.899994 19.4496 0.899994 21.3496 1.69999C20.2496 2.39999 19.3496 3.19999 18.4496 4.29999ZM17.9496 23L17.8496 23.1C16.9496 24.3 15.9496 25.3 14.7496 25.9C13.6496 25.2 12.5496 24.3 11.6496 23.1C9.84961 20.6 8.74961 17.4 8.74961 14C8.74961 10.6 9.74961 7.39999 11.6496 4.89999C12.5496 3.69999 13.5496 2.79999 14.7496 2.09999C15.8496 2.79999 16.9496 3.69999 17.8496 4.89999L17.9496 4.99999C16.2496 7.49999 15.3496 10.7 15.3496 14C15.2496 17.3 16.2496 20.5 17.9496 23ZM18.4496 23.7C19.3496 24.8 20.2496 25.6 21.3496 26.3C19.4496 27.1 17.4496 27.1 15.5496 26.3C16.6496 25.7 17.6496 24.8 18.4496 23.7ZM19.1496 23.1L19.0496 23C20.7496 20.5 21.6496 17.3 21.6496 14C21.6496 10.7 20.7496 7.49999 19.0496 4.99999L19.1496 4.89999C20.0496 3.69999 21.0496 2.79999 22.2496 2.09999C23.3496 2.79999 24.4496 3.69999 25.3496 4.89999C27.1496 7.39999 28.2496 10.6 28.2496 14C28.2496 17.4 27.2496 20.6 25.3496 23.1C24.4496 24.3 23.4496 25.2 22.2496 25.9C21.0496 25.3 20.0496 24.3 19.1496 23.1ZM29.1496 14C29.1496 8.79999 26.7496 3.99999 23.0496 1.69999C23.9496 1.29999 24.9496 1.09999 25.9496 1.09999C28.5496 1.09999 30.9496 2.49999 32.7496 4.89999C34.5496 7.39999 35.6496 10.6 35.6496 14C35.6496 17.4 34.6496 20.6 32.7496 23.1C30.9496 25.6 28.4496 26.9 25.9496 26.9C24.9496 26.9 23.9496 26.7 23.0496 26.3C26.7496 24.1 29.1496 19.3 29.1496 14ZM13.9496 26.3C13.0496 26.7 12.0496 26.9 11.0496 26.9C8.44961 26.9 6.04961 25.5 4.24961 23.1C2.44961 20.6 1.34961 17.4 1.34961 14C1.34961 10.6 2.34961 7.39999 4.24961 4.89999C6.04961 2.39999 8.54961 1.09999 11.0496 1.09999C12.0496 1.09999 13.0496 1.29999 13.9496 1.69999C10.2496 3.99999 7.84961 8.79999 7.84961 14C7.84961 19.3 10.1496 24.1 13.9496 26.3Z" fill="currentColor"/>
          </svg>
        </span>
        <a href="#" className="utility">View on GitHub</a>
      </header>
        <div className="content">
          <SectionHero 
            animDuration={animDuration} 
            setAnimDuration={setAnimDuration}
            animEasing={animEasing}
            setAnimEasing={setAnimEasing}
            animStyle={animStyle}
            setAnimStyle={setAnimStyle} />
          <SectionHero 
            animDuration={animDuration} 
            setAnimDuration={setAnimDuration}
            animEasing={animEasing}
            setAnimEasing={setAnimEasing}
            animStyle={animStyle}
            setAnimStyle={setAnimStyle} />
          <SectionHero 
            animDuration={animDuration} 
            setAnimDuration={setAnimDuration}
            animEasing={animEasing}
            setAnimEasing={setAnimEasing}
            animStyle={animStyle}
            setAnimStyle={setAnimStyle} />
        </div>
    </div>
    
  );
}

export default App;
