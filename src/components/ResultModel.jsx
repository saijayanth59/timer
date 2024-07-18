import { forwardRef } from "react";
import { createPortal } from "react-dom";

const ResultModel = forwardRef(function ResultModel(
  { remainingTime, targetTime, handleReset },
  ref
) {
  const score = (1 - remainingTime / (targetTime * 1000)) * 100;
  return createPortal(
    <>
      <dialog className="result-modal" ref={ref} onClose={handleReset}>
        <h2>
          {remainingTime <= 0 ? "You Lost" : `You score: ${parseInt(score)}`}
        </h2>
        <p>
          Target time was <strong>{targetTime} seconds</strong>
        </p>
        <p>
          You stopped timer with
          <strong> {(remainingTime / 1000).toFixed(2)} seconds left</strong>
        </p>
        <form method="dialog" onSubmit={handleReset}>
          <button>Close</button>
        </form>
      </dialog>
    </>,
    document.getElementById("modal")
  );
});
export default ResultModel;
