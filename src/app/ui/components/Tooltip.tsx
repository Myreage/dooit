import { useState } from "react";

type Props = {
  content: string;
  children: React.ReactNode;
};

export const Tooltip = ({ content, children }: Props) => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="relative">
      <div
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        {children}
      </div>
      {showTooltip && (
        <div className="absolute -top-1/4 left-full translate-x-1 bg-gray-800 text-white rounded-md py-1 px-2 z-50">
          {content}
        </div>
      )}
    </div>
  );
};
