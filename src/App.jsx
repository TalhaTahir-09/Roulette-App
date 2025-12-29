import { useState } from "react";
import Review from './components/Review.jsx'
import Roulette from './components/Roulette.jsx'

export default function App() {
  const [step, setStep] = useState("review");
  const [spinning, setSpinning] = useState(false);
  const [result, setResult] = useState(null);

  const submitReview = (review) => {
    if (!review.trim()) {
      alert("Please write a review first.");
      return;
    }
    setStep("roulette");
  };

  const spin = () => {
    if (spinning) return;

    setSpinning(true);
    setResult(null);

    setTimeout(() => {
      const outcome = Math.random() < 0.5 ? "Win" : "Lose";
      setResult(outcome);
      setSpinning(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      {step === "review" && <Review onSubmit={submitReview} />}
      {step === "roulette" && (
        <Roulette spinning={spinning} result={result} onSpin={spin} />
      )}
    </div>
  );
}
