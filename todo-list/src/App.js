import './App.css';

const App = () => {
  return (
    <div className="main">
      <div className="center">
        <h1>ToDo list</h1>
        <input type="text" placeholder ="Enter your task here..."></input>
        <ol>
          <li>Clean up bedroom</li>
          <li>Buy some milk</li>
          <li>Jogging</li>
          <li>Learn React</li>
          <li>Doing exercises</li>
        </ol>
      <div className='footer'>
        <h3>Mindx todo list</h3>
      </div>
      </div>
    </div>
  );
}

export default App;
