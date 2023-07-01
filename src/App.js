import logo from './logo.svg';
import './App.css';

function App() {
  var user = "Mbapee"
  return (
  <div>
    <h1 className="MyButton">Hello World!!!</h1>
    <h2>I AM {user}</h2>
    <MyButton />
  </div>);
}

function MyButton(){
  return (<button className="MyButton">Help </button>);
}



export default App;
