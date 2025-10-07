"use client";

import { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <button 
      onClick={() => setCount(count + 1)}
      className="bg-primary text-dark px-6 py-3 rounded-full font-medium hover:bg-primary/90 transition-colors"
    >
      Count is {count}
    </button>
  );
};
