import { FC } from 'react';
import DefaultLayout from '../../components/DefaultLayout';
import NotFoundPage from '../../components/NotFoundPage';
import ArtistHomepage from '../ArtistHomepage';
import SearchDeezer from '../SearchDeezer';

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
    component: SearchDeezer,
  },
  {
    label: 'home',
    path: '/artist/:artistID',
    layout: DefaultLayout,
    component: ArtistHomepage,
  },
  {
    label: 'Not found',
    path: '*',
    layout: DefaultLayout,
    component: NotFoundPage,
  },
];
