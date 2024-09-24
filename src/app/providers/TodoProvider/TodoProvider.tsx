import { ReactNode, useState } from 'react';
import { TodoContext, TodoUpdateContext } from 'shared/hooks';
import { Todo } from 'shared/types';

type TodoProviderProps = {
  children: ReactNode;
};

export const TodoProvider = ({ children }: TodoProviderProps) => {
  const [todo, setTodo] = useState<Todo[]>([]);

  return (
    <TodoContext.Provider value={todo}>
      <TodoUpdateContext.Provider value={setTodo}>
        {children}
      </TodoUpdateContext.Provider>
    </TodoContext.Provider>
  );
};
