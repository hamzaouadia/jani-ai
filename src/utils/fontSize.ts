// utils/fontSize.ts
export const fluidFont = (min: string, preferred: string, max: string) =>
  ({
    ["--min" as any]: min,
    ["--preferred" as any]: preferred,
    ["--max" as any]: max,
  } as React.CSSProperties);
