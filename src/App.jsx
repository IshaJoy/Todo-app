import {  useDispatch, useSelector } from 'react-redux'
import './App.css'
import {  useState } from 'react'
import { addTodo } from './Components/TodoSlice'
import Table from './Todo'

function App() {
  const [todos,setTodos]=useState({
    id:JSON.stringify(Date.now()),todo:"",status:""
  })
  const dispatch=useDispatch()
  const handleAddTodo=()=>{
    if(todos.todo==""){
      alert("Please Enter a Todo!!")
    }
    else{
      dispatch(addTodo(todos))
     setTodos({
      id:JSON.stringify(Date.now()),todo:"",status:""
    })
    }
    
  }
  return (
    <div className='container'>
      <h1 className='text-center mt-5   fw-bolder p-3' style={{fontSize:'50px'}}>My Todo List</h1>
      <div className='d-flex justify-content-center '>
      <input value={todos.todo} onChange={e=>setTodos({...todos,todo:e.target.value})} className='w-25 rounded mt-2' style={{border:'none',boxShadow:'2px 2px 2px 2px grey  '}}  type="text" placeholder='Add todo...' />&nbsp;&nbsp;
      <button onClick={handleAddTodo} className='btn text-dark fw-bolder rounded-3 mt-2 bg-warning '>Submit</button>
      </div>
        <Table/>
    </div>
  )
}
export default App