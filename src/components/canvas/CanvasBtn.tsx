import React from 'react';

export interface CanvasBtnProps {
  onclick: () => void;
  title: string;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

const CanvasBtn: React.FC<CanvasBtnProps> = ({ onclick, title, Icon }) => {
  return (

    <button id={title} onClick={onclick} className="flex items-center space-x-2 bg-gray-600 font-bold text-lg py-2 px-4 rounded">
      <span>{title}</span>
      <Icon className="h-6 w-6" />
    </button>
  );
};

export default CanvasBtn;
