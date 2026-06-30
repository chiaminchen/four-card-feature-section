import styles from './Features.module.css';
import { featuresData } from '../../data/features';
import FeatureCard from '../FeatureCard/FeatureCard';

function Features() {
  return (
    <section className={styles.features}>
      <h2 className="sr-only">Features List</h2>
      {featuresData.map(feature => (
        <FeatureCard
          title={feature.title}
          description={feature.description}
          color={feature.color}
          icon={feature.icon}
          key={feature.title}
        />
      ))}
    </section>
  );
}

export default Features;
