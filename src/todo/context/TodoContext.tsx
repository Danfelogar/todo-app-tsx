import { createContext } from "react";
import { TodoState } from '../interfaces/interfaces';

export type TodoContextProps = {
    todoState: TodoState,
    toggleTodo: (id: string) => void;
}

export const TodoContext = createContext<TodoContextProps>({} as TodoContextProps);

// "{} as TodoContextProps" para decirle a typeScript que no se queje que eventualmente va a ser todo del tipo de interface o type que estoy definiendo