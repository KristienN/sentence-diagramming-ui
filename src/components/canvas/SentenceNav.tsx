import React from 'react';
import { TestingData } from '../quiz/Quiz';

interface SentenceNavProps {
  index: number;
  testData?: TestingData[] | null;
}
const SentenceNav: React.FC<SentenceNavProps> = ({ index, testData }) => {
  return (
    <div className="flex border border-black rounded-full text-center justify-center text-sm items-center w-14 h-14 mt-12">

      <span data-cy="quiz-navigation" className="font-bold text-2xl mr-2">
        {index + 1}
      </span>{' '}
      / {testData?.length}
    </div>
  );
};

export default SentenceNav;
