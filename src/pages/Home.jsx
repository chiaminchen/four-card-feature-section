import styles from './Home.module.css';
import Hero from '../components/Hero/Hero';
import Features from '../components/Features/Features';

function Home() {
  return (
    <main className={styles.home}>
      <Hero />
      <Features />
    </main>
  );
}

export default Home;
