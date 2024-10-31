import { NavLink } from 'react-router-dom';

import classes from './MainNavigation.module.css';
import NewsletterSignup from './NewsletterSignup';

// The array of entries, 
// entry[0]: url - entry[1]: link title
const navLinks = [
  ['/', 'Home'],
  ['/events', 'Events'],
  ['/newsletter', 'Newsletter'],
  ['/authen', 'Authenticate'],
]

function MainNavigation() {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          {
            navLinks.map(li =>
              <li>
                <NavLink
                  to={li[0]}
                  className={({ isActive }) =>
                    isActive ? classes.active : undefined
                  }
                  end
                >
                  {li[1]}
                </NavLink>
              </li>
            )
          }
        </ul>
      </nav>
      <NewsletterSignup />
    </header>
  );
}

export default MainNavigation;