import HeaderToolBar from "./headerToolBar/headerToolBar"

const Header = ({ }) => {

  return (
    <>
      <header className="p-2 pl-20 w-screen bg-gray-300  shadow-md shadow-gray-400 flex items-center" >
        <HeaderToolBar />
      </header>
    </>
  )
}

export default Header