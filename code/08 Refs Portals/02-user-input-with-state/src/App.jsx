import Player from './components/Player.jsx';
import TimerChallenge from './components/timerChallenge.jsx';
function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChallenge title="easy" targetTime={1} />
        <TimerChallenge title="Not Easy" targetTime={5} />
        <TimerChallenge title="Getting Tough" targetTime={10} />
        <TimerChallenge title="Pro's Only" targetTime={15} />
      </div>
    </>
  );
}

export default App;
