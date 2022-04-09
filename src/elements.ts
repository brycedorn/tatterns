import { h } from 'preact';
import picostyle from 'picostyle';

import type { Color } from './types';
import { rToBool } from './utils';
import {
  COLORS,
  enableTransitions,
  hoverEasingFn,
  patternEasingFn,
  hoverAnimationTiming,
  patternAnimationTiming,
} from './consts';

// @ts-ignore
const { style, css } = picostyle(h, { returnObject: true });

const flexCenter = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

export const Container = style('div')({
  ...flexCenter,
  background: COLORS.lighter,
  width: '100%',
  height: '100vh',
  flexDirection: 'row',
  flexWrap: 'wrap',
  overflow: 'hidden',
});

export const ErrorMessage = style('h1')({
  fontFamily: 'Helvetica',
  fontWeight: '100',
  cursor: 'default',
  color: COLORS.dark,
});

export const PatternWrapper = style('div')(
  ({
    hide,
    rows,
    columns,
  }: {
    hide: boolean;
    rows: number;
    columns: number;
  }) => ({
    ...flexCenter,
    height: `${hide ? 0 : 100 / rows}vh`,
    width: `${hide ? 0 : 100 / columns}%`,
  })
);

export const FixedCenter = style('div')(
  ({ color, scale }: { color: Color; scale: number }) => ({
    ...flexCenter,
    background: color,
    position: 'fixed',
    top: '0px',
    left: '0px',
    right: '0px',
    bottom: '0px',
    zIndex: '10',
    transform: `scale(${scale})`,
  })
);

const expandedStyles = (scale: number) => ({
  width: '100%',
  height: '100vh',
  position: 'fixed',
  zIndex: '1',
  transform: `scale(${scale})`,
});

const nonExpandedStyles = (scale: number) => ({
  borderRadius: '10px',
  transform: 'scale(1)',
  ':hover': {
    zIndex: '1',
    cursor: 'pointer',
    transform: `scale(${scale})`,
  },
});

export const PatternContainer = style('div')(
  ({
    backgroundColor,
    size,
    isExpanded,
    expandedScale,
    hoverScale,
  }: {
    backgroundColor: Color;
    size: number;
    isExpanded: boolean;
    expandedScale: number;
    hoverScale: number;
  }) => ({
    ...flexCenter,
    // overflow: 'hidden',
    backgroundColor: backgroundColor,
    height: `${size}px`,
    width: `${size}px`,
    transition: enableTransitions
      ? `background-color ${hoverAnimationTiming}ms, width ${hoverAnimationTiming}ms ${hoverEasingFn}, height ${hoverAnimationTiming}ms ${hoverEasingFn}, transform ${hoverAnimationTiming}ms ${hoverEasingFn}`
      : '',
    ...(isExpanded
      ? expandedStyles(expandedScale)
      : nonExpandedStyles(hoverScale)),
  })
);

const absoluteCta = {
  position: 'absolute',
  zIndex: '10',
};

export const Close = style('span')(({ color }: { color: Color }) => ({
  ...absoluteCta,
  top: '0',
  right: '0',
  padding: '50px',
  transform: 'rotate(45deg)',
  fontSize: '4em',
  lineHeight: '0',
  cursor: 'pointer',
  color: color,
}));

export const Circle = style('div')(
  ({
    size,
    color,
    borderSize,
  }: {
    size: number;
    color: Color;
    borderSize: number;
  }) => ({
    background: 'rgba(0,0,0,0)',
    width: `${size}px`,
    height: `${size}px`,
    border: `${color} solid ${borderSize}px`,
    borderRadius: '50%',
    overflow: 'hidden',
    position: 'absolute',
    transition: enableTransitions
      ? `height ${patternAnimationTiming}ms ${patternEasingFn}, width ${patternAnimationTiming}ms ${patternEasingFn}`
      : '',
  })
);

export const thinCircle = (
  size: number,
  color: Color,
  r1: number,
  r2: number,
  r3: number,
  r4: number,
  r5: number,
  r6: number
) => {
  const offsetVariance = 10;
  const sizeVariance = 100;
  const sizeWithVariance = size + r1 * sizeVariance;
  const xOffsetKey = rToBool(r2) ? 'left' : 'right';
  const yOffsetKey = rToBool(r3) ? 'top' : 'bottom';

  const maxBorderSize = 2;
  const isSmall = size < 80;
  const staticBorderWidth = isSmall ? 0.5 : 1;
  let borderWidthWithVariance = 0;
  if (!isSmall) {
    borderWidthWithVariance = Math.max(r6 * maxBorderSize, staticBorderWidth);
  }
  const borderWidth = isSmall ? staticBorderWidth : borderWidthWithVariance;

  return css({
    background: 'rgba(0,0,0,0)',
    width: `${sizeWithVariance}px`,
    height: `${sizeWithVariance}px`,
    border: `${color} solid ${borderWidth}px`,
    position: 'absolute',
    borderRadius: '50%',
    transition: enableTransitions
      ? `height ${patternAnimationTiming}ms ${patternEasingFn}, width ${patternAnimationTiming}ms ${patternEasingFn}, left ${patternAnimationTiming}ms ${patternEasingFn}, top ${patternAnimationTiming}ms ${patternEasingFn}, right ${patternAnimationTiming}ms ${patternEasingFn}, bottom ${patternAnimationTiming}ms ${patternEasingFn}`
      : '',
    [xOffsetKey]: `${r4 * offsetVariance}px`,
    [yOffsetKey]: `${r5 * offsetVariance}px`,
  });
};

export const lineBox = (size: number, r: number) =>
  css({
    width: `${size}px`,
    transform: `rotate(${r * 360}deg)`,
    position: 'absolute',
    height: `${size}px`,
    transition: enableTransitions
      ? `height ${patternAnimationTiming}ms ${patternEasingFn}, width ${patternAnimationTiming}ms ${patternEasingFn}, transform ${patternAnimationTiming}ms ${patternEasingFn}`
      : '',
  });

export const lineTop = (size: number, color: Color, r1: number, r2: number) => {
  const staticLineWidth = 1;
  const maxLineSize = 2;
  const isSmall = size < 50;
  let lineWidthWithVariance = 0;
  if (!isSmall) {
    lineWidthWithVariance = Math.floor(r2 * maxLineSize) + 0.5;
  }
  const lineWidth = isSmall ? staticLineWidth : lineWidthWithVariance;

  return {
    lineWidth,
    lineTopStyle: css({
      height: `${size + r1}px`,
      borderBottom: `${color} solid ${lineWidth}px`,
      transition: enableTransitions
        ? `height ${patternAnimationTiming}ms ${patternEasingFn}, position ${patternAnimationTiming}ms ${patternEasingFn}`
        : '',
    }),
  };
};

export const lineBottom = (size: number, r: number) =>
  css({
    height: `${size + r}px`,
  });

export const lineDot = (
  diameter: number,
  color: Color,
  bgColor: Color,
  lineWidth: number,
  dotLOffset: number,
  hollowDot: boolean,
  filledHollowDot: boolean
) => {
  const hasInnerDot = filledHollowDot && diameter > 2;
  const innerDotDiameter = diameter - 2;

  return css({
    position: 'relative',
    bottom: `${
      (diameter + (hollowDot ? 2 * lineWidth : 0)) / 2 + lineWidth / 2
    }px`,
    left: `${dotLOffset}px`,
    background: hollowDot ? bgColor : color,
    border: hollowDot ? `${color} solid ${lineWidth}px` : '',
    width: `${diameter}px`,
    height: `${diameter}px`,
    borderRadius: '50%',
    transition: enableTransitions
      ? `height ${patternAnimationTiming}ms ${patternEasingFn}, width ${patternAnimationTiming}ms ${patternEasingFn}, transform ${patternAnimationTiming}ms ${patternEasingFn}, left ${patternAnimationTiming}ms ${patternEasingFn}, bottom ${patternAnimationTiming}ms ${patternEasingFn}`
      : '',
    '::after': hasInnerDot
      ? {
          width: `${innerDotDiameter}px`,
          height: `${innerDotDiameter}px`,
          top: `${diameter / 2 - innerDotDiameter / 2}px`,
          left: `${diameter / 2 - innerDotDiameter / 2}px`,
          position: 'absolute',
          content: 'no-open-quote',
          borderRadius: '50%',
          background: color,
        }
      : {},
  });
};
