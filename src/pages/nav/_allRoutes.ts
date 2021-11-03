import { FC } from 'react';
import DefaultLayout from '../../components/DefaultLayout';
import Logo from '../../components/Logo';
import Homepage from '../Homepage';

export type Route = {
  label: string | FC;
  path: string;
  component: FC;
  layout: FC<any>;
};

export const ALL_ROUTES: Route[] = [
  { label: Logo, path: '/', layout: DefaultLayout, component: Homepage },
];
