import { Path } from 'shared/types';
import { createBrowserRouter } from 'react-router-dom';
import { Main } from 'pages/Main/Main';
import { ProfileList } from 'widgets/ProfileList';
import { TodoPage } from 'pages/TodoPage/TodoPage';

export const router = createBrowserRouter([
  {
    path: Path.MAIN,
    element: <Main />,
    children: [
      {
        path: Path.TODO,
        element: <TodoPage />,
      },
      {
        path: Path.PROFILE,
        element: <ProfileList />,
      },
    ],
  },
]);
