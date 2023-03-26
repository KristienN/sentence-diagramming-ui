import React from 'react';
import { TestingData } from '../quiz/Quiz';
import { v4 } from 'uuid';

interface SentenceProp {
  index: number;
  testData?: TestingData[] | null;
}

export const Sentence: React.FC<SentenceProp> = ({ index, testData }) => {
  return (
    <div className="flex flex-col pt-10">

      <div data-cy="sentence-words" className="inline items-center space-x-2 px-10">
        {testData ? (
          testData[index].sentence.split(' ').map(s => {
            return (
              <span key={v4()} draggable className="draggable font-bold text-3xl text-center md:text-left">
                {s}
              </span>
            );
          })
        ) : (
          <span className="text-gray-400 font-italic text-2xl text-center md:text-left cursor-progress"> loading sentence...</span>
        )}
      </div>
      <hr className="mx-10 h-1 bg-gray-200 rounded w-full mt-2" />
    </div>
  );
};
