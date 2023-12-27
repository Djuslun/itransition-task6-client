import { useParams } from "react-router-dom";
import HeaderToolBar from "./headerToolBar/headerToolBar"
import HomeButton from "./homeButton";
import ExportImageButton from "./exportImageButton";
import DeleteCanvasButton from "./deleteCanvasButton";

const Header = ({ }) => {
  const { id } = useParams()

  return (
    <>
      <header className="p-2 pl-20 w-screen bg-gray-300  shadow-md shadow-gray-400 flex items-center gap-2" >
        <HomeButton />
        <HeaderToolBar />
        <ExportImageButton id={id} />
        <DeleteCanvasButton id={id} />
      </header>
    </>
  )
}

export default Header