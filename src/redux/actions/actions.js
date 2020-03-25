export const add = (todo, parentId = 0) => {
  return {
    type: "ADD_TODO",
    payload: { todo: todo, parentId: parentId }
  };
};

export const modify = todo => {
  return {
    type: "MODIFY_TODO",
    payload: { todo }
  };
};

export const remove = id => {
  return {
    type: "REMOVE_TODO",
    payload: { id }
  };
};

export const getAll = () => {
  return {
    type: "GET_ALL_TODOS"
  };
};
