import styles from './Column.module.scss';

const Column = propos => {
  return (<article className={styles.column}>
              <h2 className={styles.title}><span className={styles.icon + ' fa fa-' + propos.icon} />{propos.title}</h2>
            </article>);
}

export default Column;