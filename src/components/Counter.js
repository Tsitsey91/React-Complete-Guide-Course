import { useDispatch, useSelector } from 'react-redux';
import classes from './Counter.module.css';
// import store from '../store';

const Counter = () => {

  // we use the useSelector hook to retrieve the part of the state of 
  // the store that we want
  // The useSelector also automatically sets up a subscription to the store
  // for this component. So our component will be updated, and receive the
  // latest data automatically, whenever that data changes in the store
  const counter = useSelector(state => state.counter)

  const showCounter = useSelector(state => state.showCounter)

  const dispatch = useDispatch()

  const toggleCounterHandler = () => {
    dispatch({ type: 'toggleCounter' })
  };

  const incrementCounterHandler = () => {
    // store.dispatch({ type: 'increment' })
    dispatch({ type: 'increment' })
  }

  const increaseBy5Handler = () => {
    dispatch({ type: 'increase', amount: 5 })
  }

  const decrementCounterHandler = () => {
    // store.dispatch({ type: 'decrement' })
    dispatch({ type: 'decrement' })
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementCounterHandler}>Increment</button>
        <button onClick={increaseBy5Handler}>Increase by 5</button>
        <button onClick={decrementCounterHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
