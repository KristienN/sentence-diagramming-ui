import React from 'react';
import { v4 } from 'uuid';
interface UserSentenceProps {
  sentence: string | null;
  removeSentence: (e: { preventDefault: () => void }) => void;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}
const UserSentence: React.FC<UserSentenceProps> = ({ sentence, removeSentence, Icon }) => {
  return (
    <>
      <div className="flex justify-between items-center">

        <div data-cy="user-sentence-words" className="inline items-center space-x-2 px-10">
          {sentence !== null
            ? sentence.split(' ').map(s => {
                return (
                  <span key={v4()} draggable className="draggable font-bold text-3xl text-center md:text-left">
                    {s}
                  </span>
                );
              })
            : null}
        </div>
        {sentence !== null ? (

          <button data-cy="user-sentence-remove" className="p-4 text-sm" onClick={removeSentence}>
            <Icon className="w-6 h-6 text-red-500" />
          </button>
        ) : null}
      </div>
      <hr className="h-1 bg-gray-200 rounded w-full mt-2 ml-5" />
    </>
  );
};

export default UserSentence;
