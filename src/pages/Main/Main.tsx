import { Outlet } from 'react-router-dom';
import style from './Main.module.scss';
import { Header } from 'widgets/Header';
import { usePage, useTodoUpdate, useUserId } from 'shared/hooks';
import { useEffect, useState } from 'react';
import { getData } from 'shared/lib';
import { DEFAULT_PAGE } from 'shared/constants/global';

export const Main = () => {
  const [userId, setUserId] = useState<number>();
  const updateTodoList = useTodoUpdate();
  const currentUserId = useUserId();
  const { setPage } = usePage();

  const updateTodo = async (id: number): Promise<void> => {
    const result = await getData(id);
    if (result) {
      updateTodoList(result);
      setPage(DEFAULT_PAGE);
    }
  };

  useEffect(() => {
    if (!currentUserId) {
      return;
    } else if (!userId || userId !== currentUserId) {
      setUserId(currentUserId);
      updateTodo(currentUserId);
    }
  }, [currentUserId]);

  return (
    <main className={style.main}>
      <Header />
      <Outlet />
    </main>
  );
};
