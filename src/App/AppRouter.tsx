import React from 'react';
import { Route, RouteProps } from 'react-router-dom';

import { MainView, ItemView } from '../views';
import { MAIN_VIEW, ITEM_VIEW } from '../endpoints';

type TRoot = {
  key: string;
  component: RouteProps['component'];
  path: string;
  exact?: boolean;
};

export const roots: TRoot[] = [
  {
    key: 'main',
    component: MainView,
    path: MAIN_VIEW,
    exact: true,
  },
  {
    key: 'item',
    component: ItemView,
    path: ITEM_VIEW,
    exact: true,
  },
];

export function mapRoots(rootsList: TRoot[]): JSX.Element[] {
  return rootsList.map(({ key, exact, path, component }) => (
    <Route key={key} path={path} component={component} exact={exact} />
  ));
}

export default function AppRouter(): JSX.Element {
  return <>{mapRoots(roots)}</>;
}
