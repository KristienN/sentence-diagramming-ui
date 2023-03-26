import React, { useState, useEffect } from 'react';

interface TypingEffectProps {
  texttoType: string;
}
const TypingEffect: React.FC<TypingEffectProps> = ({ texttoType }) => {
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const typingTimer = setTimeout(() => {

      setText(prevText => prevText + textToType.charAt(index));
      setIndex(prevIndex => prevIndex + 1);

    }, 20);

    return () => clearTimeout(typingTimer);
  }, [index]);

  const textToType = texttoType;


  return <h1 data-cy="learn-answer">{text}</h1>;

};

export default TypingEffect;
