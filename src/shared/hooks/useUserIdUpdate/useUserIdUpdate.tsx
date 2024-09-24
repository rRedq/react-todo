import { createContext, Dispatch, SetStateAction, useContext } from 'react';

const UserIdUpdateContext = createContext<
  Dispatch<SetStateAction<number>> | undefined
>(undefined);

const useUserIdUpdate = () => {
  const context = useContext(UserIdUpdateContext);
  if (!context) throw new Error('UserIdUpdateContext is undefined');

  return context;
};

export { useUserIdUpdate, UserIdUpdateContext };
