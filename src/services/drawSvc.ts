import { select, Selection } from 'd3-selection';
import { Dispatch, SetStateAction } from 'react';
import {
  diagonalDropTextAction,
  diagonalDropTextActionInc,
  diagonalDropZones,
  diagonalDropZonesInc,
  horizontalDropTextAction,
  horizontalDropTextActionInc,
  horizontalDropZones,
  horizontalDropZonesInc,
} from './dragDropSvc';
import { horizontalLine, verticalLine, diagonalLine, lineObject, horizontalLineInc, diagonalLineInc } from './lineSvc';
import { modelObject, modifierObject } from './modelSvc';
import * as d3 from 'd3';

export const drawLines = (
  svgselect: Selection<null, unknown, null, undefined>,
  l: lineObject,
  selected: string | null,
  setSelected: Dispatch<SetStateAction<string | null>>,
  model: modelObject,
  modifier_x: any
) => {
  let dragged: string | null = null;
  const draggables = document.querySelectorAll('.draggable');

  draggables.forEach(element => {
    element.addEventListener('dragstart', e => {
      dragged = element.innerHTML;
      d3.selectAll('rect')
        .attr('stroke', 'black')
        .attr('stroke-width', '2px');

      console.log(dragged);
    });


    element.addEventListener('dragend', e => {
      dragged = element.innerHTML;
      d3.selectAll('rect').attr('stroke', 'white');
      console.log(dragged);
    });
  });

  if (l.type === 'subject') {
    horizontalDropZones(svgselect, 150, 100, 100, 40, 'subject')
      .on('dragover', ev => {
        ev.preventDefault();
      })
      .on('drop', () => {
        l.text = dragged;
        horizontalDropTextAction('subject', dragged, 200, 120);
        model.subject.word = l.text;
      });

    if (l.text !== null) {
      horizontalDropTextAction('subject', l.text, 200, 120);

      model.subject.word = l.text;
    } else {
      model.subject.word = '';
    }


    horizontalLine(svgselect, 100, 150, 300, 150, 'subject').on('click', ev => {
      // ev.preventDefault()
      if (selected !== 'subject') {
        setSelected('subject');
        select('#subject-line').attr('stroke', 'blue');
      } else {
        setSelected(null);
        select('#subject-line').attr('stroke', 'black');
      }
      // console.log(selected);
    });

    if (selected === 'subject') {
      select('#subject-line').attr('stroke', 'blue');
    } else {
      select('#subject-line').attr('stroke', 'black');
    }
  } else if (l.type === 'predicate') {
    horizontalDropZones(svgselect, 350, 100, 100, 40, 'predicate')

      .on('dragover', ev => {
        ev.preventDefault();
      })
      .on('drop', () => {
        horizontalDropTextAction('predicate', dragged, 400, 120);
        l.text = dragged;
        model.predicate.word = l.text;
      });

    if (l.text !== null) {
      horizontalDropTextAction('predicate', l.text, 400, 120);
      model.predicate.word = l.text;
    } else {
      model.predicate.word = '';
    }


    horizontalLine(svgselect, 300, 150, 500, 150, 'predicate').on('click', ev => {
      // ev.preventDefault()
      if (selected !== 'predicate') {
        setSelected('predicate');
        select('#predicate-line').attr('stroke', 'blue');
      } else {
        setSelected(null);
        select('#predicate-line').attr('stroke', 'black');
      }
      // console.log(selected);
    });

    if (selected === 'predicate') {
      select('#predicate-line').attr('stroke', 'blue');
    } else {
      select('#predicate-line').attr('stroke', 'black');
    }

    verticalLine(svgselect, 300, 100, 300, 180, 'predicate');
  } else if (l.type === 'modifier') {
    if (l.parent === 'subject') {
      let group_id: any;
      let rect_id: any;
      let inc_x: any;

      if (modifier_x.s_length === 0) {
        group_id = `modifier-drop-0`;
        rect_id = `modifier-drop-rect-0`;
        inc_x = 0;
      } else if (modifier_x.s_length === 1) {
        group_id = `modifier-drop-1`;
        rect_id = `modifier-drop-rect-1`;
        inc_x = 100;
      }

      diagonalDropZones(svgselect, 180, 160, 100, 40, group_id, rect_id, inc_x)
        .on('dragover', ev => {
          ev.preventDefault();
        })
        .on('drop', () => {
          diagonalDropTextAction(group_id, rect_id, dragged, 180, 200, inc_x);
          l.text = dragged;
          let modObject: modifierObject = {
            word: l.text,
            type: 'modifier',
            modifier: [],
          };
          model.subject.modifier.push(modObject);
        });

      if (l.text !== null) {
        diagonalDropTextAction(group_id, rect_id, l.text, 180, 200, inc_x);

        let modObject: modifierObject = {
          word: l.text,
          type: 'modifier',
          modifier: [],
        };
        model.subject.modifier.push(modObject);
      } else {
        let modObject: modifierObject = {
          word: '',
          type: 'modifier',
          modifier: [],
        };
        model.subject.modifier.push(modObject);
      }

      diagonalLine(svgselect, 100, 150, 200, 250, 'modifier', inc_x);

      modifier_x.subject += 100;
      modifier_x.s_length++;
    } else if (l.parent === 'predicate') {
      let group_id: any;
      let rect_id: any;
      let inc_x: any;

      if (modifier_x.p_length === 0) {
        group_id = `modifier-drop-3`;
        rect_id = `modifier-drop-rect-3`;
        inc_x = 0;
      } else if (modifier_x.p_length === 1) {
        group_id = `modifier-drop-4`;
        rect_id = `modifier-drop-rect-4`;
        inc_x = 100;
      }

      diagonalDropZones(svgselect, 380, 160, 100, 40, group_id, rect_id, inc_x)

        .on('dragover', ev => {
          ev.preventDefault();
        })
        .on('drop', () => {
          diagonalDropTextAction(group_id, rect_id, dragged, 380, 200, inc_x);
          l.text = dragged;
          let modObject: modifierObject = {
            word: l.text,
            type: 'modifier',
            modifier: [],
          };
          model.predicate.modifier.push(modObject);
        });

      if (l.text !== null) {
        diagonalDropTextAction(group_id, rect_id, l.text, 380, 200, inc_x);

        let modObject: modifierObject = {
          word: l.text,
          type: 'modifier',
          modifier: [],
        };
        model.predicate.modifier.push(modObject);
      } else {
        let modObject: modifierObject = {
          word: '',
          type: 'modifier',
          modifier: [],
        };
        model.predicate.modifier.push(modObject);
      }

      diagonalLine(svgselect, 300, 150, 400, 250, 'modifier', inc_x);

      modifier_x.predicate += 100;
      modifier_x.p_length++;

    } else if (l.parent === 'object' || l.parent === 'subject-compliment') {
      let group_id: any;
      let rect_id: any;
      let inc_x: any;

      if (modifier_x.o_length === 0) {
        group_id = `modifier-drop-5`;
        rect_id = `modifier-drop-rect-5`;
        inc_x = 0;
      } else if (modifier_x.o_length === 1) {
        group_id = `modifier-drop-6`;
        rect_id = `modifier-drop-rect-6`;
        inc_x = inc_x = 100;
      }

      diagonalDropZones(svgselect, 590, 160, 100, 40, group_id, rect_id, inc_x)

        .on('dragover', ev => {
          ev.preventDefault();
        })
        .on('drop', () => {
          diagonalDropTextAction(group_id, rect_id, dragged, 590, 200, inc_x);

          l.text = dragged;
          let modObject: modifierObject = {
            word: l.text,
            type: 'modifier',
            modifier: [],
          };
          model.object.modifier.push(modObject);
        });

      if (l.text !== null) {
        diagonalDropTextAction(group_id, rect_id, l.text, 590, 200, inc_x);

        let modObject: modifierObject = {
          word: l.text,
          type: 'modifier',
          modifier: [],
        };
        model.object.modifier.push(modObject);
      } else {
        let modObject: modifierObject = {
          word: '',
          type: 'modifier',
          modifier: [],
        };
        model.object.modifier.push(modObject);
      }

      diagonalLine(svgselect, 510, 150, 610, 250, 'modfier', inc_x);

      modifier_x.subject += 100;
      modifier_x.o_length++;
    } else if (l.parent === 'subject-preposition') {
      let group_id: any;
      let rect_id: any;
      let inc_x: any;

      if (modifier_x.sp_length === 0) {
        group_id = `modifier-drop-20`;
        rect_id = `modifier-drop-rect-20`;
        inc_x = 0;
      } else if (modifier_x.sp_length === 1) {
        group_id = `modifier-drop-21`;
        rect_id = `modifier-drop-rect-21`;
        inc_x = 100;
      }

      let inc_x2 = modifier_x.s_length === 0 ? 100 : 0;

      diagonalDropZonesInc(svgselect, 300, 260, 100, 40, group_id, rect_id, inc_x, inc_x2)

        .on('dragover', ev => {
          ev.preventDefault();
        })
        .on('drop', () => {
          diagonalDropTextActionInc(group_id, rect_id, dragged, 320, 300, inc_x, inc_x2);
          l.text = dragged;
          let modObject: modifierObject = {
            word: l.text,
            type: 'modifier',
            modifier: [],
          };
          if (model.subject.modifier[modifier_x.s_length] !== undefined && model.subject.modifier[modifier_x.s_length].modifier[modifier_x.sp_length] !== undefined) {
            model.subject.modifier[modifier_x.s_length].modifier[modifier_x.sp_length].modifier.push(modObject);
          }
        });

      if (l.text !== null) {
        diagonalDropTextActionInc(group_id, rect_id, l.text, 320, 300, inc_x, inc_x2);

        let modObject: modifierObject = {
          word: l.text,
          type: 'modifier',
          modifier: [],
        };

        if (model.subject.modifier[modifier_x.s_length] !== undefined && model.subject.modifier[modifier_x.s_length].modifier[modifier_x.sp_length] !== undefined) {
          model.subject.modifier[modifier_x.s_length].modifier[modifier_x.sp_length].modifier.push(modObject);
        }
      } else {
        let modObject: modifierObject = {
          word: '',
          type: 'modifier',
          modifier: [],
        };

        if (model.subject.modifier[modifier_x.s_length] !== undefined && model.subject.modifier[modifier_x.s_length].modifier[modifier_x.sp_length] !== undefined) {
          model.subject.modifier[modifier_x.s_length].modifier[modifier_x.sp_length].modifier.push(modObject);
        }
      }

      diagonalLineInc(svgselect, 240, 250, 340, 350, 'preposition modifier', inc_x, inc_x2);

      modifier_x.subjectPrep += 100;
      modifier_x.sp_length++;
    } else if (l.parent === 'predicate-preposition') {
      let group_id: any;
      let rect_id: any;
      let inc_x: any;

      if (modifier_x.pp_length === 0) {
        group_id = `modifier-drop-22`;
        rect_id = `modifier-drop-rect-22`;
        inc_x = 0;
      } else if (modifier_x.pp_length === 1) {
        group_id = `modifier-drop-23`;
        rect_id = `modifier-drop-rect-23`;
        inc_x = 100;
      }
      let inc_x2 = modifier_x.p_length === 0 ? 100 : 0;

      diagonalDropZonesInc(svgselect, 520, 260, 75, 40, group_id, rect_id, inc_x, inc_x2)

        .on('dragover', ev => {
          ev.preventDefault();
        })
        .on('drop', () => {
          diagonalDropTextActionInc(group_id, rect_id, dragged, 520, 300, inc_x, inc_x2);
          l.text = dragged;
          let modObject: modifierObject = {
            word: l.text,
            type: 'modifier',
            modifier: [],
          };
          if (model.predicate.modifier[modifier_x.p_length] !== undefined && model.predicate.modifier[modifier_x.p_length].modifier[modifier_x.pp_length] !== undefined) {
            model.predicate.modifier[modifier_x.p_length].modifier[modifier_x.pp_length].modifier.push(modObject);
          }
        });

      if (l.text !== null) {
        diagonalDropTextActionInc(group_id, rect_id, l.text, 520, 300, inc_x, inc_x2);

        let modObject: modifierObject = {
          word: l.text,
          type: 'modifier',
          modifier: [],
        };
        if (model.predicate.modifier[modifier_x.p_length] !== undefined && model.predicate.modifier[modifier_x.p_length].modifier[modifier_x.pp_length] !== undefined) {
          model.predicate.modifier[modifier_x.p_length].modifier[modifier_x.pp_length].modifier.push(modObject);
        }
      }

      diagonalLineInc(svgselect, 440, 250, 540, 350, 'preposition modifier', inc_x, inc_x2);

      modifier_x.predicatePrep += 100;
      modifier_x.pp_length++;
    } else if (l.parent === 'object-preposition') {
      let group_id: any;
      let rect_id: any;
      let inc_x: any;

      if (modifier_x.op_length === 0) {
        group_id = `modifier-drop-24`;
        rect_id = `modifier-drop-rect-24`;
        inc_x = 0;
      } else if (modifier_x.op_length === 1) {
        group_id = `modifier-drop-25`;
        rect_id = `modifier-drop-rect-25`;
        inc_x = 100;
      }

      let inc_x2 = modifier_x.o_length === 0 ? 100 : 0;

      diagonalDropZonesInc(svgselect, 720, 260, 75, 40, group_id, rect_id, inc_x, inc_x2)

        .on('dragover', ev => {
          ev.preventDefault();
        })
        .on('drop', () => {
          diagonalDropTextActionInc(group_id, rect_id, dragged, 720, 300, inc_x, inc_x2);
          l.text = dragged;
          let modObject: modifierObject = {
            word: l.text,
            type: 'modifier',
            modifier: [],
          };
          if (model.object.modifier[modifier_x.o_length] !== undefined && model.object.modifier[modifier_x.o_length].modifier[modifier_x.op_length] !== undefined) {
            model.object.modifier[modifier_x.o_length].modifier[modifier_x.op_length].modifier.push(modObject);
          }
        });

      if (l.text !== null) {
        diagonalDropTextActionInc(group_id, rect_id, l.text, 720, 300, inc_x, inc_x2);

        let modObject: modifierObject = {
          word: l.text,
          type: 'modifier',
          modifier: [],
        };
        if (model.object.modifier[modifier_x.o_length] !== undefined && model.object.modifier[modifier_x.o_length].modifier[modifier_x.op_length] !== undefined) {
          model.object.modifier[modifier_x.o_length].modifier[modifier_x.op_length].modifier.push(modObject);
        }
      }

      diagonalLineInc(svgselect, 640, 250, 740, 350, 'preposition modifier', inc_x, inc_x2);

      modifier_x.objectPrep += 100;
      modifier_x.op_length++;
    }

  } else if (l.type === 'subject-compliment') {
    horizontalDropZones(svgselect, 520, 100, 100, 40, 'subject-compliment')
      .on('dragover', ev => {
        ev.preventDefault();
      })
      .on('drop', () => {
        horizontalDropTextAction('subject-compliment', dragged, 600, 120);
        l.text = dragged;

        model.object.word = l.text;
      });

    if (l.text !== null) {
      horizontalDropTextAction('subject-compliment', l.text, 600, 120);
      model.object.word = l.text;
    } else {
      model.object.word = '';
    }


    horizontalLine(svgselect, 500, 150, 700, 150, 'subject-compliment').on('click', ev => {
      // ev.preventDefault()
      if (selected !== 'subject-compliment') {
        setSelected('subject-compliment');
        select('#subject-compliment-line').attr('stroke', 'blue');
      } else {
        setSelected(null);
        select('#subject-compliment-line').attr('stroke', 'black');
      }
      // console.log(selected);
    });

    verticalLine(svgselect, 460, 100, 500, 150, 'subject-compliment');

    if (selected === 'subject-compliment') {
      select('#subject-compliment-line').attr('stroke', 'blue');
    } else {
      select('#subject-compliment-line').attr('stroke', 'black');
    }
  } else if (l.type === 'object') {
    horizontalDropZones(svgselect, 520, 100, 100, 40, 'object')
      .on('dragover', ev => {
        ev.preventDefault();
      })
      .on('drop', () => {
        horizontalDropTextAction('object', dragged, 600, 120);

        // setLines(lines.splice(lines.length-1, 1, {type: "object", text: dragged, parent: null}))
        l.text = dragged;

        model.object.word = l.text;
      });

    if (l.text !== null) {
      horizontalDropTextAction('object', l.text, 600, 120);

      model.object.word = l.text;
    } else {
      model.object.word = '';
    }

    horizontalLine(svgselect, 500, 150, 700, 150, 'object').on('click', ev => {
      // ev.preventDefault()
      if (selected !== 'object') {
        setSelected('object');
        select('#object-line').attr('stroke', 'blue');
      } else {
        setSelected(null);
        select('#object-line').attr('stroke', 'black');
      }
      //console.log(selected);
    });

    verticalLine(svgselect, 500, 100, 500, 150, 'object');

    if (selected === 'object') {
      select('#object-line').attr('stroke', 'blue');
    } else {
      select('#object-line').attr('stroke', 'black');
    }
  } else if (l.type === 'preposition') {
    let group_id: any;
    let rect_id: any;
    let inc_x: any;
    // Modifier
    if (l.parent === 'subject') {
      if (modifier_x.s_length === 0) {
        group_id = `modifier-drop-10`;
        rect_id = `modifier-drop-rect-10`;
        inc_x = 0;
      } else if (modifier_x.s_length === 1) {
        group_id = `modifier-drop-11`;
        rect_id = `modifier-drop-rect-11`;
        inc_x = 100;
      }

      diagonalDropZones(svgselect, 180, 160, 100, 40, group_id, rect_id, inc_x)
        .on('dragover', ev => {
          ev.preventDefault();
        })
        .on('drop', () => {
          diagonalDropTextAction(group_id, rect_id, dragged, 180, 200, inc_x);
          l.text = l.text !== null ? dragged + l.text : dragged;
          let modObject: modifierObject;
          modObject = {
            word: l.text,
            type: 'modifier',
            modifier: [],
          };
          model.subject.modifier.push(modObject);
        });

      let s = l.text === null ? null : l.text.split(' ');

      if (s !== null && s[0] !== null) {
        diagonalDropTextAction(group_id, rect_id, s[0], 180, 200, inc_x);
        let modObject: modifierObject;
        modObject = {
          word: s[0],
          type: 'modifier',
          modifier: [],
        };
        model.subject.modifier.push(modObject);
      } else {
        let modObject: modifierObject;
        modObject = {
          word: '',
          type: 'modifier',
          modifier: [],
        };
        model.subject.modifier.push(modObject);
      }

      diagonalLine(svgselect, 120, 150, 220, 250, 'modifier', inc_x);

      // Draw Subject Line
      horizontalDropZonesInc(svgselect, 275, 200, 70, 40, 'subject-preposition', inc_x)
        .on('dragover', ev => {
          ev.preventDefault();
        })
        .on('drop', () => {
          l.text = l.text + ' ' + dragged;
          horizontalDropTextActionInc('subject-preposition', dragged, 300, 220, inc_x);
          let modObject: modifierObject;
          modObject = {
            word: dragged,
            type: 'subject',
            modifier: [],
          };
          model.subject.modifier[modifier_x.s_length].modifier.push(modObject);
        });

      s = l.text === null ? null : l.text?.split(' ');

      if (s !== null && s[1] !== null) {
        horizontalDropTextActionInc('subject-preposition', s[1], 300, 220, inc_x);
        let modObject: modifierObject;
        modObject = {
          word: s[1],
          type: 'subject preposition',
          modifier: [],
        };
        model.subject.modifier[modifier_x.s_length].modifier.push(modObject);
      } else {
        let modObject: modifierObject;
        modObject = {
          word: '',
          type: 'subject preposition',
          modifier: [],
        };
        model.subject.modifier[modifier_x.s_length].modifier.push(modObject);
      }

      horizontalLineInc(svgselect, 220, 250, 360, 250, 'subject-preposition', inc_x).on('click', ev => {
        // ev.preventDefault()
        if (selected !== 'subject-preposition') {
          setSelected('subject-preposition');
          select('#subject-preposition-line').attr('stroke', 'blue');
        } else {
          setSelected(null);
          select('#subject-preposition-line').attr('stroke', 'black');
        }
        // console.log(selected);
      });

      if (selected === 'subject-preposition') {
        select('#subject-preposition-line').attr('stroke', 'blue');
      } else {
        select('#subject-preposition-line').attr('stroke', 'black');
      }

      modifier_x.subject += 100;
      modifier_x.s_length += 1;
    } else if (l.parent === 'predicate') {
      if (modifier_x.p_length === 0) {
        group_id = `modifier-drop-12`;
        rect_id = `modifier-drop-rect-12`;
        inc_x = 0;
      } else if (modifier_x.p_length === 1) {
        group_id = `modifier-drop-13`;
        rect_id = `modifier-drop-rect-13`;
        inc_x = 100;
      }

      diagonalDropZones(svgselect, 380, 160, 80, 40, group_id, rect_id, inc_x)
        .on('dragover', ev => {
          ev.preventDefault();
        })
        .on('drop', () => {
          diagonalDropTextAction(group_id, rect_id, dragged, 400, 200, inc_x);
          l.text = l.text !== null ? dragged + l.text : dragged;
          let modObject: modifierObject;
          modObject = {
            word: l.text,
            type: 'modifier',
            modifier: [],
          };
          model.predicate.modifier.push(modObject);
        });

      let s = l.text === null ? null : l.text?.split(' ');

      if (s !== null && s[0] !== null) {
        s[0] = s[0].replace('null', '');
        diagonalDropTextAction(group_id, rect_id, s[0], 400, 200, inc_x);
        let modObject: modifierObject;
        modObject = {
          word: s[0],
          type: 'modifier',
          modifier: [],
        };
        model.predicate.modifier.push(modObject);
      } else {
        let modObject: modifierObject;
        modObject = {
          word: '',
          type: 'modifier',
          modifier: [],
        };
        model.predicate.modifier.push(modObject);
      }

      diagonalLine(svgselect, 320, 150, 420, 250, 'modifier', inc_x);

      // Draw Subject Line
      horizontalDropZonesInc(svgselect, 475, 200, 100, 40, 'predicate-preposition', inc_x)
        .on('dragover', ev => {
          ev.preventDefault();
        })
        .on('drop', () => {
          l.text = l.text + ' ' + dragged;
          horizontalDropTextActionInc('predicate-preposition', dragged, 500, 220, inc_x);
          let modObject: modifierObject;
          modObject = {
            word: dragged,
            type: 'predicate preposition',
            modifier: [],
          };
          model.predicate.modifier[modifier_x.p_length].modifier.push(modObject);
        });

      s = l.text === null ? null : l.text?.split(' ');

      if (s !== null && s[1] !== null) {
        horizontalDropTextActionInc('predicate-preposition', s[1], 500, 220, inc_x);
        let modObject: modifierObject;
        modObject = {
          word: s[1],
          type: 'predicate preposition',
          modifier: [],
        };
        model.predicate.modifier[modifier_x.p_length].modifier.push(modObject);
      } else {
        let modObject: modifierObject;
        modObject = {
          word: '',
          type: 'predicate preposition',
          modifier: [],
        };
        model.predicate.modifier[modifier_x.p_length].modifier.push(modObject);
      }

      horizontalLineInc(svgselect, 420, 250, 560, 250, 'predicate-preposition', inc_x).on('click', ev => {
        // ev.preventDefault()
        if (selected !== 'predicate-preposition') {
          setSelected('predicate-preposition');
          select('#predicate-preposition-line').attr('stroke', 'blue');
        } else {
          setSelected(null);
          select('#predicate-preposition-line').attr('stroke', 'black');
        }
        // console.log(selected);
      });

      if (selected === 'predicate-preposition') {
        select('#predicate-preposition-line').attr('stroke', 'blue');
      } else {
        select('#predicate-preposition-line').attr('stroke', 'black');
      }

      modifier_x.predicate += 100;
      modifier_x.p_length++;
    } else if (l.parent === 'object' || l.parent === 'subject-compliment') {
      if (modifier_x.o_length === 0) {
        group_id = `modifier-drop-14`;
        rect_id = `modifier-drop-rect-14`;
        inc_x = 0;
      } else if (modifier_x.o_length === 1) {
        group_id = `modifier-drop-15`;
        rect_id = `modifier-drop-rect-15`;
        inc_x = 100;
      }

      diagonalDropZones(svgselect, 580, 160, 80, 40, group_id, rect_id, inc_x)
        .on('dragover', ev => {
          ev.preventDefault();
        })
        .on('drop', () => {
          diagonalDropTextAction(group_id, rect_id, dragged, 600, 200, inc_x);
          l.text = l.text !== null ? dragged + l.text : dragged;
          let modObject: modifierObject;
          modObject = {
            word: l.text,
            type: 'modifier',
            modifier: [],
          };
          model.object.modifier.push(modObject);
        });

      let s = l.text === null ? null : l.text?.split(' ');

      if (s !== null && s[0] !== null) {
        diagonalDropTextAction(group_id, rect_id, s[0], 600, 200, inc_x);
        let modObject: modifierObject;
        modObject = {
          word: s[0],
          type: 'modifier',
          modifier: [],
        };
        model.object.modifier.push(modObject);
      } else {
        let modObject: modifierObject;
        modObject = {
          word: '',
          type: 'modifier',
          modifier: [],
        };
        model.object.modifier.push(modObject);
      }

      diagonalLine(svgselect, 520, 150, 620, 250, 'modifier', inc_x);

      // Draw Subject Line
      horizontalDropZonesInc(svgselect, 675, 200, 100, 40, 'object-preposition', inc_x)
        .on('dragover', ev => {
          ev.preventDefault();
        })
        .on('drop', () => {
          l.text = l.text + ' ' + dragged;
          horizontalDropTextActionInc('object-preposition', dragged, 700, 220, inc_x);
          let modObject: modifierObject;
          modObject = {
            word: dragged,
            type: 'object preposition',
            modifier: [],
          };
          model.object.modifier[modifier_x.o_length].modifier.push(modObject);
        });

      s = l.text === null ? null : l.text?.split(' ');

      if (s !== null && s[1] !== null) {
        horizontalDropTextActionInc('object-preposition', s[1], 700, 220, inc_x);
        let modObject: modifierObject;
        modObject = {
          word: s[1],
          type: 'object preposition',
          modifier: [],
        };
        model.object.modifier[modifier_x.o_length].modifier.push(modObject);
      } else {
        let modObject: modifierObject;
        modObject = {
          word: '',
          type: 'object preposition',
          modifier: [],
        };
        model.object.modifier[modifier_x.o_length].modifier.push(modObject);
      }

      horizontalLineInc(svgselect, 620, 250, 760, 250, 'object-preposition', inc_x).on('click', ev => {
        // ev.preventDefault()
        if (selected !== 'object-preposition') {
          setSelected('object-preposition');
          select('#object-preposition-line').attr('stroke', 'blue');
        } else {
          setSelected(null);
          select('#object-preposition-line').attr('stroke', 'black');
        }
        // console.log(selected);
      });

      if (selected === 'object-preposition') {
        select('#object-preposition-line').attr('stroke', 'blue');
      } else {
        select('#object-preposition-line').attr('stroke', 'black');
      }

      modifier_x.object += 100;
      modifier_x.o_length++;
    }
    // Add Subject to modifier
  }
};
