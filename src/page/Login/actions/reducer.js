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

let userInfo={}
 const loginReducer = (state=userInfo, action) => {
    const { type } = action;
    switch (type) {
      case "SUBMIT_LOGIN":
        return {...login(undefined, action)}
      default:
        return state;
    }
  };

  export default loginReducer