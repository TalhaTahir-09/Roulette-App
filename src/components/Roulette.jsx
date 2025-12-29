import { useEffect, useState } from "react";
import confetti from "canvas-confetti";

export default function Roulette() {
  const [rotation, setRotation] = useState(0);
  const [spinning, setSpinning] = useState(false);
  const [result, setResult] = useState(null);

  const spinWheel = () => {
    if (spinning) return;

    setSpinning(true);
    setResult(null);

    // subtle spin
    const extraSpin = 360 + Math.random() * 10 * 60;
    const nextRotation = rotation + extraSpin;

    setRotation(nextRotation);

    setTimeout(() => {
      const normalized =
        ((nextRotation % 360) + 360) % 360;


      const isWin = normalized >= 0 && normalized < 180;

      setResult(isWin ? "Win" : "Lose");
      setSpinning(false);
    }, 1400);
  };

  useEffect(() => {
    if (result === "Win") {
      confetti({
        particleCount: 120,
        spread: 70,
        origin: { y: 0.6 },
      });
    }
  }, [result]);

  return (
    <div className="bg-white p-6 rounded-xl shadow-md w-80 text-center">
      <h1 className="text-xl font-semibold mb-4">Roulette</h1>

      <div className="relative flex justify-center mb-6">
        {/* Pointer */}
        <div className="absolute -top-3 text-2xl z-10">▼</div>

        {/* Wheel */}
        <div
          className="w-48 h-48 rounded-full border-4 border-black transition-transform duration-[1400ms] ease-out"
          style={{
            transform: `rotate(${rotation}deg)`,
            background:
              "conic-gradient(#dc2626 0deg 180deg, #16a34a 180deg 360deg)",
          }}
        />
      </div>

      <button
        onClick={spinWheel}
        disabled={spinning}
        className="w-full bg-black text-white py-2 rounded disabled:opacity-50"
      >
        {spinning ? "Spinning..." : "Spin"}
      </button>

      {result && (
        <p
          className={`mt-4 text-2xl font-bold ${
            result === "Win" ? "text-green-600" : "text-red-600"
          }`}
        >
          {result}
        </p>
      )}
    </div>
  );
}
