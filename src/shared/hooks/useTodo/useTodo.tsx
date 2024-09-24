import { createContext, useContext } from 'react';
import { Todo } from 'shared/types';

const TodoContext = createContext<Todo[] | undefined>(undefined);

const useTodo = () => {
  const context = useContext(TodoContext);
  if (!context) throw new Error('TodoContext is undefined');

  return context;
};

export { useTodo, TodoContext };
