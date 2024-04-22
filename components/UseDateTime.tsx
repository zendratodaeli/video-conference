"use client"

import { useState, useEffect } from 'react';

interface DateTime {
  time: string;
  date: string;
}

const useDateTime = (): DateTime => {
  const [time, setTime] = useState<string>('');
  const [date, setDate] = useState<string>('');

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const newTime = now.toLocaleTimeString('en-US', {
        hour: '2-digit', 
        minute: '2-digit', 
        second: "2-digit"
      });
      const newDate = new Intl.DateTimeFormat('en-US', { dateStyle: 'full' }).format(now);
      setTime(newTime);
      setDate(newDate);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return { time, date };
};

export default useDateTime;
