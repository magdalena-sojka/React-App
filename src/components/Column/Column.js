import styles from './Column.module.scss';
import Card from '../Card/Card.js';
import CardForm from '../CardForm/CardForm.js';
import { useSelector } from 'react-redux';

const Column = propos => {

  const searchString = useSelector(state => state.searchString);
  
  const cards = useSelector(state => state.cards).filter(card => card.columnId === propos.id && card.title.toLowerCase().includes(searchString.searchString.toLowerCase()));
  
  return (
    <article className={styles.column}>
      <h2 className={styles.title}><span className={styles.icon + ' fa fa-' + propos.icon} />{propos.title}</h2>
      <ul className={styles.cards}>
        {cards.map(card => <Card key={card.id} title={card.title} />)}
      </ul>
      <CardForm columnId={propos.id} />
    </article>);
}

export default Column;