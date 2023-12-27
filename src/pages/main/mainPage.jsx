import { Button } from "@mui/base"
import { useCreateCanvasMutation } from "../../store/canvasApiSlice"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
import { useGetAllCanvasesQuery } from "../../store/canvasApiSlice"
import CanvasPreview from "./canvasPreview/canvasPreview"
import Loader from '../../ui/loader';

const MainPage = ({ }) => {
  const navigate = useNavigate()
  const [createCanvas, { data, isLoading }] = useCreateCanvasMutation()
  const { data: canvases, isLoading: isCanvasesLoading } = useGetAllCanvasesQuery()

  useEffect(() => {
    if (data?._id) {
      navigate(`canvas/${data._id}`)
    }
  }, [data])

  return (
    <>
      <div className="p-10 flex-1 flex flex-col">
        <div className="bg-slate-200 flex-1 border border-gray-400 shadow-md p-5 rounded-md">
          <Button
            onClick={() => createCanvas()}
            className="p-5 rounded-md bg-white mb-2 border border-gray-400 shadow-sm shadow-gray-500">+ Create a new canvas</Button>
          <div className="grid gap-2 lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
            {canvases && canvases.map(canvas => {
              return <CanvasPreview canvas={canvas} key={canvas._id} />
            })}
          </div>
        </div>
      </div>
      <Loader open={isLoading || isCanvasesLoading} />
    </>
  )
}

export default MainPage