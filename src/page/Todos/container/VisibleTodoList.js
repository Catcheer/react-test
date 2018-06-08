
import { connect } from "react-redux";
import TodoList from "../component/TodoList";
import { toggleTodo } from "../action";

const mapStateToProps = (state, ownProps) => ({
  todos: state
});
const mapDispatchToProps=(dispatch)=>({
    onTodoClick:(id)=>{
        dispatch(toggleTodo(id))
    }
})


const VisibilityState=connect(mapStateToProps,mapDispatchToProps)(TodoList)

export default VisibilityState