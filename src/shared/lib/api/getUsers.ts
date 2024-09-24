import { USERS_LIMIT } from 'shared/constants/global';
import { User } from 'shared/types';

type GetUsers = {
  limit: number;
  skip: number;
  total: number;
  users: User[];
};

export const getUsers = async (
  page?: number
): Promise<GetUsers | undefined> => {
  try {
    let url = `https://dummyjson.com/users?limit=${USERS_LIMIT}`;
    if (page && page !== 1) {
      url += `&skip=${page * USERS_LIMIT}`;
    }
    const response = await fetch(url);
    const data: GetUsers = await response.json();

    return data;
  } catch (e) {
    let message = 'Unexpected error';

    if (e instanceof Error) {
      message = e.message;
    }
    console.error(message);
  }
};
