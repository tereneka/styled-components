export interface BaseProps {
  children?: any;
  color?:
    | "base"
    | "error"
    | "success"
    | "warning";
  size?: "s" | "m" | "l";
  block?: boolean;
  className?: string;
  [key: string]: any;
}
