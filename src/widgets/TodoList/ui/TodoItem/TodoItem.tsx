import { Todo } from 'shared/types';
import style from './TodoItem.module.scss';

type Props = {
  todoItem: Todo;
  deleteTodo: (id: number) => void;
  changeIsCompleted: (id: number) => void;
};

export const TodoItem = ({
  todoItem,
  deleteTodo,
  changeIsCompleted,
}: Props) => {
  const { id, todo, completed } = todoItem;

  return (
    <tr className={style.item}>
      <td>{id}</td>
      <td className={style.text}>{todo}</td>
      <td>
        <input
          type="checkbox"
          onClick={() => changeIsCompleted(id)}
          defaultChecked={completed}
        />
      </td>
      <td>
        <button className="common-btn" onClick={() => deleteTodo(id)}>
          Удалить
        </button>
      </td>
    </tr>
  );
};
