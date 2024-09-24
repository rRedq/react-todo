import { FC } from 'react';
import './styles/global.scss';
import { RouterProvider } from 'react-router-dom';
import { CoreProvider, router } from './providers';

export const App: FC = () => {
  return (
    <CoreProvider>
      <RouterProvider router={router} />
    </CoreProvider>
  );
};
