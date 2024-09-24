import { User } from 'shared/types';
import style from './Profile.module.scss';
import { useUserId, useUserIdUpdate } from 'shared/hooks';
import { setLocalState } from 'shared/lib';

type Props = {
  user: User;
};
export const Profile = ({ user }: Props) => {
  const { username, firstName, lastName, id } = user;
  const userId = useUserId();
  const newActiveUser = useUserIdUpdate();
  const isActiveUser = userId === id;

  const setActiveProfile = () => {
    newActiveUser(id);
    setLocalState(id);
  };

  return (
    <tr>
      <td className={isActiveUser ? style.active : null}>{username}</td>
      <td className={isActiveUser ? style.active : null}>
        {`${firstName} ${lastName}`}
      </td>
      <td>
        <button
          className="common-btn"
          disabled={isActiveUser}
          onClick={setActiveProfile}
        >
          Выбрать
        </button>
      </td>
    </tr>
  );
};
