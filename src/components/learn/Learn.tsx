import React from 'react';
import ChatBox from './ChatBox';
import Examples from './Examples';

const Learn = () => {
  return (
    <>
      <ChatBox />

      <h2 className="text-4xl text-center underline py-8">Examples</h2>
      <Examples />
    </>
  );
};

export default Learn;
