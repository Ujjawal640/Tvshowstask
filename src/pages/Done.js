import React from 'react'
import { useNavigate } from 'react-router-dom';

const Done = () => {
    const history = useNavigate();
    const navi=(e)=>{
        history("/")
        e.preventDefault();
    }
  return (
    <div className='m-4 p-6' >
     <h1 className='fw-bold text-danger' > Data Added Succesfully</h1>
<button className='btn btn-primary' onClick={navi} > Home Page</button>
    </div>
  )
}

export default Done
