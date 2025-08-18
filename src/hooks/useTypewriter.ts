import { useState, useEffect } from 'react';

interface UseTypewriterOptions {
  speed?: number;
  deleteSpeed?: number;
  delayBetween?: number;
  loop?: boolean;
  startDelay?: number;
}

export const useTypewriter = (
  words: string[],
  options: UseTypewriterOptions = {}
) => {
  const {
    speed = 100,
    deleteSpeed = 50,
    delayBetween = 2000,
    loop = true,
    startDelay = 0
  } = options;

  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isStarted, setIsStarted] = useState(false);

  useEffect(() => {
    if (startDelay > 0) {
      const startTimer = setTimeout(() => {
        setIsStarted(true);
      }, startDelay);
      return () => clearTimeout(startTimer);
    } else {
      setIsStarted(true);
    }
  }, [startDelay]);

  useEffect(() => {
    if (!isStarted) return;

    const currentWord = words[currentWordIndex];
    
    const timer = setTimeout(() => {
      if (isDeleting) {
        // Deleting characters
        setCurrentText(currentWord.substring(0, currentText.length - 1));
        
        if (currentText === '') {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => 
            loop ? (prev + 1) % words.length : Math.min(prev + 1, words.length - 1)
          );
        }
      } else {
        // Adding characters
        setCurrentText(currentWord.substring(0, currentText.length + 1));
        
        if (currentText === currentWord) {
          if (loop || currentWordIndex < words.length - 1) {
            setTimeout(() => setIsDeleting(true), delayBetween);
          }
        }
      }
    }, isDeleting ? deleteSpeed : speed);

    return () => clearTimeout(timer);
  }, [
    currentText,
    currentWordIndex,
    isDeleting,
    isStarted,
    words,
    speed,
    deleteSpeed,
    delayBetween,
    loop
  ]);

  return {
    text: currentText,
    isDeleting,
    currentWordIndex
  };
};

export const useCountUp = (
  end: number,
  options: {
    start?: number;
    duration?: number;
    startOnView?: boolean;
    suffix?: string;
    prefix?: string;
  } = {}
) => {
  const { start = 0, duration = 2000, suffix = '', prefix = '' } = options;
  const [count, setCount] = useState(start);
  const [hasStarted, setHasStarted] = useState(false);

  const startAnimation = () => {
    if (hasStarted) return;
    setHasStarted(true);

    const increment = (end - start) / (duration / 16);
    let current = start;

    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        current = end;
        clearInterval(timer);
      }
      setCount(Math.floor(current));
    }, 16);

    return () => clearInterval(timer);
  };

  return {
    count,
    formattedCount: `${prefix}${count}${suffix}`,
    startAnimation,
    hasStarted
  };
};
