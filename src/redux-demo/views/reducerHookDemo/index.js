import React, { useReducer } from 'react'

const initialState = { count: 1 }
function reducer(state, action) {
  switch (action.type) {
    case 'reset':
      return initialState
    case 'increment':
      return { count: state.count + 1 }
    case 'decrement':
      return { count: state.count - 1 }
    case 'incrementD':
      return { count: state.count + action.data }
    default:
      return state
  }
}
function Counter(props) {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <div>
      Num:{state.count}
      <button onClick={() => dispatch({ type: 'reset' })}>reset</button>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
      <button onClick={() => dispatch({ type: 'incrementD', data: 2 })}>
        +2
      </button>
    </div>
  )
}
export default Counter
