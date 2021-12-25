import { Todo } from "../interfaces/interfaces"
import { TodoContext } from '../context/TodoContext';
import { useContext } from "react";
import { useTodos } from '../hooks/useTodos';

interface todoItemProps {
    todo: Todo
}

export const TodoItem = ( { todo }: todoItemProps ) => {

    // const { toggleTodo } = useContext( TodoContext);

    const { toggleTodo } = useTodos();

    // const handleDbClick = () => {
    //     toggleTodo( todo.id );
    // }

    return (
        <li
        style={{
            cursor:'pointer',
            textDecoration: todo.completed ? 'line-through' : ''
        }}
        onDoubleClick={ ()=>toggleTodo( todo.id ) }>
            {todo.desc}
        </li>
    )
}
