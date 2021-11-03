import { FC } from 'react';
import DefaultLayout from '../../components/DefaultLayout';
import NotFoundPage from '../../components/NotFoundPage';
import Homepage from '../search-deezer/SearchDeezer';

export type RouteType = {
  label: string | FC;
  path: string;
  component: FC;
  layout: FC<any>;
};

export const ALL_ROUTES: RouteType[] = [
  {
    label: 'home',
    path: '/',
    layout: DefaultLayout,
    component: Homepage,
  },
  {
    label: 'Not found',
    path: '*',
    layout: DefaultLayout,
    component: NotFoundPage,
  },
];
