import React from 'react';
import { Link } from 'react-router';
import routes from '../../routes';
import './nav.scss';

const Nav = (/* { title  } */) => (
  <nav className="navbar navbar-full navbar-dark bg-inverse">
    <div className="nav navbar-nav">
      {/* routes.map(r => <Link className="nav-item nav-link" key={r.path} to={r.path}>{r.title}</Link>) */}
      {
        routes.map((route) => {
          if (route && route.path.length > 1) {
            return (<Link className="nav-item nav-link" key={route.path} to={route.path}>{route.title}</Link>)
          }
        })
      }
    </div>
  </nav>
);

Nav.displayName = 'Nav';
export default Nav;
