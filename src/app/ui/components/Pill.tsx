import { MouseEvent } from "react";
import { Tooltip } from "./Tooltip";

type Props = {
  color: "blue" | "yellow" | "red";
  size: "small" | "medium" | "large";
  onClick?: (event: MouseEvent) => void;
  content: string;
};

const colorClasses = {
  blue: "bg-cyan-500",
  yellow: "bg-yellow-500",
  red: "bg-red-500",
};

const hoverColorClasses = {
  blue: "hover:bg-cyan-600",
  yellow: "hover:bg-yellow-600",
  red: "hover:bg-red-600",
};

const sizeClasses = {
  small: "text-xs py-1 px-4",
  medium: "text-sm py-2 px-6",
  large: "text-lg py-3 px-8",
};

export const Pill = ({ color, size, onClick, content }: Props) => {
  const colorClass = colorClasses[color];
  const sizeClass = sizeClasses[size];

  const clickableClass = onClick
    ? `cursor-pointer ${hoverColorClasses[color]}`
    : undefined;

  return (
    <Tooltip content="Edit">
      <div
        className={`${colorClass} ${sizeClass} ${clickableClass} shadow-md rounded-full`}
        onClick={onClick}
      >
        {content}
      </div>
    </Tooltip>
  );
};
