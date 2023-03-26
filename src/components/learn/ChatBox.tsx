import React, { useEffect, useState } from 'react';
import { postParamsRequest } from '../../services/restSvc';
import TypingEffect from './TypingEffect';
import robo from '../../images/pngegg.png';

const ChatBox = () => {
  const [answer, setAnswer] = useState<string>('Click a prompt and let me inform you!');
  const [question, setQuestion] = useState<string>('');
  useEffect(() => {}, [answer]);

  const promptChatGPT = async (prompt: string) => {
    setAnswer('');
    setQuestion(prompt);
    const a = await postParamsRequest('prompt', prompt);
    console.log(a.data);
    setAnswer(a.data);
  };

  return (
    <div className="flex justify-center items-center p-10">
      <div className="bg-white rounded-lg shadow-lg w-4/5">
        <div className="h-64 overflow-y-auto">
          <div className="flex flex-col mb-4">
            <div className="flex items-center mb-2">
              <img className="w-8 h-8 rounded-full mr-2" src={robo} alt="Avatar" />
              <div className="font-bold text-gray-700">RoboGram</div>
            </div>
            <div className="bg-gray-100 rounded-lg p-8">
              {question && (
                <p id="learn-question" className="mb-8">
                  {question}
                </p>
              )}
              {answer && <TypingEffect texttoType={answer} />}
            </div>
          </div>
        </div>
        <div data-cy="learn-top-buttons" className="flex mt-4 mb-2 justify-between">
          <button className="bg-blue-500 text-white rounded-lg px-4 py-2 hover:bg-blue-600 w-1/4" onClick={() => promptChatGPT('What is a Sentence Diagram?')}>
            What is a Sentence Diagram?
          </button>
          <button className="bg-blue-500 text-white rounded-lg px-4 py-2 hover:bg-blue-600 w-1/4" onClick={() => promptChatGPT('What are the steps to drawing a Sentence Diagram?')}>
            What are the steps to drawing a Sentence Diagram?
          </button>
          <button className="bg-blue-500 text-white rounded-lg px-4 py-2 hover:bg-blue-600 w-1/4" onClick={() => promptChatGPT('What are the different parts of a sentence?')}>
            What are the different parts of a sentence?
          </button>
        </div>
        <div data-cy="learn-bottom-buttons" className="flex mt-4 mb-2 justify-between">
          <button className="bg-blue-300 text-white rounded-lg px-4 py-2 hover:bg-blue-600 w-1/5" onClick={() => promptChatGPT('What is a predicate in a sentence and give an example?')}>
            Predicate?
          </button>
          <button className="bg-blue-300 text-white rounded-lg px-4 py-2 hover:bg-blue-600 w-1/5" onClick={() => promptChatGPT('What is a modifier in a sentence, and give an example?')}>
            Modifier?
          </button>
          <button className="bg-blue-300 text-white rounded-lg px-4 py-2 hover:bg-blue-600 w-1/5" onClick={() => promptChatGPT('What is a prepostion a sentence, and give an example?')}>
            Preposition?
          </button>
          <button className="bg-blue-300 text-white rounded-lg px-4 py-2 hover:bg-blue-600 w-1/5" onClick={() => promptChatGPT('What is a subject compliment a sentence, and give an example?')}>
            Subject Compliment?
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatBox;
