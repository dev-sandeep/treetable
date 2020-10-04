export interface TodoInterface{
    id: string;
    name: string;
    isCompleted: boolean;
}

export interface HeaderInterface{
    title: string;
}

export interface TodoFormInterface{
    todos: TodoInterface[],
    handleTodoCreate: (todo: TodoInterface) => void//return type is void
}

export interface TodoListInterface{
    handleTodoUpdate:(Event: React.ChangeEvent<HTMLInputElement>, id:string) => void;
    handleTodoRemove: (id:string) => void;
    handleTodoComplete: (id:string) => void;
    todos: TodoInterface
}

export interface TodoItemInterface{
    handleTodoUdate: (event: React.ChangeEvent<HTMLInputElement>, id:string) => void;
    handleTodoRemove: (id:string) => void;
    handleTodoComplete: (id:string) =>void;
    todo: TodoInterface;
}