import logo from './logo.svg';
import './App.css';
import Spinner from './components/spinner/Spinner';
function App() {
  return (
   <div>
     
      <Spinner customText={"Loading"} speed={"1.2"}/>
     <div style={{background:"#32323C",height:"100vh"}}></div>
    
   </div>
  );
}

export default App;
