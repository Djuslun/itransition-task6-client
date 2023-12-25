import { Button } from "@mui/base"
import { useCreateCanvasMutation } from "../../store/canvasApiSlice"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
import { useGetAllCanvasesQuery } from "../../store/canvasApiSlice"
import { Stage, Layer } from 'react-konva';
import ShapeComponent from '../../components/canvas/shapeComponent/shapeComponent';

const MainPage = ({ }) => {
  const navigate = useNavigate()
  const [createCanvas, { data, isLoading }] = useCreateCanvasMutation()
  const { data: canvases } = useGetAllCanvasesQuery()

  useEffect(() => {
    if (data?._id) {
      console.log(data?._id)
      navigate(`canvas/${data._id}`)
    }
  }, [data])

  return (
    <div className="p-10 flex-1 flex flex-col">
      <div className="bg-slate-200 flex-1 border border-gray-400 shadow-md p-5 rounded-md">
        <Button
          onClick={() => createCanvas()}
          className="p-5 rounded-md bg-white mb-2 border border-gray-400 shadow-sm shadow-gray-500">+ Create a new canvas</Button>
        <div className="flex flex-wrap gap-2 justify-between">
          {canvases && canvases.map(canvas => {
            return <Button
              key={canvas._id}
              onClick={() => navigate(`canvas/${canvas._id}`)}
              className="p-5 rounded-md bg-white origin-top-left border border-gray-400 shadow-md">
              <Stage
                width={400}
                height={200}
              >
                <Layer scale={{ x: 0.23, y: 0.23 }} >
                  {canvas.shapes?.map((shape, i) => {
                    return <ShapeComponent shape={shape} key={i} />
                  })}
                </Layer>
              </Stage>
            </Button>
          })}
        </div>
      </div>
    </div>
  )
}

export default MainPage