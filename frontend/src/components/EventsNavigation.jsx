import { NavLink } from 'react-router-dom';
import classes from './EventsNavigation.module.css';

function EventsNavigation() {
  const isActiveClass = ({ isActive }) => isActive ? classes['active'] : null
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink to="/events" className={isActiveClass} end>All Events</NavLink>
          </li>
          <li>
            <NavLink to="/events/new" className={isActiveClass}>New Event</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default EventsNavigation;
