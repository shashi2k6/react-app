import logo from './logo.svg';
import './App.css';

function App() {  
  
  return (
    <div>   
    <h1>Shopping List for :</h1>
    <ul>
      <li>Instagram</li>
      <li>WhatsApp</li>
      <li>Oculus</li>
    </ul>
    
    <Folder/>
  </div>
  
  );
}
const Folder =()=>{
  return <h1>Folder Content</h1>
}


export default App;
