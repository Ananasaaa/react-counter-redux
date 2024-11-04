import './App.css';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './Counter';

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="app-container">
      <h1 className="counter-title">Counter: {count}</h1>
      <div className="button-container">
        <button
          onClick={() => dispatch(increment())}
          className="button button-increment"
        >
          +
        </button>
        <button
          onClick={() => dispatch(decrement())}
          className="button button-decrement"
        >
          -
        </button>
      </div>
    </div>
  );
}

export default App;
