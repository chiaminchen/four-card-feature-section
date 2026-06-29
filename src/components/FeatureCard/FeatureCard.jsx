import styles from './FeatureCard.module.css';

function FeatureCard({ title, description, color, icon }) {
  return (
    <article
      className={styles.featureCard}
      style={{ borderTop: `5px solid var(--color-${color})` }}
    >
      <div>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
      </div>
      <img className={styles.icon} src={icon} alt="" />
    </article>
  );
}

export default FeatureCard;
