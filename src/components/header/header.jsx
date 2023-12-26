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
        <Link to={'/'} >
          <Button className="header-button buttons-border">
            <HomeIcon />
          </Button>
        </Link>
        <HeaderToolBar />
        <Button
          onClick={() => handleDeleteCanvas(id)}
          className="header-button buttons-border">
          <DeleteForeverIcon />
        </Button>
      </header>
    </>
  )
}

export default Header