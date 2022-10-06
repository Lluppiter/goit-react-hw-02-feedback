import styles from '../Section/Section.module.css';

export const Section = ({ title, children }) => {
  return (
    <section className={styles.section}>
      {<h2 className={styles.title}>{title}</h2>}
      {children}
    </section>
  );
};
