import { useState } from 'react';

const Header = () => <h1>GIVE FEEDBACK</h1>;

const Button = (props) => <button onClick={props.handleClick}>{props.text}</button>;

const StatisticLine = (props) => (
  <tr>
    <td>{props.text}</td>
    <td>{props.value}</td>
  </tr>
);

const Statistics = (props) => {
  const { good, neutral, bad } = props;
  const total = good + neutral + bad;
  const average = total === 0 ? 0 : (good * 1 + bad * -1) / total;
  const positive = total === 0 ? 0 : (good * 100) / total;

  if (total === 0) {
    return (
      <div>
        No feedback given
      </div>
    );
  }

  return (
    <div>
      <h2>STATISTICS</h2>
      <table>
        <tbody>
          <StatisticLine text="GOOD" value={good} />
          <StatisticLine text="NEUTRAL" value={neutral} />
          <StatisticLine text="BAD" value={bad} />
          <StatisticLine text="ALL" value={total} />
          <StatisticLine text="AVERAGE" value={average} />
          <StatisticLine text="POSITIVE" value={`${positive} %`} />
        </tbody>
      </table>
    </div>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGood = () => setGood(good + 1);
  const handleNeutral = () => setNeutral(neutral + 1);
  const handleBad = () => setBad(bad + 1);

  return (
    <div>
      <Header />
      <Button text="GOOD" handleClick={handleGood} />
      <Button text="NEUTRAL" handleClick={handleNeutral} />
      <Button text="BAD" handleClick={handleBad} />

      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;
