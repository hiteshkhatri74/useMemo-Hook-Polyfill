import {useState} from 'react';
import './App.css';
import useCustomMemo from './hooks/use-custom-memo';

function App() {

  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(100);

  const squaredValue = () => {
    console.log("expensive Calculation...");
    return counter * counter;
  };

  const memoisedSquaredValue = useCustomMemo(squaredValue,[counter]);

  return (
    <div className="App">
      <h2>Counter: {counter}</h2>
      <h2>Squared Counter: {memoisedSquaredValue}</h2>
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
      <h2>Counter2: {counter2}</h2>
      <button onClick={() => setCounter2(counter2 - 1)}>Decrement</button>
    </div>
  );
}

export default App;
