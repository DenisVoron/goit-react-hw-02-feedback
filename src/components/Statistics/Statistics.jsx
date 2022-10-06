import css from './Statistics.module.css';


export const Statistics = ({good, neutral, bad}) => {
    return (
        <div>
            <h2 className={css.title}>Statistics</h2>
            <ul>
                <li>
                    <p>
                        Good: <span>{good}</span>
                    </p>
                </li>
                <li>
                    <p>
                        Neutral: <span>{neutral}</span>
                    </p>
                </li>
                <li>
                    <p>
                        Bad: <span>{bad}</span>
                    </p>
                </li>
            </ul>
        </div>
    );
}