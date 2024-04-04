import { useEffect, useState, useRef } from "react";

export default function Timer({ setTimeOut, questionNumber }) {
  const [timer, setTimer] = useState(30);
  const timerRef = useRef(timer);

  useEffect(() => {
    timerRef.current = timer;
  }, [timer]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (timerRef.current === 0) {
        setTimeOut(true);
        return;
      }
      setTimer((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [setTimeOut]);

  useEffect(() => {
    setTimer(30);
  }, [questionNumber]);

  return timer;
}