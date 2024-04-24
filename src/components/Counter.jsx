import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset } from '../redux/counterSlice'

function Counter() {

  const [range, setRange] = useState('')
  console.log(range);

  //  call useDispatch()- inorder to access the function/action
  const dispatch = useDispatch()
  // useSelector()-inorder to access the state
  const count =  useSelector((state)=>state.counterReducer.value)

  return (
    <div className='mt-3 d-flex justify-content-center align-items-center w-100 flex-column'>
        <h1 style={{fontSize:"10rem"}}>{count}</h1>
      <div className='d-flex mt-5 justify-content-evenly w-100'>
        <buttom className='btn p-3 btn-success fs-5 rounded-circle' onClick={()=>dispatch(increment(Number(range)))}>Increment</buttom>
        <buttom className='btn p-3 btn-danger fs-5 rounded-circle' onClick={()=>dispatch(reset())}>Reset</buttom>
        <buttom className='btn p-3 btn-warning fs-5 rounded-circle' onClick={()=>dispatch(decrement(Number(range)))}>Decrement</buttom>
      </div>
      <div className='mt-5 w-100'>
        <input type="text" placeholder='Enter the range' className='form-control' onChange={(e)=>setRange(e.target.value)} />
      </div>
    </div>
  )
}

export default Counter