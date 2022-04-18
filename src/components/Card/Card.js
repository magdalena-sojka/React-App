import styles from './Card.module.scss';
import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import { toggleFavorite } from '../../redux/store';

const Card = props => {

  const toggle = e => {
    e.preventDefault()
    dispatch(toggleFavorite( props.id ))
  }

  const dispatch = useDispatch()

  return (
    <li className={styles.card}>{props.title}
      <button className={clsx("fa fa-star-o", styles.button, props.isFavorite && styles.isActive)} onClick={toggle} ></button>
    </li>
  );
};

export default Card;