import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import { addTodo, decrement, increment, removeLastTodo } from './vanillaRedux/mainReducer'
import { decrement, increment } from './toolkitRedux/toolkitReducer'

const App = () => {
  const count = useSelector(state => state.toolkit.count)
  const todos = useSelector(state => state.toolkit.todos)
  const dispatch = useDispatch()

  return (
    <div className="App">
      <h1>Counter {count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      {/* <button onClick={() => dispatch(removeLastTodo())}>Remove Last Todo</button>
      <button onClick={() => dispatch(addTodo(prompt()))}>Add Todo</button>
      <ul>
        {todos.map(todo => 
          <li key={todo}>{todo}</li>  
        )}
      </ul> */}
   </div>
  )
}

export default App
