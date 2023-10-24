import React from "react";
import cn from "classnames";
import { iconFontStyles } from "../styles";
import { SizeEnum } from "../shared";

type TIconFontProps = {
  className?: string;
  name: string | undefined;
  size?: keyof typeof SizeEnum;
};

export const IconFont: React.FC<TIconFontProps> = (props) => {
  const { className, name, size = "md" } = props;
  const { root } = iconFontStyles;
  return (
    <i
      className={cn(
        { ["cm-icon-" + name]: name },
        root.base,
        root.sizes[size],
        className
      )}
    />
  );
};
