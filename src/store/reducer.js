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


//登陆

const login = (state, action) => {
  console.log('action',action)
  const { type } = action
  switch (type) {
    case "SUBMIT_LOGIN":
      return {
        userName:action.value.userName,
        password:action.value.password,
        loginStatue:true
      }
    default:
      return state
  }

}

export const reducer = (state, action) => {
  const { type } = action;
  switch (type) {
    case "ADD_TODO":
      return {
        ...state,
        todos: [...state.todos, todo(undefined, action)]
      };
    case "TOGGLE_TODO":
      return {
        ...state,
        todos: [...state.todos.map(t => {
          return todo(t, action)
        })]
      }
    case "SUBMIT_LOGIN":
      return {
        ...state,
        userInfo: {...login(undefined, action)}
      }
    default:
      return state;
  }
};


