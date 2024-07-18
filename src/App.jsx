import Player from "./components/Player.jsx";
import TimeChallenger from "./components/TimeChallenger.jsx";

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimeChallenger title="Easy" targetTime={2} />
        <TimeChallenger title="Medium" targetTime={5} />
        <TimeChallenger title="Hard" targetTime={25} />
        <TimeChallenger title="Ultra Hard" targetTime={60} />
      </div>
    </>
  );
}

export default App;
