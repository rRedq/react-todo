import { ReactNode, useState } from 'react';
import { DEFAULT_USER_ID } from 'shared/constants/global';
import { UserIdContext, UserIdUpdateContext } from 'shared/hooks';
import { getLocalState } from 'shared/lib';

type UserProviderProps = {
  children: ReactNode;
};

export const UserProvider = ({ children }: UserProviderProps) => {
  const [userId, setUserId] = useState<number>(
    getLocalState() || DEFAULT_USER_ID
  );

  return (
    <UserIdContext.Provider value={userId}>
      <UserIdUpdateContext.Provider value={setUserId}>
        {children}
      </UserIdUpdateContext.Provider>
    </UserIdContext.Provider>
  );
};
