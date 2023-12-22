import { useState } from 'react';

export const useCursor = (tool, clientRect) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const cursorClass = (tool !== 'pen' && tool !== 'eraser') ? '' : 'cursor-none'

  const handleMouseMove = (event) => {
    setPosition({
      x: event.clientX - clientRect.left,
      y: event.clientY - clientRect.top,
    });
  };

  const handleMouseLeave = () => {
    setPosition({
      x: 0,
      y: 0,
    });
  }

  return { position, cursorClass, handleMouseMove, handleMouseLeave }
}