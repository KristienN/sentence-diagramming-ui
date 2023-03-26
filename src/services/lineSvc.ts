import { Selection } from 'd3-selection';
import { Dispatch, SetStateAction } from 'react';

export type lineObject = {
  type: string | null;
  text: string | null;
  parent: string | null;
};

export const horizontalLine = (selection: Selection<null, unknown, null, undefined>, x1: number, y1: number, x2: number, y2: number, id: string) => {
  return selection.append('line').attr('id', `${id}-line`).attr('x1', x1).attr('y1', y1).attr('x2', x2).attr('y2', y2).attr('stroke', 'black').attr('stroke-width', '4px');
};

export const horizontalLineInc = (selection: Selection<null, unknown, null, undefined>, x1: number, y1: number, x2: number, y2: number, id: string, inc_x: number) => {
  return selection
    .append('line')
    .attr('id', `${id}-line`)
    .attr('x1', x1 + inc_x)
    .attr('y1', y1)
    .attr('x2', x2 + inc_x)
    .attr('y2', y2)
    .attr('stroke', 'black')
    .attr('stroke-width', '4px');
};
export const verticalLine = (selection: Selection<null, unknown, null, undefined>, x1: number, y1: number, x2: number, y2: number, id: string) => {
  return selection.append('line').attr('x1', x1).attr('y1', y1).attr('x2', x2).attr('y2', y2).attr('stroke', 'black').attr('stroke-width', '4px');
};

export const diagonalLine = (selection: Selection<null, unknown, null, undefined>, x1: number, y1: number, x2: number, y2: number, id: string, inc_x: number) => {
  return selection
    .append('line')
    .attr('x1', x1 + inc_x)
    .attr('y1', y1)
    .attr('x2', x2 + inc_x)
    .attr('y2', y2)
    .attr('stroke', 'black')
    .attr('stroke-width', '4px');
};

export const diagonalLineInc = (selection: Selection<null, unknown, null, undefined>, x1: number, y1: number, x2: number, y2: number, id: string, inc_x: number, inc_x2: number) => {
  return selection
    .append('line')
    .attr('x1', x1 + inc_x + inc_x2)
    .attr('y1', y1)
    .attr('x2', x2 + inc_x + inc_x2)
    .attr('y2', y2)
    .attr('stroke', 'black')
    .attr('stroke-width', '4px');
};

export class LineDrawSvc {
  lines: lineObject[];
  setLines: Dispatch<SetStateAction<lineObject[]>>;
  selected: string | null;
  setSelected: Dispatch<SetStateAction<string | null>>;

  constructor(lines: lineObject[], setLines: Dispatch<SetStateAction<lineObject[]>>, selected: string | null, setSelected: Dispatch<SetStateAction<string | null>>) {
    this.lines = lines;
    this.setLines = setLines;
    this.selected = selected;
    this.setSelected = setSelected;
  }

  addLine = (type: string) => {
    if (this.lines.filter((l) => l.type === type).length > 0 && type !== 'modifier' && type !== 'preposition') {
      return;
    }

    if (type === 'object' && this.lines.filter((l) => l.type === 'object_2').length > 0) {
      return;
    }

    if (type === 'object_2' && this.lines.filter((l) => l.type === 'object').length > 0) {
      return;
    }

    const lineToAdd: lineObject = {
      type: type,
      text: null,
      parent: null,
    };

    if (type === 'modifier') {
      if (this.selected === null || this.lines.filter((l) => l.parent === this.selected).length === 2) {
        return;
      } else {
        lineToAdd.parent = this.selected;
      }
    }

    if (type === 'preposition') {
      if (this.selected === null || this.lines.filter((l) => l.parent === this.selected).length === 2) {
        return;
      } else {
        lineToAdd.parent = this.selected;
      }
    }

    this.setLines([...this.lines, lineToAdd]);
  };
}
