

const Cursor = ({ size, left, top, tool }) => {
  const scale = size / 20
  return (
    <>
      {(tool === 'pen' || tool === 'eraser') && (top > 0 && left > 0) &&
        <div
          style={{ width: 20, height: 20, left: left, top: top, transform: `translate(-50%, 50%) scale(${scale}) `, transformOrigin: 'center' }}
          className='border-4 border-black rounded-full
          absolute top-0 left-0 z-10 pointer-events-none cursor-none '>
        </div>}
    </>
  )
}

export default Cursor