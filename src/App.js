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
    
    <Folder name="Desktop"/>
    <Folder name="Application"/>
  </div>
  
  );
}
const Folder =(props)=>{
  console.log(props);
  const name = "Welcome to my desktop";
  return <h1>{props.name}</h1>
}


export default App;
