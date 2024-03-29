import { useState } from 'react';

const Header = () => <h1>ANECDOTE OF THE DAY</h1>;

const AnecdoteDisplay = ({ anecdote, votes }) => (
  <div>
    <p>{anecdote}</p>
    <p>Has {votes} votes</p>
  </div>
);

const VoteButton = ({ handleClick }) => (
  <button onClick={handleClick}>Vote</button>
);

const NextButton = ({ handleClick }) => (
  <button onClick={handleClick}>Next anecdote</button>
);

const BestAnecdote = ({ bestAnecdote }) => (
  <div>
    <h1>ANECDOTE WITH MOST VOTES</h1>
    <p>{bestAnecdote}</p>
  </div>
);

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast is to go well.',
  ];

  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0));
  const [bestAnecdote, setBestAnecdote] = useState("No anecdotes voted");

  const getRandomAnecdote = () => {
    const randomIndex = Math.floor(Math.random() * anecdotes.length);
    setSelected(randomIndex);
  };

  const voteAnecdote = () => {
    const newVotes = [...votes];
    newVotes[selected] += 1;
    setVotes(newVotes);

    const maxVotes = Math.max(...newVotes);
    const indexOfMaxVotes = newVotes.indexOf(maxVotes);

    setBestAnecdote(anecdotes[indexOfMaxVotes]);
  };

  return (
    <div>
      <Header />
      <AnecdoteDisplay anecdote={anecdotes[selected]} votes={votes[selected]} />
      <VoteButton handleClick={voteAnecdote} />
      <NextButton handleClick={getRandomAnecdote} />
      <BestAnecdote bestAnecdote={bestAnecdote} />
    </div>
  );
};

export default App;
