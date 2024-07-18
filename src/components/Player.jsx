import { useRef, useState } from "react";

export default function Player() {
  let playerName = useRef();
  const [name, setName] = useState(null);

  function handleClick() {
    setName(playerName.current.value);
    playerName.current.value = "";
  }

  return (
    <section id="player">
      <h2>Welcome {name ? name : "Unknown"}</h2>
      <p>
        <input ref={playerName} type="text" />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
