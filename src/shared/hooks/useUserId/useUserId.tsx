import { createContext, useContext } from 'react';
import { DEFAULT_USER_ID } from 'shared/constants/global';

const UserIdContext = createContext<number>(DEFAULT_USER_ID);

const useUserId = () => {
  return useContext(UserIdContext);
};

export { useUserId, UserIdContext };
