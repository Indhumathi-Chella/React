import { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { fetchTodo } from "./todoSlice";


function ListTodo(){
    const dispatch = useDispatch();
    const status = useSelector(state => state.todo.status);
    const items  = useSelector(state => state.todo.items);
    const error = useSelector(state => state.todo.error);

    useEffect(() =>{
        if(status === "idle"){
            dispatch(fetchTodo());
        }
    },[status,dispatch]);

    if(status === "loading")
        return <p>Loading todo..</p> ;

    if(status === "error")
        return <p>{error}</p> ;


    return(
        <div>
            <p>Todo list</p>
            <ol>
                {items.slice(0,10).map(item =>(
                    <li key={item.id}><b>{item.title}</b> - {item.completed ? "Done" :"Pending" }</li>
                ))}
            </ol>
        </div>
    );

}

export default ListTodo;