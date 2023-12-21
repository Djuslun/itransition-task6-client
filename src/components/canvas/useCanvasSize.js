import { useRef, useState, useLayoutEffect } from 'react';

export const useCanvasSize = () => {
  const wrapperRef = useRef(null)
  const [scaleY, setScaleY] = useState(0)
  const [scaleX, setScaleX] = useState(0)
  const [height, setHeight] = useState(0)
  const [width, setWidth] = useState(0)

  useLayoutEffect(() => {
    const handleSize = () => {
      const canvasSizeY = document.documentElement.clientHeight
      const canvasSizeX = document.documentElement.clientWidth
      setScaleY((canvasSizeY - 100) / 800)
      setScaleX((canvasSizeX - 100) / 1840)
      setHeight(wrapperRef.current.getBoundingClientRect().height)
      setWidth(wrapperRef.current.getBoundingClientRect().width)
    }
    handleSize()
    window.addEventListener('resize', handleSize)

    return () => {
      window.removeEventListener('resize', handleSize)
    }
  }, [height, width, scaleY, scaleX])

  return { wrapperRef, scaleY, scaleX, height, width }
}