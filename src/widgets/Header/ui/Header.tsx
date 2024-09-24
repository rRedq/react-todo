import { Link, useLocation } from 'react-router-dom';
import style from './Header.module.scss';
import { Path } from 'shared/types';

export const Header = () => {
  const { pathname } = useLocation();
  const path = pathname.slice(1);

  return (
    <div className={style.header}>
      <Link
        to={Path.MAIN}
        className={pathname === Path.MAIN ? style.active : style.link}
      >
        main
      </Link>
      <Link
        to={Path.TODO}
        className={path === Path.TODO ? style.active : style.link}
      >
        todo list
      </Link>
      <Link
        to={Path.PROFILE}
        className={path === Path.PROFILE ? style.active : style.link}
      >
        profile list
      </Link>
    </div>
  );
};
