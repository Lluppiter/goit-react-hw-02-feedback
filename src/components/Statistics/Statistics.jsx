import styles from '../Statistics/Statistics.module.css';

export const Statistics = ({
  props: { good, neutral, bad, total, percentage },
}) => {
  return (
    <>
      <ul className={styles.statisticsList}>
        <li className={styles.text}>Good: {good}</li>
        <li className={styles.text}>Neutral: {neutral}</li>
        <li className={styles.text}>Bad: {bad}</li>
        <li className={styles.text}>Total: {total}</li>
        <li className={styles.text}>Positive feedback: {percentage}&#37;</li>
      </ul>
    </>
  );
};
