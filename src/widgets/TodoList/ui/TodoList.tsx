import { Todo } from 'shared/types';
import { TodoItem } from './TodoItem/TodoItem';
import style from './TodoList.module.scss';
import { FormEvent, useState } from 'react';
import { useTodoCRUD } from './useTodoCRUD/useTodoCRUD';

type Props = {
  todoList: Todo[];
};

export const TodoList = ({ todoList }: Props) => {
  const [todoText, setTodoText] = useState<string>('');
  const { createTodo, changeIsCompleted, deleteTodo } = useTodoCRUD();

  const onSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!todoText?.trim()) {
      return;
    }
    createTodo(todoText);
    setTodoText('');
  };

  return (
    <div className={style.todoList}>
      <form onSubmit={onSubmitHandler}>
        <input
          type="text"
          value={todoText}
          onChange={(e) => setTodoText(e.target.value)}
          className="common-input"
        />
        <button type="submit" className="common-btn">
          Добавить задачу
        </button>
      </form>
      <table className={style.table}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Todo</th>
            <th>Completed</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {todoList &&
            todoList.map((item) => (
              <TodoItem
                todoItem={item}
                key={item.id}
                deleteTodo={deleteTodo}
                changeIsCompleted={changeIsCompleted}
              />
            ))}
        </tbody>
      </table>
    </div>
  );
};
