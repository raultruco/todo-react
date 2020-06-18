import React from 'react';
import { TodoProvider } from '../store/context';
import Header from './Header.jsx';
import TodosList from './TodosList.jsx';

const App = () => {
  return (
    <TodoProvider>
      <Header />
      <TodosList />
    </TodoProvider>
  );
};

export default App;
