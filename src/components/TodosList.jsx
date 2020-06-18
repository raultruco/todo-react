import React from 'react';
import { List, Paper } from '@material-ui/core';
import { useTodoState } from '../store/context';
import TodoListItem from './TodoListItem.jsx';

const TodosList = () => {
  const { todos, initializing } = useTodoState();

  return (
    <>
      {initializing && <p>Loading...</p>}
      {todos.length > 0 && (
        <Paper style={{ margin: 16 }}>
          <List style={{ overflow: 'scroll' }}>
            {todos.map((todo) => (
              <TodoListItem todo={todo} key={todo.id} />
            ))}
          </List>
        </Paper>
      )}
    </>
  );
};

export default TodosList;
