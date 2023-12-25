import HeaderToolBar from "./headerToolBar/headerToolBar"
import { Link } from "react-router-dom"
import HomeIcon from '@mui/icons-material/Home';
import { Button } from "@mui/base";
const Header = ({ }) => {

  return (
    <>
      <header className="p-2 pl-20 w-screen bg-gray-300  shadow-md shadow-gray-400 flex items-center" >
        <Button className="mr-2 hover:bg-black hover:bg-opacity-10 p-2 rounded-md bg-white border border-gray-400 shadow-gray-500 shadow-sm">
          <Link to={'/'} >
            <HomeIcon />
          </Link>
        </Button>
        <HeaderToolBar />
      </header>
    </>
  )
}

export default Header