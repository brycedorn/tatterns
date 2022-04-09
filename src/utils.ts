export function genRArrays(nArrays: number): number[][] {
  return new Array(nArrays).fill(null).map(() => genRs(7));
}

export function genRs(nRs: number): number[] {
  return new Array(nRs).fill(null).map(() => Number(Math.random().toFixed(2)));
}

export function genRInt(maxN: number, minN: number = 0): number {
  return Math.max(Math.floor(Math.random() * maxN), minN);
}

export function genRBool(): boolean {
  return rToBool(Math.random());
}

export function rToBool(r: number): boolean {
  return r < 0.5;
}

export function encode(obj: any): string {
  return btoa(JSON.stringify(obj));
}

export function decode(str: string): any {
  return JSON.parse(atob(str));
}

export function pushUrlUpdate(value: string) {
  const {
    location: { protocol, host, pathname },
  } = window;
  const newurl = `${protocol}//${host}${pathname}${value}`;

  window.history.pushState({ path: newurl }, '', newurl);
}

export function setQueryStringValue<T>(key: string, value: string) {
  const searchParams = new URLSearchParams(window.location.search);

  if (value) {
    searchParams.set(key, value);
  } else {
    searchParams.delete(key);
  }

  const stringified = searchParams.toString();
  pushUrlUpdate(`${stringified.length > 0 ? '?' : ''}${stringified}`);
}

export function getQueryStringValue(key: string): string | null {
  const values = new URLSearchParams(window.location.search);
  return values.get(key);
}
