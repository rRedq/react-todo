import { createContext, Dispatch, SetStateAction, useContext } from 'react';

type Props = {
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
};

const PageContext = createContext<Props | undefined>(undefined);

const usePage = () => {
  const context = useContext(PageContext);
  if (!context) throw new Error('PageContext is undefined');

  return context;
};

export { usePage, PageContext };
