import { render } from 'preact';
import { useEffect, useState } from 'preact/hooks';
import { nanoid } from 'nanoid';

import { genRArrays, genRInt, genRBool, encode, decode } from './utils';
import {
  Container,
  Circle,
  PatternWrapper,
  PatternContainer,
  FixedCenter,
  Close,
  thinCircle,
  lineBox,
  lineTop,
  lineBottom,
  lineDot,
  ErrorMessage,
} from './elements';
import { rToBool } from './utils';
import { useIsRendered, useQueryString, usePageVisibility } from './hooks';
import type { PatternType } from './types';

import {
  COLORS,
  maxNumCircles,
  minDiameter,
  maxDiameter,
  maxDotDiameter,
  maxNumLines,
  padding,
  maxSize,
  autoUpdate,
  autoUpdateTiming,
} from './consts';

export function Pattern(props: PatternType) {
  const id = nanoid();
  const [_t, setT] = useQueryString('t');
  const [inverse, setInverse] = useState(
    props.inverse !== undefined ? props.inverse : genRBool()
  );
  const [diameter, setDiameter] = useState(
    props.diameter || genRInt(maxDiameter, minDiameter)
  );
  const [numCircles, setNumCircles] = useState(
    props.numCircles !== undefined ? props.numCircles : genRInt(maxNumCircles)
  );
  const [numLines, setNumLines] = useState(
    props.numLines !== undefined ? props.numLines : genRInt(maxNumLines)
  );
  const [rArrs, setRArrs] = useState<number[][]>(
    props.rArrs || genRArrays(numCircles + numLines + 1)
  );
  const [expanded, setExpanded] = useState(props.expanded || false);
  const isRendered = useIsRendered();
  const sizeRatio = maxDiameter / diameter;
  const hoverScale = 1 + Math.log(sizeRatio);
  const expandedScale = Math.min(
    sizeRatio * props.rows,
    sizeRatio * props.columns
  );

  const color = COLORS[inverse ? 'light' : 'dark'];
  const bgColor = COLORS[inverse ? 'dark' : 'light'];

  function update() {
    const newNumCircles = genRInt(maxNumCircles);
    const newNumLines = genRInt(maxNumLines);
    const newRArrs = genRArrays(newNumCircles + newNumLines);
    const newDiameter = genRInt(maxDiameter, minDiameter);
    const newInverse = !inverse;

    setInverse(newInverse);
    setNumCircles(newNumCircles);
    setNumLines(newNumLines);
    setDiameter(newDiameter);
    setRArrs(newRArrs);

    if (expanded) {
      updateEncodedLocation({
        color: COLORS[newInverse ? 'light' : 'dark'],
        bgColor: COLORS[newInverse ? 'dark' : 'light'],
        inverse: newInverse,
        diameter: newDiameter,
        numCircles: newNumCircles,
        numLines: newNumLines,
        rArrs: newRArrs,
      });
    }
  }

  useEffect(() => {
    if (isRendered) {
      update();
    }
  }, [props.trigger]);

  function expand() {
    const newProps = {
      color,
      bgColor,
      inverse,
      diameter,
      numCircles,
      numLines,
      rArrs,
    };

    updateEncodedLocation(newProps);
    setExpanded(true);
    props.setGlobalExpand && props.setGlobalExpand(true);
  }

  function updateEncodedLocation(props: any) {
    const encoded = encode(props);
    setT(encoded);
  }

  function collapse() {
    setExpanded(false);
    props.reset && props.reset();
    props.setGlobalExpand && props.setGlobalExpand(false);
  }

  function onKeyDown(event: KeyboardEvent) {
    if (event.code === 'Space') {
      update();
    } else if (event.code === 'Escape') {
      collapse();
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', onKeyDown);

    return () => {
      document.removeEventListener('keydown', onKeyDown);
    };
  }, []);

  function renderPattern() {
    const outerCircleBorderSize = Math.ceil(diameter / (maxDiameter / 4));

    return (
      <Circle size={diameter} borderSize={outerCircleBorderSize} color={color}>
        {Array(numCircles)
          .fill('')
          .map((_el, i) => (
            <div
              className={thinCircle(
                diameter,
                color,
                rArrs[i][0],
                rArrs[i][1],
                rArrs[i][2],
                rArrs[i][3],
                rArrs[i][4],
                rArrs[i][5]
              )}
            />
          ))}
        {Array(numLines)
          .fill('')
          .map((_el, i) => renderLine(i))}
      </Circle>
    );
  }

  function renderLine(i: number) {
    const lineTopXOffset = rArrs[numCircles + i][6] * diameter;
    const hasDot = rToBool(rArrs[numCircles + i][2]);
    const dotDiameter =
      Math.floor(rArrs[numCircles + i][0] * maxDotDiameter) + 1;
    const dotLOffset = rArrs[numCircles + i][6] * diameter;
    const hollowDot = rToBool(rArrs[numCircles + i][1]);
    const filledHollowDot = rToBool(rArrs[numCircles + i][2]);
    const lineBottomYOffset = rArrs[numCircles + i][4] * diameter;
    const { lineTopStyle, lineWidth } = lineTop(
      diameter / 2,
      color,
      lineTopXOffset,
      rArrs[numCircles + i][i]
    );

    return (
      <div className={lineBox(diameter, rArrs[numCircles + i][5])}>
        <div className={lineTopStyle} />
        {hasDot ? (
          <div
            className={lineDot(
              dotDiameter,
              color,
              bgColor,
              lineWidth,
              dotLOffset,
              hollowDot,
              filledHollowDot
            )}
          />
        ) : null}
        <div className={lineBottom(diameter / 2, lineBottomYOffset)} />
      </div>
    );
  }

  return (
    <PatternWrapper rows={props.rows} columns={props.columns}>
      <PatternContainer
        size={diameter + padding}
        color={color}
        backgroundColor={bgColor}
        id={id}
        onClick={expand}
        expanded={expanded}
        expandedScale={expandedScale}
        hoverScale={hoverScale}
        onmouseenter={() => props.setIsHovering(true)}
        onmouseleave={() => props.setIsHovering(false)}
      >
        {renderPattern()}
      </PatternContainer>
      {expanded && (
        <FixedCenter scale={expandedScale} color={bgColor}>
          {renderPattern()}
        </FixedCenter>
      )}
      {expanded && (
        <Close color={color} onClick={collapse}>
          +
        </Close>
      )}
    </PatternWrapper>
  );
}

function FullScreenPattern({ reset }: { reset: Function }) {
  const [t, setT] = useQueryString('t');

  function resetView() {
    setT('');
    reset();
  }

  try {
    const props = decode(String(t));

    const { clientHeight, clientWidth } = document.body;
    const rows = Math.floor(clientHeight / maxSize);
    const cols = Math.floor(clientWidth / maxSize);
    const sizeRatio = maxDiameter / props.diameter;
    const expandedScale = Math.min(sizeRatio * rows, sizeRatio * cols);

    return (
      <FixedCenter scale={expandedScale} color={props.color}>
        <Pattern expanded {...props} reset={resetView} />
      </FixedCenter>
    );
  } catch (e) {
    return (
      <Container>
        <ErrorMessage>Error parsing pattern</ErrorMessage>
        <Close color={COLORS.dark} onClick={resetView}>
          +
        </Close>
      </Container>
    );
  }
}

export function App() {
  const [coords, setCoords] = useState([0, 0]);
  const [t, _setT] = useQueryString('t');
  const [updateTriggers, setUpdateTriggers] = useState<number[]>([]);
  const [intervalId, setIntervalId] = useState<number>();
  const [isHovering, setIsHovering] = useState(false);
  const [reset, forceReset] = useState(false);
  const [globalExpand, setGlobalExpand] = useState(false);
  const isRendered = useIsRendered();
  const isPageVisible = usePageVisibility();

  function onResize(event: UIEvent) {
    const target = event.target as Window;
    const rows = Math.floor(target.innerHeight / maxSize);
    const cols = Math.floor(target.innerWidth / maxSize);
    setCoords([rows, cols]);
  }

  function updateRandomTrigger() {
    setUpdateTriggers((prevT) => {
      const newT = [...prevT];
      const sortedT = [...newT].sort();

      let rIndex: number;
      do {
        rIndex = genRInt(newT.length);
      } while (newT[rIndex] > sortedT[0]);

      newT[rIndex] = newT[rIndex] + 1;

      return newT;
    });
  }

  function stopAnimation() {
    clearInterval(intervalId);
  }

  function startAnimation() {
    const id = setInterval(updateRandomTrigger, autoUpdateTiming);
    setIntervalId(Number(id));
  }

  useEffect(() => {
    const newTriggers = new Array(coords[0] * coords[1]).fill(0);
    setUpdateTriggers(newTriggers);

    if (!intervalId && autoUpdate) {
      startAnimation();
    }
  }, [coords]);

  useEffect(() => {
    if (intervalId) {
      if (isHovering) {
        stopAnimation();
      } else if (!globalExpand) {
        startAnimation();
      }
    } else if (isRendered && !globalExpand && !isHovering) {
      startAnimation();
    }
  }, [isHovering, globalExpand]);

  useEffect(() => {
    const { clientHeight, clientWidth } = document.body;
    const rows = Math.floor(clientHeight / maxSize);
    const cols = Math.floor(clientWidth / maxSize);
    setCoords([rows, cols]);

    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, []);

  useEffect(() => {
    if (intervalId) {
      if (!isPageVisible) {
        stopAnimation();
      } else {
        startAnimation();
      }
    }
  }, [isPageVisible]);

  if (t && !reset) {
    return (
      <Container>
        <FullScreenPattern reset={() => forceReset(true)} />
      </Container>
    );
  }

  return (
    <Container>
      {Array(coords[0] * coords[1])
        .fill('')
        .map((_el, i) => (
          <Pattern
            rows={coords[0]}
            columns={coords[1]}
            index={i}
            trigger={updateTriggers[i]}
            setIsHovering={setIsHovering}
            setGlobalExpand={setGlobalExpand}
          />
        ))}
    </Container>
  );
}

render(<App />, document.body);
