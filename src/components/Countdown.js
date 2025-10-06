import { useEffect, useState } from "react";

function Countdown({ targetDate }) {
  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
    const interval = setInterval(() => {
      const diff = new Date(targetDate) - new Date();
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);
      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div className="mt-4 text-xl sm:text-3xl md:text-5xl text-white" style={{ fontFamily: "'Playfair Display', sans-serif"}}>
      {timeLeft.days}j {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
    </div>
  );
}

export default Countdown;