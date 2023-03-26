import { ArrowUturnLeftIcon, ArrowUturnRightIcon, ArrowPathIcon, ChevronDoubleLeftIcon, ChevronDoubleRightIcon, CheckIcon, ArchiveBoxXMarkIcon } from '@heroicons/react/24/solid';
import CanvasBtn from '../canvas/CanvasBtn';
import { TestingData } from './Quiz';

interface BottomPanelProp {
  undoDraw: () => void;
  redoDraw: () => void;
  compare: () => void;
  drawScore: number;
  nextDraw: () => void;
  prevDraw: () => void;
  finish: () => void;
  testData: TestingData[];
  index: number;
  clearCanvas: () => void;
}

const BottomPanel: React.FC<BottomPanelProp> = ({ undoDraw, redoDraw, compare, drawScore, nextDraw, prevDraw, finish, testData, index, clearCanvas }) => {
  return (
    <div className="flex justify-between text-white w-full pt-10 px-10">
      <div className="flex flex-row space-x-4">
        <button data-cy="quiz-buttons" onClick={clearCanvas} className="flex items-center space-x-2 bg-gray-600 font-bold text-lg py-2 px-4 rounded">
          <ArchiveBoxXMarkIcon data-cy="quiz-clear" className="w-6 h-6" />
        </button>
        <CanvasBtn data-cy="quiz-undo" onclick={undoDraw} title="Undo" Icon={ArrowUturnLeftIcon} />
        <CanvasBtn data-cy="quiz-redo" onclick={redoDraw} title="Redo" Icon={ArrowUturnRightIcon} />
      </div>
      <div data-cy="quiz-score" className="flex justify-center items-center border border-black text-black px-6 py-2 rounded w-1/4 text-center">
        Score: {drawScore ? drawScore : 0} / 10{' '}
        <button data-cy="quiz-refresh" onClick={compare}>
          <ArrowPathIcon data-tooltip-id="refresh-tip" data-tooltip-delay-show={1200} className="w-5 h-5 mx-4 hover:fill-slate-500" />
        </button>
      </div>
      {/* <div>{navCircles()}</div> */}
      <div className="flex flex-row space-x-4">

        {index !== 0 && <CanvasBtn data-cy="quiz-prev" onclick={prevDraw} title="Prev" Icon={ChevronDoubleLeftIcon} />}
        {index === 0 && <CanvasBtn onclick={() => {}} title="Prev" Icon={ChevronDoubleLeftIcon} />}
        {testData && index !== testData.length - 1 && <CanvasBtn data-cy="quiz-next" onclick={nextDraw} title="Next" Icon={ChevronDoubleRightIcon} />}
        {testData && index === testData.length - 1 && <CanvasBtn data-cy="quiz-finish" onclick={finish} title="Finish" Icon={CheckIcon} />}
      </div>
    </div>
  );
};

export default BottomPanel;
