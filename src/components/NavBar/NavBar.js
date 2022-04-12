import styles from './NavBar.module.scss';
import Container from '../Container/Container.js';

const NavBar = () => {
  return (
    <nav>
      <Container>
      <div className={styles.wrapper}> 
        <a href ="/"><span className={'fa fa-list'} /></a>
        <ul className={styles.navlist}>
          <li className={styles.navlink}><a href="/">Home</a></li>
          <li className={styles.navlink}><a href="/favorite">Favorite</a></li>
          <li className={styles.navlink}><a href="/about">About</a></li>
        </ul>
      </div>   
      </Container>
    </nav>
  )
}

export default NavBar;