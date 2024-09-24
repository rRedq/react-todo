import { Link } from 'react-router-dom';
import style from './Header.module.scss';
import { Path } from 'shared/types';

export const Header = () => {
  return (
    <div className={style.header}>
      <Link to={Path.MAIN} className={style.link}>
        main
      </Link>
      <Link to={Path.TODO} className={style.link}>
        todo list
      </Link>
      <Link to={Path.PROFILE} className={style.link}>
        profile list
      </Link>
    </div>
  );
};
