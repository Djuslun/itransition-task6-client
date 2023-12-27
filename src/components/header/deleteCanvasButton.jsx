import { Button } from "@mui/base";
import { useDeleteCanvas } from "./useDeleteCavnas";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

const DeleteCanvasButton = ({ id }) => {
  const { handleDeleteCanvas } = useDeleteCanvas()

  return (
    <>
      <Button
        onClick={() => handleDeleteCanvas(id)}
        className="header-button buttons-border">
        <DeleteForeverIcon />
      </Button>
    </>
  )
}

export default DeleteCanvasButton