import { Link, useLocation } from 'react-router-dom';
import RouterOutlet from '../RouterOutlet/RouterOutlet';
import React, { useEffect, useState } from 'react';
import useAppRoutes from '../../../App.Routing';

import './Layout.scss';

const Layout = () => {
  const routes = useAppRoutes();
  const location = useLocation();

  const [currentTab, setCurrentTab] = useState('');

  useEffect(() => {
    setCurrentTab(routes.find(route => route.config.path === `/${location.pathname.split('/')[1]}`)?.name || '');
  }, [routes, location.pathname]);

  return (
    <div className="App">
      <header className="App-header">
        <ul className="App-nav">
          {routes.map(module => (
            <li key={module.name} className={currentTab === module.name ? 'active' : ''}>
              <Link to={module.config.path} onClick={() => setCurrentTab(module.name)}>{module.name}</Link>
            </li>
          ))}
        </ul>
      </header>

      <div className="App-content">
        <RouterOutlet routes={routes} />
      </div>
    </div>
  );
};

export default Layout;
