import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, decrement, increment, removeLastTodo } from './vanillaRedux/mainReducer'

const App = () => {
  const count = useSelector(state => state.main.count)
  const todos = useSelector(state => state.main.todos)
  const dispatch = useDispatch()

  return (
    <div className="App">
      <h1>Counter {count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(removeLastTodo())}>Remove Last Todo</button>
      <button onClick={() => dispatch(addTodo(prompt()))}>Add Todo</button>
      <ul>
        {todos.map(todo => 
          <li key={todo}>{todo}</li>  
        )}
      </ul>
   </div>
  )
}

export default App
