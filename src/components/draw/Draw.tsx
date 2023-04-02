import { useEffect, useRef, useState } from 'react';
import { Selection } from 'd3-selection';
import { ArrowUturnLeftIcon, ArrowUturnRightIcon, LightBulbIcon, ArrowDownTrayIcon, MinusCircleIcon, ArchiveBoxXMarkIcon } from '@heroicons/react/24/solid';
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';
import * as d3 from 'd3';
import SentenceInput from '../canvas/SentenceInput';
import { drawLines } from '../../services/drawSvc';
import { lineObject } from '../../services/lineSvc';
import { modelObject } from '../../services/modelSvc';
import CanvasBtn from '../canvas/CanvasBtn';
import UserSentence from '../canvas/UserSentence';
import ToolBox from '../canvas/ToolBox';
import ModelViewer from './ModelViewer';

let initialLines: lineObject[] = [];
let lastDrawn: lineObject[] = [];
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

const Draw = () => {
  const [svgselect, setSvgselect] = useState<null | Selection<null, unknown, null, undefined>>(null);
  const [lines, setLines] = useState<lineObject[]>();
  const [selected, setSelected] = useState<string | null>(null);
  const [sentence, setSentence] = useState<string | null>(null);
  const svgRef = useRef(null);

  useEffect(() => {
    const linesCache: lineObject[] | null = getLinesFromCache();
    const sentenceCache = getSentenceFromCache();

    if (!linesCache) {
      console.log('linesCache: ' + linesCache);
      setLines([]);
    } else {
      console.log('linesCache: ' + linesCache);
      setLines(linesCache);
    }

    if (sentenceCache === null) {
      setSentence(null);
    } else {
      setSentence(sentenceCache);
    }
  }, []);

  useEffect(() => {
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

    if (!svgselect) {
      setSvgselect(d3.select(svgRef.current));
    } else {
      svgselect.selectAll('svg > *').remove();

      console.log(svgselect);
      console.log(lines);

      lines!.forEach(l => {
        drawLines(svgselect, l, selected, setSelected, model, modifier_x);
      });
    }

    console.log(lines);
  }, [lines, svgselect, selected]);

  const addLine = (type: string) => {
    if (lines!.filter(l => l.type === type).length > 0 && type !== 'modifier' && type !== 'preposition') {
      return;
    }

    if (type === 'object' && lines!.filter(l => l.type === 'object_2').length > 0) {
      return;
    }

    if (type === 'object_2' && lines!.filter(l => l.type === 'object').length > 0) {
      return;
    }

    const lineToAdd: lineObject = {
      type: type,
      text: null,
      parent: null,
    };

    if (type === 'modifier') {
      if (selected === null || lines!.filter(l => l.parent === selected).length === 2) {
        return;
      } else {
        lineToAdd.parent = selected;
      }
    }

    if (type === 'preposition') {
      if (selected === null || lines!.filter(l => l.parent === selected).length === 2) {
        return;
      } else {
        lineToAdd.parent = selected;
      }
    }

    saveLinesToCache([...lines!, lineToAdd]);
    setLines([...lines!, lineToAdd]);
  };

  const undoDraw = () => {
    if (lines!.length === 0) {
      return;
    }
    lastDrawn = [...lastDrawn, lines![lines!.length - 1]];
    const slicedLines = lines!.slice(0, lines!.length - 1);
    setLines(slicedLines);
  };

  const redoDraw = () => {
    if (lastDrawn.length === 0) {
      return;
    }

    setLines([...lines!, lastDrawn[lastDrawn.length - 1]]);
    lastDrawn = lastDrawn.slice(0, lastDrawn.length - 1);
  };

  const clearCanvas = () => {
    setLines([]);
  };

  const getSentence = (data: string) => {
    console.log('Data is here...' + data);
    setSentence(data);
    saveSentenceToCache(data);
  };

  const removeSentence = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setSentence(null);
    saveSentenceToCache(null);
  };

  const downloadJSON = () => {
    const jsonString = `data:text/json;chatset=utf-8,${encodeURIComponent(JSON.stringify(model, undefined, 4))}`;
    const link = document.createElement('a');
    link.href = jsonString;
    link.download = 'data.json';

    link.click();
  };

  const downloadSVG = () => {
    if (svgRef.current !== null) {
      const link = document.createElement('a');
      const svgData = new XMLSerializer().serializeToString(svgRef.current);
      const blob = new Blob([svgData], { type: 'image/svg+xml;charset=utf-8' });
      const url = URL.createObjectURL(blob);
      link.href = url;
      link.download = 'data.svg';
      link.click();
      URL.revokeObjectURL(url);
    }
  };

  const setDefaultLines = () => {
    const defaultLines: lineObject[] = []; // default value
    sessionStorage.setItem('lines', JSON.stringify(defaultLines));
  };

  const saveLinesToCache = (lines: lineObject[]): void => {
    console.log('I saved!');
    sessionStorage.setItem('lines', JSON.stringify(lines));
  };

  const getLinesFromCache = (): lineObject[] | null => {
    const cachedModel = sessionStorage.getItem('lines');
    if (typeof cachedModel === 'string' && cachedModel !== null) {
      return JSON.parse(cachedModel);
    }
    return null;
  };

  const saveSentenceToCache = (sentence: string | null): void => {
    sessionStorage.setItem('sentence', JSON.stringify(sentence));
  };

  const getSentenceFromCache = (): string | null => {
    const cachedModel = sessionStorage.getItem('sentence');
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
            <div className="space-y-1 md:flex md:flex-row md:justify-between">
              <div className="flex flex-col mt-10 mx-5 w-1/3">
                {sentence === null ? <SentenceInput onSubmit={getSentence} /> : null}
                <UserSentence sentence={sentence} removeSentence={removeSentence} Icon={MinusCircleIcon} />
              </div>
              <div className="flex justify-center items-center">
                <LightBulbIcon data-tooltip-id="ToolsTip" data-tooltip-delay-hide={1000} data-tooltip-delay-show={250} className="mt-4 w-8 h-8 ml-10 fill-gray-300 hover:fill-yellow-300" />
              </div>
              <div className="space-y-8">
                <ToolBox onclick={addLine} />
              </div>
            </div>
          </div>

          <div className="flex flex-col h-screen items-center pt-10">
            <div className="relative container flex items-center h-4/6 border-solid border-4 w-full mx-auto rounded-[32px]">
              <svg data-cy="draw-canvas" ref={svgRef} className="svg h-full w-full" />
            </div>
            <div className="flex justify-between text-white w-full pt-10 px-10">
              <div className="flex flex-row space-x-4">
                <button data-cy="draw-clear" onClick={clearCanvas} className="flex items-center space-x-2 bg-gray-600 font-bold text-lg py-2 px-4 rounded">
                  <ArchiveBoxXMarkIcon className="w-6 h-6" />
                </button>
                <CanvasBtn data-cy="draw-undo" onclick={undoDraw} title="Undo" Icon={ArrowUturnLeftIcon} />
                <CanvasBtn data-cy="draw-redo" onclick={redoDraw} title="Redo" Icon={ArrowUturnRightIcon} />
              </div>
              <div className="flex flex-row space-x-4">
                <div className="flex flex-row space-x-4">
                  <CanvasBtn data-cy="draw-download-json" onclick={downloadJSON} title="JSON" Icon={ArrowDownTrayIcon} />
                  <CanvasBtn data-cy="draw-download-svg" onclick={downloadSVG} title="SVG" Icon={ArrowDownTrayIcon} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <ModelViewer model={model} />
      </div>

      {/* Tool tips */}

      <Tooltip id="ToolsTip" place="bottom" className="text-center">
        <p>Enter a sentence into the space provided.</p>
        <p>Press 'Enter' or click the button to confirm the sentence.</p>
        <p>Use the buttons in the toolbox to draw the diagram on the canvas</p>
        <p>Click a line to select it when adding a modifier</p>
        <p>and drag and drop the words to their respective postions</p>
      </Tooltip>
      <Tooltip id="subject-tip" place="bottom" content="Subject" />
      <Tooltip id="predicate-tip" place="bottom" content="Predicate" />
      <Tooltip id="modifier-tip" place="bottom" content="Modifier" />
      <Tooltip id="object-tip" place="bottom" content="Object" />
      <Tooltip id="object_2-tip" place="bottom" content="Subject Compliment" />
      <Tooltip id="preposition-tip" place="bottom" content="Preposition" />
    </>
  );
};

export default Draw;
