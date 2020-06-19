import React, { useImperativeHandle } from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

const priorities = [
  {
    value: 1,
    label: 'Highest',
  },
  {
    value: 2,
    label: 'High',
  },
  {
    value: 3,
    label: 'Normal',
  },
  {
    value: 4,
    label: 'Low',
  },
  {
    value: 5,
    label: 'Lowest',
  },
];

const TodoForm = ({ todo = {} }, ref) => {
  const [title, setTitle] = React.useState(todo.title || '');
  const [description, setDescription] = React.useState(todo.description || '');
  const [priority, setPriority] = React.useState(todo.priority || 3);
  useImperativeHandle(
    ref,
    () => ({
      title,
      description,
      priority: parseInt(priority),
    }),
    [title, description, priority],
  );
  return (
    <form>
      <TextField
        id="title"
        label="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        fullWidth
      />
      <TextField
        id="description"
        label="Description"
        multiline
        rowsMax={8}
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        fullWidth
      />
      <TextField
        id="priority"
        select
        label="Select Priority"
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
        fullWidth
      >
        {priorities.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
    </form>
  );
};

TodoForm.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  priority: PropTypes.number,
  tags: PropTypes.arrayOf(PropTypes.string),
};

export default React.forwardRef(TodoForm);
