import HeaderToolBar from "./headerToolBar/headerToolBar"
import { Link } from "react-router-dom"
import HomeIcon from '@mui/icons-material/Home';
import { Button } from "@mui/base";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { useDeleteCanvas } from "./useDeleteCavnas";
import { useParams } from "react-router-dom";

const Header = ({ }) => {
  const { id } = useParams()
  const { handleDeleteCanvas } = useDeleteCanvas()
  return (
    <>
      <header className="p-2 pl-20 w-screen bg-gray-300  shadow-md shadow-gray-400 flex items-center gap-2" >
        <Button className="hover:bg-black hover:bg-opacity-10 p-2 rounded-md bg-white border border-gray-400 shadow-gray-500 shadow-sm">
          <Link to={'/'} >
            <HomeIcon />
          </Link>
        </Button>
        <HeaderToolBar />
        <Button
          onClick={() => handleDeleteCanvas(id)}
          className="hover:bg-black hover:bg-opacity-10 p-2 rounded-md bg-white border border-gray-400 shadow-gray-500 shadow-sm">
          <DeleteForeverIcon />
        </Button>
      </header>
    </>
  )
}

export default Header