import React from 'react'
import data from './Data'

export default function Table({info,dispatch}) {
  return (
   <>
   <div className='border-2 bg-gray-200 p-4 flex  justify-center  items-center w-[90vw] m-2   '>

    <table className='w-[90vw]'>
        <thead className='border-2   '>
            <tr >
                <th>S No.</th>
                <th>Name</th>
                <th>Mobile No.</th>
                <th>Date of Birth</th>
                <th>Age</th>
                <th>Address</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody className=' border-2'>
           {info?.map((e,index)=>{
            return(
                <tr className='my-2 bg-gray-300 border-2 '>
                <td>{index+1}</td>
                <td>{e.name}</td>
                <td>{e.number}</td>
                <td>{e.dob}</td>
                <td>{e.age}</td>
                <td>{e.address}</td>
                <td  onClick={()=>dispatch({type:"delete",payload:e.sNo})} className=''><button className='bg-cyan-800 cursor-pointer text-white p-2 w-16 m-2'>Delete</button></td>
                
            </tr>
            )
           })}
        </tbody>
    </table>
   </div>
   </>
  )
}
