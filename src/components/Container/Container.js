import styles from './Container.module.scss';

const Container = propos => {
  return (<div className={styles.container}>{propos.children}</div>)};

export default Container;