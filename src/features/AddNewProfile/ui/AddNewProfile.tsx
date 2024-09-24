import { FormEvent, useState } from 'react';
import { User } from 'shared/types';
import style from './AddNewProfile.module.scss';

type Props = {
  addNewUser: (user: User) => void;
};
export const AddNewProfile = ({ addNewUser }: Props) => {
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [username, setUsername] = useState<string>('');

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!name?.trim() || !lastName?.trim() || !username?.trim()) {
      return;
    }

    const data: User = {
      lastName,
      firstName: name,
      username,
      id: Math.round(Math.random() * 10000000),
    };
    addNewUser(data);

    setName('');
    setLastName('');
    setUsername('');
    setShowForm(false);
  };

  if (!showForm) {
    return <button onClick={() => setShowForm(true)}>Добавить профиль</button>;
  }
  return (
    <form className={style.form} onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Имя пользователя"
        required
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="text"
        placeholder="Имя"
        required
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Фамилия"
        required
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      <button type="submit">Добавить</button>
    </form>
  );
};
