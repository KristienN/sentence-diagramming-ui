import { Dispatch, SetStateAction, MutableRefObject } from 'react';
import { TestingData } from '../components/quiz/Quiz';
import { lineObject } from './lineSvc';

export type canvasObject = {
  sentence: string | null;
  linesArr: lineObject[];
  lastDrawn: lineObject[];
  score: number | null | undefined;
};

export class CanvasBtnSvc {
  index: number;
  lines: lineObject[];
  setLines: Dispatch<SetStateAction<lineObject[]>>;
  svgRef: MutableRefObject<null>;
  testData: TestingData[] | null | undefined;
  setTestData: Dispatch<SetStateAction<TestingData[] | null | undefined>>;
  drawScore: number | null | undefined;
  setDrawScore: Dispatch<SetStateAction<number | null | undefined>>;

  initialLines: lineObject[];
  lastDrawn: lineObject[];
  canvasDrawings: canvasObject[];

  constructor(
    index: number,
    lines: lineObject[],
    setLines: Dispatch<SetStateAction<lineObject[]>>,
    svgRef: MutableRefObject<null>,
    testData: TestingData[] | null | undefined,
    setTestData: Dispatch<SetStateAction<TestingData[] | null | undefined>>,
    drawScore: number | null | undefined,
    setDrawScore: Dispatch<SetStateAction<number | null | undefined>>,
    initialLines: lineObject[],
    lastDrawn: lineObject[],
    canvasDrawings: canvasObject[]
  ) {
    this.index = index;
    this.lines = lines;
    this.setLines = setLines;
    this.svgRef = svgRef;
    this.testData = testData;
    this.setTestData = setTestData;
    this.drawScore = drawScore;
    this.setDrawScore = setDrawScore;
    this.initialLines = initialLines;
    this.lastDrawn = lastDrawn;
    this.canvasDrawings = canvasDrawings;
  }
}
