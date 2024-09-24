import { ReactNode } from 'react';
import { PageProvider } from '../PageProvider/PageProvider';
import { TodoProvider } from '../TodoProvider/TodoProvider';
import { UserProvider } from '../UserProvider/UserProvider';

type Props = {
  children: ReactNode;
};
export const CoreProvider = ({ children }: Props) => {
  return (
    <UserProvider>
      <TodoProvider>
        <PageProvider>{children}</PageProvider>
      </TodoProvider>
    </UserProvider>
  );
};
