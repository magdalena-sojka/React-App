import styles from './About.module.scss';
import PageTitle from '../PageTitle/PageTitle.js';

const About = () => {
  return (
    <div>
      <PageTitle>ABOUT</PageTitle>
      <p className={styles.subtitle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
    </div>
  )
}

export default About;