import { CheckCircleIcon } from '@heroicons/react/24/solid';
import React, { useState } from 'react';

const defaultInputData = '';

const SentenceInput = (props: any) => {
  const [inputData, setInputData] = useState(defaultInputData);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(inputData);
    setInputData(e.target.value);
  };

  const onSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (inputData !== '') {
      console.log(defaultInputData);
      setInputData(defaultInputData);
      props.onSubmit(inputData);
    }
  };

  return (
    <>
      <form className="flex space-x-2w-full ml-5" onSubmit={onSubmit}>
        <input data-cy="user-sentence-input" type="text" className="p-4 w-full" onChange={onChange} placeholder="Enter Sentence Here" />
        <button data-cy="user-sentence-confirm" className="p-4" type="submit">
          <CheckCircleIcon className="w-6 h-6" />
        </button>
      </form>
    </>
  );
};

export default SentenceInput;
