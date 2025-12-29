import { useState } from "react";


export default function Review({ onSubmit }) {
  const [text, setText] = useState("");

  return (
    <div className="bg-white p-6 rounded-xl shadow-md w-80 text-center">
      <h1 className="text-xl font-semibold mb-2">Leave a Review</h1>
      <p className="text-sm text-gray-500 mb-4">
        Submit a review to unlock the roulette.
      </p>

      <textarea
        className="w-full border resize-none rounded p-2 mb-4"
        rows="4"
        placeholder="Your review..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => {
            if(e.key === "Enter"){
                onSubmit(text)
            }
        }}
      />

      <button
        onClick={() => onSubmit(text)}
        className="w-full bg-black text-white py-2 rounded hover:opacity-90"
      >
        Submit Review
      </button>
    </div>
  );
}
