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
    
    <Folder name="Desktop">
      <h4>Movies</h4>
      <h4>Books</h4>
    </Folder>
    <Folder name="Application">
    <h4>pdf reader</h4>
      <h4>chrome</h4>
      </Folder>
  </div>
  
  );
}
const Folder =(props)=>{
  console.log(props);
  const name = "Welcome to my desktop";
  return <div>{props.name} {props.children}</div> 
}


export default App;
