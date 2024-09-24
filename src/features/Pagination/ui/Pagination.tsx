import style from './Pagination.module.scss';
type Props = {
  pageCount: number;
  changePage: (page: number) => void;
  currentPage: number;
};

export const Pagination = ({ pageCount, changePage, currentPage }: Props) => {
  const pages = Array.from({ length: pageCount }, (_, index) => index + 1);

  return (
    <div className={style.pagination}>
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => changePage(page)}
          className={currentPage === page ? style.active : style.btn}
        >
          {page}
        </button>
      ))}
    </div>
  );
};
