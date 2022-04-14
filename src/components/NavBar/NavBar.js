import styles from './NavBar.module.scss';
import Container from '../Container/Container.js';
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
      <Container>
      <div className={styles.wrapper}> 
        <Link to="/"><span className={'fa fa-list'} /></Link>
        <ul>
          <li className={styles.navlink}><NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined} to="/">Home</NavLink></li>
          <li className={styles.navlink}><NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined} to="/favorite">Favorite</NavLink></li>
          <li className={styles.navlink}><NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined} to="/about">About</NavLink></li>
        </ul>
      </div>   
      </Container>
    </nav>
  )
}

export default NavBar;