import { useEffect, useState } from 'react';
import { getUsers } from 'shared/lib';
import { User } from 'shared/types';
import { Profile } from './Profile/Profile';
import style from './ProfileList.module.scss';
import { AddNewProfile } from 'features/AddNewProfile';
import { DEFAULT_PAGE, USERS_LIMIT } from 'shared/constants/global';
import { Pagination } from 'features/Pagination';

export const ProfileList = () => {
  const [users, setUsers] = useState<User[]>();
  const [pages, setPages] = useState<number>(DEFAULT_PAGE);
  const [currentPage, setCurrentPage] = useState<number>(DEFAULT_PAGE);

  const addNewUser = (user: User): void => {
    const newUsers = users ? [...users, user] : [user];
    setUsers(newUsers);
  };

  const changePage = (page: number): void => {
    updateUsers(page);
    setCurrentPage(page);
  };

  const updateUsers = async (page?: number): Promise<void> => {
    const result = await getUsers(page);
    if (result) {
      setUsers(result.users);
      setPages(Math.floor(result.total / USERS_LIMIT));
    }
  };

  useEffect(() => {
    (async () => updateUsers())();
  }, []);

  return (
    <>
      <AddNewProfile addNewUser={addNewUser} />
      <div className={style.profileList}>
        <table className={style.table}>
          <thead>
            <tr>
              <th>username</th>
              <th>name</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users &&
              users.map((user) => <Profile user={user} key={user.id} />)}
          </tbody>
        </table>
        <Pagination
          pageCount={pages}
          changePage={changePage}
          currentPage={currentPage}
        />
      </div>
    </>
  );
};
