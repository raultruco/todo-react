import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  ListItem,
  Checkbox,
  IconButton,
  ListItemText,
  ListItemSecondaryAction,
} from '@material-ui/core';
import DeleteOutlined from '@material-ui/icons/DeleteOutlined';
import { useTodoDispatch } from '../store/context';
import { updateTodo } from '../store/actions';

const TodoListItem = ({ todo }) => {
  const [optimisticIsDone, setOptimisticIsDone] = useState(todo.isDone);
  const [saving, setSaving] = useState();
  const dispatch = useTodoDispatch();

  const onIsDoneClick = async (isDone) => {
    setSaving(true);
    setOptimisticIsDone(isDone);
    await updateTodo(dispatch, { ...todo, isDone });
    setSaving(false);
  };

  return (
    <ListItem divider={true} disabled={saving}>
      <Checkbox
        onClick={() => onIsDoneClick(!todo.isDone)}
        checked={optimisticIsDone}
        disableRipple
      />
      <ListItemText primary={todo.title} />
      <ListItemSecondaryAction>
        <IconButton aria-label="Delete Todo">
          <DeleteOutlined />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

TodoListItem.propTypes = {
  todo: PropTypes.shape({
    title: PropTypes.string.isRequired,
    priority: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.string),
  }),
  loading: PropTypes.bool,
};

export default TodoListItem;
