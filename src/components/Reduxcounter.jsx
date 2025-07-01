
import { useSelector, useDispatch } from 'react-redux';

function CounterRedux() {
  const count = useSelector((state) => state.value);
  const dispatch = useDispatch();

  return (
    <div style={{ textAlign: 'center', marginTop: 50 }}>
      <h1>Count: {count}</h1>
      <button onClick={() => dispatch({ type: 'increment' })} style={btnStyle}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })} style={btnStyle}>-</button>
    </div>
  );
}
const btnStyle ={
    boder:'2px solid black',
    padding:10,
    margin:5,
    color:"white",
    backgroundColor:"black",
    fontSize:"18px"
}
export default CounterRedux;
