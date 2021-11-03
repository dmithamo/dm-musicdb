import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ALL_ROUTES } from './_allRoutes';

const Routes: React.FC = () => (
  <BrowserRouter>
    <Switch>
      {ALL_ROUTES.map(({ path, layout: Layout, component: Component }) => (
        <Route
          exact
          strict
          path={path}
          render={() => (
            <Layout>
              <Component />
            </Layout>
          )}
        />
      ))}
    </Switch>
  </BrowserRouter>
);

export default Routes;
