import { useEffect, useState } from 'react';
import { useTodo, useTodoUpdate, useUserId } from 'shared/hooks';
import { Todo } from 'shared/types';

export const useTodoCRUD = () => {
  const todoList = useTodo();
  const updateTodoList = useTodoUpdate();
  const userId = useUserId();
  const [lastTodoId, setLastTodoId] = useState<number>(1);

  const createTodo = (todoText: string): void => {
    const newId = lastTodoId + 1;
    const newTodo: Todo = {
      todo: todoText,
      userId,
      completed: false,
      id: newId,
    };

    updateTodoList([...todoList, newTodo]);
  };

  const changeIsCompleted = (id: number): void => {
    const todoIndex = todoList.findIndex((todo) => todo.id === id);

    if (todoIndex !== -1) {
      const newTodoList: Todo[] = [
        ...todoList.slice(0, todoIndex),
        { ...todoList[todoIndex], completed: !todoList[todoIndex].completed },
        ...todoList.slice(todoIndex + 1),
      ];

      updateTodoList(newTodoList);
    }
  };

  const deleteTodo = (id: number): void => {
    updateTodoList([...todoList.filter((todo) => todo.id !== id)]);
  };

  useEffect(() => {
    const newId = todoList.length > 0 ? todoList[todoList.length - 1].id : 1;
    setLastTodoId(newId);
  }, [todoList]);

  return {
    deleteTodo,
    changeIsCompleted,
    createTodo,
  };
};
