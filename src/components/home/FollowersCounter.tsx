import { useEffect, useState } from "react";

interface CounterProps {
  icon: string;
  start: number;
  end: number;
  text: string;
}

const Counter = ({ icon, start, end, text }: CounterProps) => {
  const [count, setCount] = useState(start);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    if (count < end) {
      interval = setInterval(() => {
        setCount((prev) => (prev + 1 > end ? end : prev + 1));
      }, 10);
    }
    return () => clearInterval(interval);
  }, [count, end]);

  return (
    <div className="flex flex-col justify-center items-center">
      <img src={icon} alt={text} className="w-[50px] h-[50px] mb-2" />
      <p className="text-3xl text-[#626262] font-semibold">{count.toLocaleString()}+</p>
      <p className="text-[#3B3C3E] text-lg">{text}</p>
    </div>
  );
};

const FollowersCounter = () => {
  return (
    <div className="flex md:flex-row flex-col justify-evenly md:gap-16 gap-5 py-10">
      <Counter icon="src/assets/images/facebook.svg" start={100} end={3000} text="Followers" />
      <Counter icon="src/assets/images/instagram.svg" start={100} end={3300} text="Followers" />
      <Counter icon="src/assets/images/youtube.svg" start={100} end={1600} text="Subscribers" />
    </div>
  );
};

export default FollowersCounter;
