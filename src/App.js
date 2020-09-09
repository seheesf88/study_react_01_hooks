import React, {useState} from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  //useState takes two values array
  //count is state
  //setCount is function that can update state
  //useState is hook method, indside of () is initial value for the state
  const decrement = () => {
    setCount(prevCount => prevCount - 1);
  }

  const increment = () => {
    setCount(prevCount => prevCount + 1);
  }

  return (
    <div className="app">
      <div>Studying Hooks</div>
      <div className="title">Counting Number</div>
      <div className="counting_app">
        <button onClick={decrement}>-</button>
        <div className="display">{count}</div>
        <button onClick={increment}>+</button>
      </div>
    </div>
  );
}

export default App;
