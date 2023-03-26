import React from 'react';
import ExampleCard from './ExampleCards';
import sentence1 from '../../images/sentence1.png';
import sentence2 from '../../images/sentence2.png';
import sentence3 from '../../images/sentence3.png';
interface ExampleData {
  sentence: string;
  imageUrl: string;
}
const Examples = () => {
  let data: ExampleData[] = [
    {
      sentence: 'He sells cars',
      imageUrl: sentence1,
    },
    {
      sentence: 'She went over the moon',
      imageUrl: sentence2,
    },
    {
      sentence: 'Their parents are computer geeks',
      imageUrl: sentence3,
    },
  ];

  return (
    <div className="flex flex-col items-center jusity-center">
      {data.map((d) => {
        return <ExampleCard sentence={d.sentence} imageUrl={d.imageUrl} />;
      })}
    </div>
  );
};

export default Examples;
