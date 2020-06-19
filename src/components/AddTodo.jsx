import React, { useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { useTodoDispatch } from '../store/context';
import { addTodo } from '../store/actions';
import TodoForm from './TodoForm.jsx';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

const AddTodo = () => {
  const todoFormStateRef = useRef({});
  const dispatch = useTodoDispatch();
  const history = useHistory();

  const handleAdd = async () => {
    const todo = todoFormStateRef.current;
    await addTodo(dispatch, todo);
    history.goBack();
  };

  const handleClose = () => {
    history.goBack();
  };

  return (
    <Dialog open={true} onClose={handleClose} aria-labelledby="add-todo">
      <DialogTitle id="add-todo-title">Add Todo</DialogTitle>
      <DialogContent>
        <TodoForm ref={todoFormStateRef} />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleAdd} variant="outlined" color="primary">
          ADD!
        </Button>
        <Button onClick={handleClose} variant="outlined" color="primary">
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddTodo;
