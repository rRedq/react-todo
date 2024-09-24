type Todo = {
  id: number;
  todo: string;
  completed: boolean;
  userId: number;
};

type User = {
  id: number;
  firstName: string;
  lastName: string;
  username: string;
};

export { type User, type Todo };
