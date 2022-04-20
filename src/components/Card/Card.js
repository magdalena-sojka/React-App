import styles from './Card.module.scss';
import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import { toggleFavorite } from '../../redux/cardsReducer.js';
import { removeCard } from '../../redux/cardsReducer.js';

const Card = props => {

  const toggle = e => {
    e.preventDefault()
    dispatch(toggleFavorite( props.id ))
  }

  const remove = e => {
    e.preventDefault()
    dispatch(removeCard( props.id ))
  }

  const dispatch = useDispatch()

  return (
    <li className={styles.card}>{props.title}
      <div>
        <button className={clsx("fa fa-star-o", styles.button, props.isFavorite && styles.isActive)} onClick={toggle} ></button>
        <button className={clsx("fa fa-trash", styles.button)} onClick={remove} ></button>
      </div>  
    </li>
  );
};

export default Card;