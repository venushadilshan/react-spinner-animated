import logo from './logo.svg';
import './App.css';
import Spinner from './components/spinner/Spinner';
import DoubleBubble from './components/DoubleBubble/DoubleBubble';
import BarLoader from './components/BarLoader/BarLoader';
import SlidingPebbles from './components/SlidingPebbles/SlidingPebbles';
function App() {
  return (
   <div>
   
      <SlidingPebbles customText={"Loading"}/>
      
     <div style={{background:"#32323C",height:"100vh"}}></div>
    
   </div>
  );
}

export default App;
