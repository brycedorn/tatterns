import { COLORS } from './consts';

export type Color = typeof COLORS[keyof typeof COLORS];

export type PatternType = {
  color?: Color;
  bgColor?: Color;
  inverse?: boolean;
  diameter?: number;
  numCircles?: number;
  numLines?: number;
  expanded?: boolean;
  rArrs?: number[][];
  rows: number;
  columns: number;
  index: number;
  trigger: number;
  setIsHovering: Function;
  reset?: Function;
  setGlobalExpand?: Function;
};
