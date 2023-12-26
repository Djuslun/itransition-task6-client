import { useLayoutEffect, useState } from "react";

export const UseCanvasPreviewSize = (canvasPreviewRef) => {
  const [canvasWidth, setCanvasWidth] = useState(0)

  useLayoutEffect(() => {
    const handleSize = () => {
      const canvasWrapperWidth = canvasPreviewRef.current.getBoundingClientRect().width
      const canvasWrapperPadding = parseInt(getComputedStyle(canvasPreviewRef.current).padding)
      setCanvasWidth(canvasWrapperWidth - canvasWrapperPadding)
    }
    handleSize()
    window.addEventListener('resize', handleSize)

    return () => {
      window.removeEventListener('resize', handleSize)
    }
  }, [canvasPreviewRef.current])

  return canvasWidth
}
