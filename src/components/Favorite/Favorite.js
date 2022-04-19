import styles from './Favorite.module.scss';
import PageTitle from '../PageTitle/PageTitle.js';
import Card from '../Card/Card.js';
import { useSelector } from 'react-redux';
import { getFavorite } from '../../redux/cardsReducer.js';

const Favorite = () => {

  const favoriteCards = useSelector(getFavorite);

  if (favoriteCards.length === 0) 
    return ( 
      <div>
        <PageTitle>Favorite</PageTitle>
        <p className={styles.subtitle}>No cards</p>
      </div>
    );

  return (
    <div>
      <PageTitle>Favorite</PageTitle>
      <div className={styles.wrapperFavorite}>
        <div className={styles.column}>
          <ul className={styles.cards}>
            { favoriteCards.map(card => <Card key={card.id} id={card.id} isFavorite={card.isFavorite} title={card.title} />) }
          </ul>
        </div>
      </div>  
    </div>
  )
}

export default Favorite;