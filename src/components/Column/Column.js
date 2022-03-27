import styles from './Column.module.scss';
import Card from '../Card/Card.js';
import CardForm from '../CardForm/CardForm.js';

const Column = propos => {
  return (<article className={styles.column}>
              <h2 className={styles.title}><span className={styles.icon + ' fa fa-' + propos.icon} />{propos.title}</h2>
              <ul className={styles.cards}>
                {propos.cards.map(card => <Card key={card.id} title={card.title} />)}
              </ul>
              <CardForm columnId={propos.id} action={propos.action} />
            </article>);
}

export default Column;