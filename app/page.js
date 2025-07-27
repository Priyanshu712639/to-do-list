"use client"
import React, { useState } from 'react'

const page = () => {
 const [Tittle, setTittle] = useState('')
 const [Desc, setDesc] = useState('')
 const [Task, setTask] = useState([])

 const submitHandler = (e)=>{
      e.preventDefault()
      setTask([...Task,{ Tittle , Desc }])
      setTittle("")
      setDesc("")
 }

 const deleteHandler = (i) => {
  let copyTask = [...Task]
  copyTask.splice(i,1)
  setTask(copyTask)
 }

 let renderTask = <h2 className='font-semibold text-center'>No Task Available</h2>

 
if (Task.length>0) {
  renderTask = Task.map((t,i) => {
    return( <li key={i} className='flex items-center justify-between mb-3 bg-slate-300 py-2.5 px-3 rounded-xl'>

      <h5 className='text-xl font-semibold capitalize'>{t.Tittle}</h5>
      <h6 className='text-lg font-semibold capitalize'>{t.Desc}</h6>

    <button onClick={()=>{
      deleteHandler(i)
    }} className='bg-red-400 text-white px-4 py-2 rounded font-bold cursor-pointer '>Delete Task</button>
    </li>);
  })
}

  return (
    
    <>
    <h1 className='text-white bg-black p-5 text-2xl font-bold text-center'>Priyanshu TO-DO list</h1>
    <form onSubmit={submitHandler}>
      <input type='text'  value={Tittle} className='rounded-2xl border-zinc-800 border-2 m-5 py-2 px-4' placeholder='Enter Tittle Here' onChange={(e)=>{setTittle(e.target.value)}}/>
      <input type='text' value={Desc} className ='rounded-2xl border-zinc-800 border-2 m-5 py-2 px-4 ' placeholder='Enter description Here' onChange={(e)=>{setDesc(e.target.value)}}/>
      <button className='bg-black text-white px-4.5 py-2 ml-5 cursor-pointer rounded-xl'>Add Task</button>

    </form>
    <hr/>
    <div className='p-3 bg-sky-100 '>
      <ul>{renderTask}</ul>
    </div>
    </>
  )
}

export default page