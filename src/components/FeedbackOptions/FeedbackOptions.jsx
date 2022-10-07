import css from './FeedbackOptions.module.css';

export const Feedback = ({ options, onLeaveFeedback }) => {
    return (
        <ul className={css.list}>
            {options.map(option => {
                //console.log(option);
                return (
                    <li key={option}>
                        <button type="button" onClick={onLeaveFeedback} name={option}>
                            {option}
                        </button>
                    </li>
                );
            })}
        </ul>
    );
};