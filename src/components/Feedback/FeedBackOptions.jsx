import styles from '../Feedback/FeedBackOptions.module.css';
export const FeedBackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      <div className={styles.buttonBlock}>
        {options.forEach(option => {
          if (option !== 'total' && option !== 'percentage') {
            return (
              <button
                name={option}
                key={option}
                onClick={onLeaveFeedback}
                className={styles.button}
              >
                {option}
              </button>
            );
          }
        })}
      </div>
    </>
  );
};
