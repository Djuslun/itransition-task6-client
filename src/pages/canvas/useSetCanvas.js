import { useDispatch } from 'react-redux';
import { shapesSet } from '../../store/canvasSlice';
import { useEffect } from 'react';
import { useSubscribeOnChangeCanvas } from './useChangeCanvas';
import { useGetCanvasByIdQuery } from '../../store/canvasApiSlice';

export const useSetCanvas = (id) => {
  const { data, isSuccess, isLoading } = useGetCanvasByIdQuery(id)
  const dispatch = useDispatch()
  useSubscribeOnChangeCanvas(id)

  useEffect(() => {
    if (data) {
      console.log(data)
      dispatch(shapesSet(data.shapes))
    }
  }, [isSuccess])

  return isLoading
}