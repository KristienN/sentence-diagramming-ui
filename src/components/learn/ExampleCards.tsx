import React from 'react';

interface ExampleCardProps {
  sentence: string;
  imageUrl?: string;
}

const ExampleCard: React.FC<ExampleCardProps> = ({ sentence, imageUrl }) => {
  return (
    <div className="flex flex-col space-y-10 w-1/3 h-1/3 mb-24">
      <h2 className="text-3xl font-semibold italic">{sentence}</h2>
      {imageUrl && <img src={imageUrl} alt={sentence} />}
    </div>
  );
};

export default ExampleCard;
