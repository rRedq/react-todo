import { Pagination } from 'features/Pagination';
import { usePage, useTodo } from 'shared/hooks';
import { TodoList } from 'widgets/TodoList';
import style from './TodoPage.module.scss';
import { useEffect, useState } from 'react';
import { Todo } from 'shared/types';
import { DEFAULT_PAGE, LIMIT_ON_PAGE } from 'shared/constants/global';

export const TodoPage = () => {
  const todoList = useTodo();
  const [displayedList, setDisplayedList] = useState<Todo[]>();
  const { page: initialPage, setPage } = usePage();
  const [currentPage, setCurrentPage] = useState<number>(initialPage);
  const pageCount = Math.ceil(todoList.length / LIMIT_ON_PAGE) || DEFAULT_PAGE;

  const changePage = (page: number): void => setCurrentPage(page);

  useEffect(() => {
    const startIndex = (currentPage - 1) * LIMIT_ON_PAGE;
    const endIndex = startIndex + LIMIT_ON_PAGE;
    setDisplayedList(todoList.slice(startIndex, endIndex));

    return () => {
      setPage(currentPage);
    };
  }, [todoList, currentPage]);

  return (
    <>
      {displayedList && (
        <div className={style.todoPage}>
          <TodoList todoList={displayedList} />
          <Pagination
            pageCount={pageCount}
            changePage={changePage}
            currentPage={currentPage}
          />
        </div>
      )}
    </>
  );
};
