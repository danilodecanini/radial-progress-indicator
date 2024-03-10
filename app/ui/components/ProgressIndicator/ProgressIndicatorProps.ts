export type ProgressIndicatorColorType =
  | "orange"
  | "blue"
  | "green"
  | "purple"
  | "yellow";

export type ProgressIndicatorProps = {
  percentComplete: number;
  color: ProgressIndicatorColorType;
};
