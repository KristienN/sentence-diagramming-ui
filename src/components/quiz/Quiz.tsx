import { useEffect, useRef, useState } from 'react';

import { Selection } from 'd3-selection';
import { LightBulbIcon } from '@heroicons/react/24/solid';
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';
import * as d3 from 'd3';
import { getRequestforState, postDataRequest } from '../../services/restSvc';
import { drawLines } from '../../services/drawSvc';
import { modelObject } from '../../services/modelSvc';
import { /*CanvasBtnSvc */ canvasObject } from '../../services/canvasSvc';
import { /*LineDrawSvc*/ lineObject } from '../../services/lineSvc';
// import CanvasBtn from '../canvas/CanvasBtn';
import SentenceNav from '../canvas/SentenceNav';
import { Sentence } from '../canvas/Sentence';
import ToolBox from '../canvas/ToolBox';
import BottomPanel from './BottomPanel';
import { useNavigate } from 'react-router-dom';

type ModifierData = {
  word: string;
  type: string;
  modifier: [ModifierData];
};

type Data = {
  score: number;
  user: string;
  date: Date;
};

export type TestingData = {
  _id: string;
  sentence: string;
  type: string;
  structure: {
    subject: {
      word: string;
      type: string;
      modifier: [ModifierData];
    };
    predicate: {
      word: string;
      type: string;
      modifier: [ModifierData];
    };
    object: {
      word: string;
      type: string;
      modifier: [ModifierData];
    } | null;
  };
};

let initialLines: lineObject[] = [];
let lastDrawn: lineObject[] = [];
let canvasDrawings: canvasObject[] | null;
let index = 0;

let model: modelObject = {
  subject: {
    word: '',
    modifier: [],
  },
  predicate: {
    word: '',
    modifier: [],
  },
  object: {
    word: '',
    modifier: [],
  },
};

const Quiz = () => {
  const navigate = useNavigate();
  const [svgselect, setSvgselect] = useState<null | Selection<null, unknown, null, undefined>>(null);
  const [lines, setLines] = useState(initialLines);
  const [selected, setSelected] = useState<string | null>(null);
  const svgRef = useRef(null);
  const [testData, setTestData] = useState<TestingData[] | null>();
  const [drawScore, setDrawScore] = useState<number | null>();

  useEffect(() => {
    getRequestforState(setTestData, 'simple');
    canvasDrawings = getCanvasFromCache();

    if (!canvasDrawings) {
      console.log('none');
      canvasDrawings = [];
    } else {
      setLines(canvasDrawings![index].linesArr);
    }
  }, []);

  useEffect(() => {
    model = {
      subject: {
        word: '',
        modifier: [],
      },
      predicate: {
        word: '',
        modifier: [],
      },
      object: {
        word: '',
        modifier: [],
      },
    };

    let modifier_x = {
      subject: 0,
      predicate: 0,
      object: 0,
      subjectPrep: 0,
      predicatePrep: 0,
      objectPrep: 0,
      s_length: 0,
      p_length: 0,
      o_length: 0,
      sp_length: 0,
      pp_length: 0,
      op_length: 0,
    };

    if (!svgselect) {
      setSvgselect(d3.select(svgRef.current));
    } else {
      svgselect.selectAll('svg > *').remove();
      lines.forEach(l => {
        drawLines(svgselect, l, selected, setSelected, model, modifier_x);
      });
    }

    console.log(canvasDrawings);
    compare();
    saveCanvasToCache(canvasDrawings!);
  }, [lines, svgselect, selected, drawScore]);

  const addLine = (type: string) => {
    if (lines.filter(l => l.type === type).length > 0 && type !== 'modifier' && type !== 'preposition') {
      return;
    }

    if (type === 'object' && lines.filter(l => l.type === 'object_2').length > 0) {
      return;
    }

    if (type === 'object_2' && lines.filter(l => l.type === 'object').length > 0) {
      return;
    }

    const lineToAdd: lineObject = {
      type: type,
      text: null,
      parent: null,
    };

    if (type === 'modifier') {
      if (selected === null || lines.filter(l => l.parent === selected).length === 2) {
        return;
      } else {
        lineToAdd.parent = selected;
      }
    }

    if (type === 'preposition') {
      if (selected === null || lines.filter(l => l.parent === selected).length === 2) {
        return;
      } else {
        lineToAdd.parent = selected;
      }
    }

    setLines([...lines, lineToAdd]);
  };

  const undoDraw = () => {
    if (lines.length === 0) {
      return;
    }
    lastDrawn = [...lastDrawn, lines[lines.length - 1]];
    const slicedLines = lines.slice(0, lines.length - 1);
    setLines(slicedLines);
  };

  const redoDraw = () => {
    if (lastDrawn.length === 0) {
      return;
    }

    setLines([...lines, lastDrawn[lastDrawn.length - 1]]);
    lastDrawn = lastDrawn.slice(0, lastDrawn.length - 1);
  };

  const nextDraw = () => {
    if (testData !== undefined && testData !== null) {
      if (index === testData.length - 1) {
        return;
      }

      let c: canvasObject = {
        sentence: testData[index].sentence,
        linesArr: lines,
        lastDrawn: lastDrawn,
        score: drawScore,
      };

      canvasDrawings![index] = c;

      index++;
      if (canvasDrawings![index] === undefined || canvasDrawings![index] === null) {
        lastDrawn = [];
        setLines([]);
      } else {
        setLines(canvasDrawings![index].linesArr);
        lastDrawn = canvasDrawings![index].lastDrawn;
      }
      // console.log(canvasDrawings);
    }
  };

  const clearCanvas = () => {
    setLines([]);
  };

  const prevDraw = () => {
    if (index >= 0) {
      if (testData !== undefined && testData !== null) {
        if (canvasDrawings!.length === 0) {
          return;
        }
        let c: canvasObject = {
          sentence: testData[index].sentence,
          linesArr: lines,
          lastDrawn: lastDrawn,
          score: drawScore,
        };

        canvasDrawings![index] = c;

        index--;
        setLines(canvasDrawings![index].linesArr);
        lastDrawn = canvasDrawings![index].lastDrawn;
        setDrawScore(canvasDrawings![index].score);
        // console.log(canvasDrawings);
      }
    }
  };

  const compare = () => {
    let score: number = 0;
    let total: number = 0;

    if (testData !== null && testData !== undefined) {
      let td: TestingData = testData[index];
      // Subject score

      total++;
      if (td.structure.subject.word === model.subject.word) {
        score++;
      }

      total++;
      if (td.structure.subject.modifier.length === model.subject.modifier.length) {
        score++;
        total += td.structure.subject.modifier.length;
        for (let i = 0; i < td.structure.subject.modifier.length; i++) {
          if (td.structure.subject.modifier[i].word === model.subject.modifier[i].word) {
            score++;
            // if (td.structure.subject.modifier[i].modifier && td.structure.subject.modifier[i].modifier.length > 0) {
            //   total += td.structure.subject.modifier.length;
            //   for (let j = 0; j < td.structure.subject.modifier[i].modifier.length; j++) {
            //     if (td.structure.subject.modifier[i].modifier[j].word === model.subject.modifier[i].modifier[j].word) {
            //       score++;
            //     }
            //   }
            // }
          }
        }
      }

      total++;
      if (td.structure.predicate.word === model.predicate.word) {
        score++;
      }
      total++;
      if (td.structure.predicate.modifier.length === model.predicate.modifier.length) {
        score++;
        total += td.structure.predicate.modifier.length;
        for (let i = 0; i < td.structure.predicate.modifier.length; i++) {
          if (td.structure.predicate.modifier[i].word === model.predicate.modifier[i].word) {
            score++;
            // if (td.structure.predicate.modifier[i].modifier && td.structure.predicate.modifier[i].modifier.length > 0) {
            //   total += td.structure.predicate.modifier.length;
            //   for (let j = 0; j < td.structure.predicate.modifier[i].modifier.length; j++) {
            //     if (td.structure.predicate.modifier[i].modifier[j].word === model.predicate.modifier[i].modifier[j].word) {
            //       score++;
            //     }
            //   }
            // }
          }
        }
      }

      if (td.structure.object) {
        if (td.structure.object.word && (td.structure.object.word !== '' || td.structure.object.word !== null)) {
          total++;
          if (td.structure.object.word === model.object.word) {
            score++;
          }

          total++;
          if (td.structure.object.modifier.length === model.object.modifier.length) {
            score++;
            total += td.structure.object.modifier.length;
            for (let i = 0; i < td.structure.object.modifier.length; i++) {
              if (td.structure.object.modifier[i].word === model.object.modifier[i].word) {
                score++;
              }
            }
          }
        }
      }
    }

    let result = Math.floor((score / total) * 10);

    setDrawScore(result);

    let percentage = result * 10;
  };

  const finish = () => {
    //  Send score to database
    let total: number = 0;
    canvasDrawings!.forEach(c => {
      if (c.score) {
        total += c.score;
      }
    });

    total = total / testData!.length;

    console.log('Total Grade: ' + total);

    let data: Data = {
      score: total,
      user: 'Test Client',
      date: new Date(),
    };

    postDataRequest(data, 'grade');

    navigate('/thank', { state: { score: total, user: 'test client' } });
  };

  // if (testData === undefined || null) {
  //   return <></>;
  // }

  const saveCanvasToCache = (canvasArr: canvasObject[]): void => {
    sessionStorage.setItem('canvas', JSON.stringify(canvasArr));
  };

  const getCanvasFromCache = (): canvasObject[] | null => {
    const cachedModel = sessionStorage.getItem('canvas');
    if (cachedModel) {
      return JSON.parse(cachedModel);
    }
    return null;
  };

  return (
    <>
      <div className="container relative mx-auto">
        <div className="flex flex-col mx-auto space-x-10">
          <div className="flex flex-col">
            <div className="space-y-1 sm:flex sm:flex-col sm:justify-center sm:items-center  lg:flex-row md:justify-between">
              <SentenceNav index={index} testData={testData} />
              <Sentence index={index} testData={testData} />
              <div className="flex justify-center items-center">
                <LightBulbIcon data-tooltip-id="ToolsTip" data-tooltip-delay-hide={1000} data-tooltip-delay-show={250} className="mt-4 w-8 h-8 ml-10 fill-gray-300 hover:fill-yellow-300" />
              </div>
              <ToolBox onclick={addLine} />
            </div>
          </div>

          <div className="flex flex-col h-screen items-center pt-10">
            <div className="relative container flex items-center border-solid border-4 w-full mx-auto rounded-[32px] h-4/6">
              <svg data-cy="quiz-canvas" ref={svgRef} className="svg h-full w-full overflow-scroll" />
            </div>
            {testData && (
              <BottomPanel
                data-cy="quiz-bottom-panel"
                undoDraw={undoDraw}
                redoDraw={redoDraw}
                compare={compare}
                drawScore={drawScore!}
                nextDraw={nextDraw}
                prevDraw={prevDraw}
                finish={finish}
                testData={testData!}
                index={index}
                clearCanvas={clearCanvas}
              />
            )}
          </div>
        </div>
      </div>

      {/* Tool tips */}

      <Tooltip id="ToolsTip" place="bottom" className="text-center">
        <p>Use the buttons in the toolbox to draw the diagram for the sentence provided.</p>
        <p>Click a line to select it when adding a modifier</p>
        <p>and drag and drop the words to their respective postions.</p>
        <p>Press Next to move onto the next sentence.</p>
        <p>Aim for a 10 / 10 score for each sentence diagram!</p>
      </Tooltip>
      <Tooltip id="subject-tip" place="bottom" content="Subject" />
      <Tooltip id="predicate-tip" place="bottom" content="Predicate" />
      <Tooltip id="modifier-tip" place="bottom" content="Modifier" />
      <Tooltip id="object-tip" place="bottom" content="Object" />
      <Tooltip id="object_2-tip" place="bottom" content="Subject Compliment" />
      <Tooltip id="preposition-tip" place="bottom" content="Preposition" />
      <Tooltip id="refresh-tip" place="bottom" content="Update Score" />
    </>
  );
};

export default Quiz;
