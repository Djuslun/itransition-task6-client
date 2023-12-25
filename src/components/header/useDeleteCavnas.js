import { useNavigate } from "react-router-dom";
import { useDeleteCanvasMutation } from "../../store/canvasApiSlice";

export const useDeleteCanvas = () => {
  const navigate = useNavigate()
  const [deleteCanvas] = useDeleteCanvasMutation()

  const handleDeleteCanvas = (id) => {
    deleteCanvas(id)
      .unwrap()
      .then(navigate('/'))
      .catch(e => console.log(e))
  }

  return { handleDeleteCanvas }
}