import { useRef, useState, useLayoutEffect } from 'react';

export const useCanvasSize = () => {
  const wrapperRef = useRef(null)
  const [scaleY, setScaleY] = useState(0)
  const [scaleX, setScaleX] = useState(0)
  const [clientRect, setClientRect] = useState({})

  useLayoutEffect(() => {
    const handleSize = () => {
      const canvasSizeY = document.documentElement.clientHeight
      const canvasSizeX = document.documentElement.clientWidth
      setScaleY((canvasSizeY - 100) / 800)
      setScaleX((canvasSizeX - 100) / 1840)
      setClientRect(wrapperRef.current.getBoundingClientRect())
    }
    handleSize()
    window.addEventListener('resize', handleSize)

    return () => {
      window.removeEventListener('resize', handleSize)
    }
  }, [scaleY, scaleX, clientRect.width])

  return { wrapperRef, scaleY, scaleX, clientRect }
}