import { useState } from 'react';
import css from './Feedback.module.css';

export const Feedback = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const clickBtnGood = () => {
    setGood(good + 1);
  };
  const clickBtnNeutral = () => {
    setNeutral(neutral + 1);
  };
  const clickBtnBad = () => {
    setBad(bad + 1);
  };

  return (
    <div>
      <h1>Please leave feedback</h1>
      <ul className={css.listBtn}>
        <li>
          <button type="button" className="btn btn_good" onClick={clickBtnGood}>
            Good
          </button>
        </li>
        <li>
          <button
            type="button"
            className="btn btn_neutral"
            onClick={clickBtnNeutral}
          >
            Neutral
          </button>
        </li>
        <li>
          <button type="button" className="btn btn_bad" onClick={clickBtnBad}>
            Bad
          </button>
        </li>
      </ul>
      <h2>Statisticks</h2>
      <ul className={css.list}>
        <li>Good: {good}</li>
        <li>Neutral: {neutral}</li>
        <li>Bad: {bad}</li>
        {/* <li>Total: {total}</li> */}
        <li>Positive feedback: {this.countPositiveFeedbackPercentage()}</li>
      </ul>
    </div>
  );
};

// class Feedback extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,

//   };

//   clickBtnGood = () => {this.setState(prev => {return {good: prev.good + 1,}})}
//   clickBtnNeutral = () => {this.setState(prev => {return {neutral: prev.neutral + 1,}})}
//   clickBtnBad = () => {this.setState(prev => {return {bad: prev.bad + 1,}})}

//   countTotalFeedback() {
//     const total = Object.values(this.state).reduce((previousValue, number) => {
//       return previousValue + number;
//     }, 0);
//     return total;
//   }

//   countPositiveFeedbackPercentage() {
//     const total = this.countTotalFeedback();
//     const {good} = this.state;
//     return ((good/total) * 100).toFixed(1);
//   }

//   render() {
//     const total = this.countTotalFeedback();
//     return (
//       <div>
//         <h1>Please leave feedback</h1>
//         <ul className={css.listBtn}>
//           <li>
//             <button type="button" className="btn btn_good" onClick={this.clickBtnGood}>
//               Good
//             </button>
//           </li>
//           <li>
//             <button type="button" className="btn btn_neutral" onClick={this.clickBtnNeutral}>Neutral</button>
//           </li>
//           <li>
//             <button type="button" className="btn btn_bad" onClick={this.clickBtnBad}>Bad</button>
//           </li>
//         </ul>
//         <h2>Statisticks</h2>
//         <ul className={css.list}>
//           <li>Good: {this.state.good}</li>
//           <li>Neutral: {this.state.neutral}</li>
//           <li>Bad: {this.state.bad}</li>
//           <li>Total: {total}</li>
//           <li>Positive feedback: {this.countPositiveFeedbackPercentage()}</li>
//         </ul>
//       </div>
//     );
//   }
// }

// export default Feedback;
