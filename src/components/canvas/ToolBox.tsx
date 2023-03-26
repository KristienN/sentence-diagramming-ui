import React from 'react';
import { v4 } from 'uuid';
import subject from '../../images/subject.png';
import predicate from '../../images/predicate.png';
import preposition from '../../images/preposition.png';
import object from '../../images/object.png';
import modifier from '../../images/modifier.png';
import object_2 from '../../images/object-kindof.png';

const buttons = [
  {
    text: 'subject',
    img: subject,
  },
  {
    text: 'predicate',
    img: predicate,
  },
  {
    text: 'modifier',
    img: modifier,
  },
  {
    text: 'object',
    img: object,
  },
  {

    text: 'subject-compliment',
    img: object_2,
  },
  {
    text: 'preposition',
    img: preposition,
  },
];

interface ToolBoxProps {
  onclick: (a: string) => void;
}

const ToolBox: React.FC<ToolBoxProps> = ({ onclick }) => {
  return (
    <div className="space-y-8">

      <div data-cy="toolbox" className="flex flex-row space-x-10 items-center pt-10 px-10 ml-3">
        <span className="italic">toolbox</span>
        {buttons.map(s => {
          return (
            <button key={v4()} onClick={() => onclick(s.text)} data-tooltip-id={s.text + '-tip'} data-tooltip-delay-show={800} className="flex flex-col justify-center items-center">
              <img src={s.img} alt={'placeholder: ' + s.text} className="rounded-lg w-12 h-12 hover:border-black hover:border-4" />
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default ToolBox;
