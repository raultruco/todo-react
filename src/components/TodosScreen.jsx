import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import TodosList from './TodosList.jsx';
import AddTodo from './AddTodo.jsx';
import EditTodo from './EditTodo.jsx';

const TodosScreen = () => {
  return (
    <BrowserRouter>
      <Button variant="outlined" color="primary" component={Link} to="/add">
        Add Todo
      </Button>
      <TodosList />
      <Switch>
        <Route path="/add">
          <AddTodo />
        </Route>
        <Route exact path="/edit/:id">
          <EditTodo />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default TodosScreen;
