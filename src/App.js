import React from 'react'
import "./App.css"
import { useSelector,useDispatch } from 'react-redux';
import { incNumber,decNumber } from './actions';

const App = () => {
  const myState= useSelector((state)=>state.changeValue);
  const dispatch= useDispatch();
  return (
    <>
      <div className='container'>
      <h1>Increment/Decrement Counter</h1>
      <h2>Using React Redux</h2>
        <div className='quantity'>
        {/* to decrement a number by 1 */}
          {/* <button className='dec' onClick={()=>dispatch(decNumber())}><span>-</span></button> */}
        {/* To decrement a number by 5 */}
        <button className='dec' onClick={()=>dispatch(decNumber(5))}><span>-</span></button>
          <input type="text" className='count' value={myState}/>
          {/* to increment a number by 1 */}
          {/* <button className='inc' onClick={()=>dispatch(incNumber())}><span>+</span></button> */}


          {/* To increment a number by 5 */}
          <button className='inc' onClick={()=>dispatch(incNumber(5))}><span>+</span></button>
        </div>
      </div>
    </>
  )
}

export default App