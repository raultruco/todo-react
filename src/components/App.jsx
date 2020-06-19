import React from 'react';
import { TodoProvider } from '../store/context';
import Header from './Header.jsx';
import TodosScreen from './TodosScreen.jsx';

const App = () => {
  return (
    <TodoProvider>
      <Header />
      <TodosScreen />
    </TodoProvider>
  );
};

export default App;
