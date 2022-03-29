import { useState } from "react"
import './App.css';

function App() {
  let [light, setLight] = useState(0)
  const next = () => {
    setLight(light + 1);
  }
  if (light === 3) {
    light = 0;
  }
  if (light === 0) {
    return (
      <div className="app">
        <button onClick={next}>Next</button>
        <div className="allLight">
          <div className="redLight"></div>
          <div className="light"></div>
          <div className="light"></div>
        </div>
      </div>
    );
  }
  else if (light === 1) {
    return (
      <div className="app">
        <button onClick={next}>Next</button>
        <div className="allLight">
          <div className="light"></div>
          <div className="yellowLight"></div>
          <div className="light"></div>
        </div>
      </div>
    );
  }
  else {
    return (
      <div className="app">
        <button onClick={next}>Next</button>
        <div className="allLight">
          <div className="light"></div>
          <div className="light"></div>
          <div className="greenLight"></div>
        </div>
      </div>
    );
  }
}
export default App;
