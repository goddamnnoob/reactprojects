import logo from './logo.svg';
import './App.css';

function App() {
  function displayTime() {
    try {
      var region = document.getElementById("region").value;
    console.log(region);
    var date = new Date();
    var currentTime = date.toLocaleString("en-US", {
      timeZone: region
    });
    console.log(region);
    document.getElementById("time").innerHTML = currentTime;
    } catch (error) {
      document.getElementById("time").innerHTML = error;
    }
  }
  return (
    <div className="App">
    <h1>Current Time</h1>
    <p >Enter region: </p>
    <input type="text" id="region" name="region"/>
    <button onClick={displayTime}>Submit</button>
    <p id="time"></p>
    </div>
  );
}



export default App;
