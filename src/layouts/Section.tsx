import React from "react";
import cn from "classnames";

type SectionProps = React.HTMLAttributes<HTMLDivElement> & {
  id: string;
  type?: "inner" | "outer";
  size?: "sm" | "md" | "lg" | "xl";
};

export const Section: React.FC<SectionProps> = (props) => {
  const { id, className, type = "outer", size = "xl", children } = props;

  const sectionStyles = {
    root: {
      base: "relative h-auto w-full mx-auto",
      size: {
        sm: "max-w-[1024px]",
        md: "max-w-[1200px]",
        lg: "max-w-[1440px]",
        xl: "max-w-[1920px]",
      },
      type: {
        inner: "",
        outer: "px-8 py-24",
      },
    },
  };
  const { root } = sectionStyles;

  return (
    <section
      id={id + "-section"}
      className={cn(
        { [id + "-section"]: id },
        className,
        root.base,
        root.size[size],
        root.type[type]
      )}
    >
      {children}
    </section>
  );
};
