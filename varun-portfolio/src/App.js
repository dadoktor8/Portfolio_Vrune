import logo from './logo.svg';
import './App.css';
import Navbar  from './components/Navbar';
import VideoGrid from './components/VideoGrid';
import VideoCarousel from './components/VideoCarousel';

function App() {
  return (
    <div>
      <Navbar />
      <VideoCarousel/>
    </div>
  );
}

export default App;
