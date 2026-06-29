import styles from './Hero.module.css';

function Hero() {
  return (
    <section className={styles.hero}>
      <h1>Reliable, efficient delivery</h1>
      <h2>Powered by Technology</h2>
      <p>
        Our Artificial Intelligence powered tools use millions of project data points to ensure that
        your project is successful
      </p>
    </section>
  );
}

export default Hero;
