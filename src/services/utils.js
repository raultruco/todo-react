const priorityComparer = (a, b) => a.priority > b.priority;

export const addTodoSorted = (todos, newItem) => {
  if (!todos) {
    return [];
  }

  return [...todos, newItem].sort(priorityComparer);
};

export const updateTodoSorted = (todos, newItem) => {
  if (!todos) {
    return [];
  }

  return todos.map((item) => {
    if (item.id === newItem.id) {
      return newItem;
    }
    return item;
  }).sort(priorityComparer);
};
