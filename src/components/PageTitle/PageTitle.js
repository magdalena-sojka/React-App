import styles from './PageTitle.module.scss';

const PageTitle = propos => {
  return (
    <div>
      <h1 className={styles.title}>{propos.children}</h1>
    </div>
  )
}

export default PageTitle;