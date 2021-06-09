import PropTypes from 'prop-types';

import s from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <div className={s.container}>
    <p className={s.goodFeedbackStyle}>
      Good: <span>{good}</span>
    </p>
    <p className={s.neutralFeedbackStyle}>
      Neutral: <span>{neutral}</span>
    </p>
    <p className={s.badFeedbackStyle}>
      Bad: <span>{bad}</span>
    </p>
    <p className={s.total}>
      Total: <span>{total}</span>
    </p>
    <p className={s.percentage}>
      Positive feedback: <span>{positivePercentage}</span>%
    </p>
  </div>
);

Statistics.defaultProps = {
  good: 0,
  neutral: 0,
  bad: 0,
  total: 0,
  positivePercentage: 0,
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
