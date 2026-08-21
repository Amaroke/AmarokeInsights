import type { FC, ReactNode } from "react";

const GAP = {
  none: "",
  sm: "space-y-4",
  md: "space-y-6",
  lg: "space-y-12",
} as const;

interface ContainerProps {
  gap?: keyof typeof GAP;
  widePadding?: boolean;
  children: ReactNode;
}

const Container: FC<ContainerProps> = ({
  gap = "none",
  widePadding = false,
  children,
}) => (
  <div
    className={`max-w-6xl mx-auto py-6 md:mb-0 mb-8 ${
      widePadding ? "px-4" : "px-2 md:px-4"
    } ${GAP[gap]}`}
  >
    {children}
  </div>
);

export default Container;
