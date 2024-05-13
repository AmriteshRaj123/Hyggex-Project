import './App.css';
import Header from './components/header/header';
import Steper from './components/steper/steper';
import VideoSection from './components/videoSection/VideoSection';
import Accordion from './components/accordion/Accordion';
import HyggexCard from './components/Hyggex/HyggexCard';

function App() {

  // <Header/>
  // <VideoSection/>
  return (
    <main>
      
      <Header/>
      <Steper/>
      <VideoSection/>
      <HyggexCard/>
      { <Accordion/> }

    </main>

  );
}

export default App;
