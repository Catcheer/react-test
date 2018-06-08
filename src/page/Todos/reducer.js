const todo = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        id: action.id,
        content: action.content,
        done: false
      };
    case "TOGGLE_TODO":
      if (state.id !== action.id) {
        return state;
      }
      return {
        ...state,
        done: !state.done
      };
    default:
      return state;
  }
};

export const todos = (state, action) => {
  const { type } = action;
  switch (type) {
    case "ADD_TODO":
      return [...state, todo(undefined, action)];
      case "TOGGLE_TODO":
       return state.map(t=>{
            return todo(t,action)
      })
    default:
      return state;
  }
};
