import styles from './Favorite.module.scss';
import PageTitle from '../PageTitle/PageTitle.js';

const Favorite = () => {
  return (
    <div>
      <PageTitle>FAVORITE</PageTitle>
      <p className={styles.subtitle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
    </div>
  )
}

export default Favorite;