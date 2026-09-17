import { useState, useEffect, useCallback } from 'react';

const TypewriterText = ({ words = [] }) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const safeIndex = index % (words.length || 1);

  const tick = useCallback(() => {
    if (words.length === 0) return;

    const currentWord = words[safeIndex];

    if (!isDeleting && subIndex === currentWord.length) {
      // Finished typing — pause, then start deleting
      setTimeout(() => setIsDeleting(true), 2000);
      return;
    }

    if (isDeleting && subIndex === 0) {
      // Finished deleting — move to next word
      setIsDeleting(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    setSubIndex((prev) => prev + (isDeleting ? -1 : 1));
  }, [words, safeIndex, subIndex, isDeleting]);

  useEffect(() => {
    if (words.length === 0) return;

    const timeout = setTimeout(tick, isDeleting ? 50 : 100);
    return () => clearTimeout(timeout);
  }, [tick, isDeleting, words.length]);

  if (words.length === 0) return null;

  return (
    <h2 className="text-2xl md:text-3xl text-gray-400 mb-8 h-10">
      {words[safeIndex]?.substring(0, subIndex)}
      <span className="text-primary-cyan animate-pulse">|</span>
    </h2>
  );
};

export default TypewriterText;
