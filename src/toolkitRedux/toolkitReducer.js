import { createAction, createReducer } from "@reduxjs/toolkit"

const initialState = {
  count: 0,
  todos: ['shoot the movie', 'take a picture', 'tell about toolkit'],
}

export const increment = createAction('INCREMENT')
export const decrement = createAction('DECREMENT')
// const addTodo = createAction('ADD_TODO')
// const removeTodo = createAction('REMOVE_TODO')

export default createReducer(initialState, {
  [increment]: function (state) {
    state.count = state.count + 1
  },
  [decrement]: function (state) {
    state.count = state.count - 1
  },
})