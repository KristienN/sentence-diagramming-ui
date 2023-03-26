import { select, Selection } from 'd3-selection';

export const horizontalDropZones = (selection: Selection<null, unknown, null, undefined>, x: number, y: number, width: number, height: number, id: string) => {
  return selection.append('g').attr('id', `${id}-drop`).append('rect').attr('id', `${id}-drop-rect`).attr('fill', 'white').attr('width', width).attr('height', height).attr('x', x).attr('y', y);
};

export const horizontalDropZonesInc = (selection: Selection<null, unknown, null, undefined>, x: number, y: number, width: number, height: number, id: string, inc_x: number) => {
  return selection
    .append('g')
    .attr('id', `${id}-drop`)
    .append('rect')
    .attr('id', `${id}-drop-rect`)
    .attr('fill', 'white')
    .attr('width', width)
    .attr('height', height)
    .attr('x', x + inc_x)
    .attr('y', y);
};

export const horizontalDropTextAction = (id: string, text: string | null, x: number, y: number) => {
  select(`#${id}-drop > text`).remove();
  select(`#${id}-drop`).append('text').text(text).attr('font-size', '24px').attr('stroke', 'black').attr('x', x).attr('y', y).attr('dominant-baseline', 'middle').attr('text-anchor', 'middle');
  select(`#${id}-drop-rect`).attr('fill', 'white');
};

export const horizontalDropTextActionInc = (id: string, text: string | null, x: number, y: number, inc_x: number) => {
  select(`#${id}-drop > text`).remove();
  select(`#${id}-drop`)
    .append('text')
    .text(text)
    .attr('font-size', '24px')
    .attr('stroke', 'black')
    .attr('x', x + inc_x)
    .attr('y', y)
    .attr('dominant-baseline', 'middle')
    .attr('text-anchor', 'middle');
  select(`#${id}-drop-rect`).attr('fill', 'white');
};

export const diagonalDropZones = (selection: Selection<null, unknown, null, undefined>, x: number, y: number, width: number, height: number, group_id: string, rect_id: string, inc_x: number) => {
  return selection
    .append('g')
    .attr('id', group_id)
    .append('rect')
    .attr('id', rect_id)
    .attr('fill', 'white')
    .attr('width', width)
    .attr('height', height)
    .attr('transform', `translate(${x + inc_x}, ${y}), rotate(45)`);
};

export const diagonalDropZonesInc = (
  selection: Selection<null, unknown, null, undefined>,
  x: number,
  y: number,
  width: number,
  height: number,
  group_id: string,
  rect_id: string,
  inc_x: number,
  inc_x2: number
) => {
  return selection
    .append('g')
    .attr('id', group_id)
    .append('rect')
    .attr('id', rect_id)
    .attr('fill', 'white')
    .attr('width', width)
    .attr('height', height)
    .attr('transform', `translate(${x + inc_x + inc_x2}, ${y}), rotate(45)`);
};

export const diagonalDropTextAction = (group_id: string, rect_id: string, text: string | null, x: number, y: number, inc_x: number) => {
  select(`${group_id} > text`).remove();
  select(`#${group_id}`)
    .append('text')
    .text(text)
    .attr('font-size', '18px')
    .attr('stroke', 'black')
    .attr('transform', `translate(${x + inc_x}, ${y}), rotate(45)`)
    .attr('dominant-baseline', 'middle')
    .attr('text-anchor', 'middle');
  select(`#${rect_id}`).attr('fill', 'white');
};

export const diagonalDropTextActionInc = (group_id: string, rect_id: string, text: string | null, x: number, y: number, inc_x: number, inc_x2: number) => {
  select(`${group_id} > text`).remove();
  select(`#${group_id}`)
    .append('text')
    .text(text)
    .attr('font-size', '18px')
    .attr('stroke', 'black')
    .attr('transform', `translate(${x + inc_x + inc_x2}, ${y}), rotate(45)`)
    .attr('dominant-baseline', 'middle')
    .attr('text-anchor', 'middle');
  select(`#${rect_id}`).attr('fill', 'white');
};
