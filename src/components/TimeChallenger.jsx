import { useRef, useState } from "react";
import ResultModel from "./ResultModel";

export default function TimeChallenger({ title, targetTime }) {
  const timer = useRef();
  const dialog = useRef();
  const [remainingTime, setRemainingTime] = useState(targetTime * 1000);
  function startTimer() {
    timer.current = setInterval(() => {
      setRemainingTime((prev) => prev - 10);
    }, 10);
  }

  const isActive = remainingTime > 0 && remainingTime < targetTime * 1000;

  if (remainingTime <= 0) {
    clearInterval(timer.current);
    dialog.current.showModal();
  }

  function stopTimer() {
    clearInterval(timer.current);
    dialog.current.showModal();
  }

  function handleReset() {
    setRemainingTime(targetTime * 1000);
  }

  return (
    <>
      <ResultModel
        ref={dialog}
        remainingTime={remainingTime}
        targetTime={targetTime}
        handleReset={handleReset}
      />
      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={isActive ? stopTimer : startTimer}>
            {isActive ? "Stop Timer" : "Start Challenge"}
          </button>
        </p>
        <p className={isActive ? "active" : undefined}>
          {isActive ? "Time active" : "Timer is inactive"}
        </p>
      </section>
    </>
  );
}
