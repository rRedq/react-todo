import { createContext, Dispatch, SetStateAction, useContext } from 'react';
import { Todo } from 'shared/types';

const TodoUpdateContext = createContext<
  Dispatch<SetStateAction<Todo[]>> | undefined
>(undefined);

const useTodoUpdate = () => {
  const context = useContext(TodoUpdateContext);
  if (!context) throw new Error('useTodoUpdateContext is undefined');

  return context;
};

export { useTodoUpdate, TodoUpdateContext };
