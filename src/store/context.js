import React, { useEffect } from 'react'
import { initialState, todoReducer } from './reducers'
import { init } from './actions'

const TodoStateContext = React.createContext()
const TodoDispatchContext = React.createContext()

function TodoProvider({ children }) {
  const [state, dispatch] = React.useReducer(todoReducer, initialState);

  useEffect(() => {
    init(dispatch);
  }, []);

  return (
    <TodoStateContext.Provider value={state}>
      <TodoDispatchContext.Provider value={dispatch}>
        {children}
      </TodoDispatchContext.Provider>
    </TodoStateContext.Provider>
  )
}

function useTodoState() {
  const context = React.useContext(TodoStateContext)
  if (context === undefined) {
    throw new Error('useTodoState must be used within a TodoProvider')
  }
  return context
}

function useTodoDispatch() {
  const context = React.useContext(TodoDispatchContext)
  if (context === undefined) {
    throw new Error('useTodoDispatch must be used within a TodoProvider')
  }
  return context
}

export {
  TodoProvider,
  useTodoState,
  useTodoDispatch
}
