import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { TodoProvider } from '../store/context';
import Header from './Header.jsx';
import TodosList from './TodosList.jsx';
import AddTodo from './AddTodo.jsx';
import EditTodo from './EditTodo.jsx';

const App = () => {
  return (
    <TodoProvider>
      <BrowserRouter>
        <Header />
        <TodosList />
        <Switch>
          <Route path="/add">
            <AddTodo />
          </Route>
          <Route path="/edit">
            <EditTodo />
          </Route>
        </Switch>
      </BrowserRouter>
    </TodoProvider>
  );
};

export default App;
