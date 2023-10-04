import css from './FeedbackOptions.module.css';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <div className={css.container}>
      {options.map(option => (
        <button
          name={option}
          key={option}
          onClick={onLeaveFeedback}
          type="button"
          className={css.button}
        >
          {option}
        </button>
      ))}
    </div>
  );
}
