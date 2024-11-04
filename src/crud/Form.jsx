import React, { useReducer, useRef, useState } from 'react'
import Table from './Table'


function dataReducer(state,action){
    switch(action.type){
        case "add":
        return[...state,action.payload]
        case "delete":
            return state.filter((e)=>e.sNo!=action.payload)
        default:
            return state
    }
}

export default function Form() {

    const [info,dispatch]=useReducer(dataReducer,[])

const [states,setStates]=useState({
    name:"",
    number:"",
    dob:"",
    age:"",
    address:""

})

const handleChange=(e)=>{
    setStates({...states,[e.target.name]:e.target.value})
}

const nameref=useRef()

const handleSubmit=(e)=>{
    e.preventDefault();
dispatch({type:"add",payload:states})
setStates({name:"",number:"",dob:"",age:"",address:""})
nameref.current.focus()
}

  return (
 <>
 <div className='border-2  bg-gray-200 p-4 w-[90vw] grid  md:grid-cols-2 xl:grid-cols-3 items-center  '>
   
<div className='bg-gray-300 p-2 border-2 border-cyan-800 rounded m-4 flex justify-center items-center'>
    <label className='mr-4' htmlFor="First Name">First Name</label>
    <input 
 ref={nameref}
    onChange={handleChange} 
    value={states.name} 
    name='name' 
    className='bg-gray-300 border-2 py-2'  
    type="text "
     placeholder='Enter First Name' />
</div>

<div  className='bg-gray-300 p-2 border-2 border-cyan-800 rounded m-4 flex justify-center items-center'>
    <label className='mr-4' htmlFor="Mobile No.">Mobile No.</label>
    <input
     onChange={handleChange}  
     value={states.number} 
     name='number' 
     className='bg-gray-300 border-2 py-2'  
     type="text "
      placeholder='Enter Mobile No.' />


</div>
<div  className='bg-gray-300 p-2 border-2 border-cyan-800 rounded m-4 flex justify-center items-center'>
    <label className='mr-4' htmlFor="Date of Birth">Date of Birth</label>
    <input
     onChange={handleChange}  
     value={states.dob}
      name='dob' 
      className='bg-gray-300 border-2 py-2'  
      type="text " 
      placeholder='Enter Date of Birth' />
</div>

<div  className='bg-gray-300 p-2 border-2 border-cyan-800 rounded m-4  flex justify-center items-center'>
    <label className='mr-4' htmlFor="Age">Age</label>
    <input
     onChange={handleChange}  
     value={states.age}
      name='age'
       className='bg-gray-300 border-2 py-2'  
       type="text "
        placeholder='Enter Age' />
</div>

<div  className='bg-gray-300 p-2 border-2 border-cyan-800 rounded m-4 flex justify-center items-center'>
    <label className='mr-4' htmlFor="Mobile No.">Address</label>
    <input
     onChange={handleChange}  
     value={states.address}
      name='address'
       className='bg-gray-300 border-2 py-2' 
       type="text " 
       placeholder='Enter Address' />
</div>
<button onClick={handleSubmit} type='submit' className='bg-cyan-900 text-white w-16 px-2 rounded py-2 ml-4'>Add</button>
 </div>
 <Table info={info} dispatch={dispatch}/>
 </>
  )
}
