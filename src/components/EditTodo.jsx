import React, { useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { useTodoState, useTodoDispatch } from '../store/context';
import { getTodo, updateTodo } from '../store/actions';
import { useParams } from 'react-router-dom';
import TodoForm from './TodoForm.jsx';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

const EditTodo = () => {
  const { id } = useParams();
  const { todos } = useTodoState();
  const dispatch = useTodoDispatch();
  const todoFormStateRef = useRef({});
  const history = useHistory();

  const todo = todos.find((item) => item.id === id);

  useEffect(() => {
    getTodo(dispatch, id);
  }, []);

  const handleEdit = async () => {
    const newTodo = Object.assign({}, todo, todoFormStateRef.current);
    await updateTodo(dispatch, newTodo);
    history.goBack();
  };

  const handleClose = () => {
    history.goBack();
  };
  return (
    <Dialog open={true} onClose={handleClose} aria-labelledby="add-todo">
      <DialogTitle id="add-todo-title">Edit Todo</DialogTitle>
      <DialogContent>
        <TodoForm ref={todoFormStateRef} todo={todo} />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleEdit} variant="outlined" color="primary">
          UPDATE!
        </Button>
        <Button onClick={handleClose} variant="outlined" color="primary">
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default EditTodo;
