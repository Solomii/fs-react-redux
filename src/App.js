import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCount, subCount } from './store/countSlice';
// import CounterReducer from "./components/CounterReducer"

const App = () => {
  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const handleAdd = () => dispatch(addCount());
  const handleSub = () => dispatch(subCount());
//   const handleStep = ({ targer: { value } }) => {
//     Number(value);
//   };
  return (
    <>
      <h1>Redux</h1>
      {/* <CounterReducer/> */}
      <h2>count:{count}</h2>
      <button onClick={handleAdd}>+</button>
      <button onClick={handleSub}>-</button>
      {/* <input type="number" value={step} onChange={handleStep} /> */}
    </>
  );
};

export default App;
