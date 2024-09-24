import { ReactNode, useState } from 'react';
import { PageContext } from 'shared/hooks';

type PageProviderProps = {
  children: ReactNode;
};

export const PageProvider = ({ children }: PageProviderProps) => {
  const [page, setPage] = useState<number>(1);

  return (
    <PageContext.Provider value={{ page, setPage }}>
      {children}
    </PageContext.Provider>
  );
};
