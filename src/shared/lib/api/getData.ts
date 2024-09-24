import { Todo } from 'shared/types';

type GetData = {
  limit: number;
  skip: number;
  todos: Todo[];
  total: number;
};
export const getData = async (userId: number): Promise<Todo[] | undefined> => {
  try {
    const response = await fetch(`https://dummyjson.com/todos/user/${userId}`);
    const data: GetData = await response.json();
    return data.todos;
  } catch (e) {
    let message = 'Unexpected error';

    if (e instanceof Error) {
      message = e.message;
    }
    console.error(message);
  }
};
