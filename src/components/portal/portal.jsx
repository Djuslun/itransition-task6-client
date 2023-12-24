import { Portal as MuiPortal } from '@mui/base/Portal';

const Portal = ({ children, container, isActive, menuPosition }) => {

  return (
    <>
      {isActive &&
        <MuiPortal container={() => container.current}>
          {children}
        </MuiPortal>}
      <div
        style={{
          top: `${menuPosition.y + menuPosition.height + 8}px`,
          left: `${menuPosition.x}px`
        }}
        className={`portal__container fixed z-10 bg-white shadow-md shadow-gray-400 rounded-md border-gray-400`}
        ref={container}></div>
    </>
  )
}

export default Portal