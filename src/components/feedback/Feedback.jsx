import { Component } from 'react';
import css from './Feedback.module.css';

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
 
  };

  clickBtnGood = () => {this.setState(prev => {return {good: prev.good + 1,}})}
  clickBtnNeutral = () => {this.setState(prev => {return {neutral: prev.neutral + 1,}})}
  clickBtnBad = () => {this.setState(prev => {return {bad: prev.bad + 1,}})}


  countTotalFeedback() {
    const total = Object.values(this.state).reduce((previousValue, number) => {
      return previousValue + number;
    }, 0);
    return total;
  }

  countPositiveFeedbackPercentage() {
    const total = this.countTotalFeedback();
    const {good} = this.state;
    return ((good/total) * 100).toFixed(1);
  }


  render() {
    const total = this.countTotalFeedback();
    return (
      <div>
        <h1>Please leave feedback</h1>
        <ul className={css.listBtn}>
          <li>
            <button type="button" className="btn btn_good" onClick={this.clickBtnGood}>
              Good
            </button>
          </li>
          <li>
            <button type="button" className="btn btn_neutral" onClick={this.clickBtnNeutral}>Neutral</button>
          </li>
          <li>
            <button type="button" className="btn btn_bad" onClick={this.clickBtnBad}>Bad</button>
          </li>
        </ul>
        <h2>Statisticks</h2>
        <ul className={css.list}>
          <li>Good: {this.state.good}</li>
          <li>Neutral: {this.state.neutral}</li>
          <li>Bad: {this.state.bad}</li>
          <li>Total: {total}</li>
          <li>Positive feedback: {this.countPositiveFeedbackPercentage()}</li>
        </ul>
      </div>
    );
  }
}

export default Feedback;
