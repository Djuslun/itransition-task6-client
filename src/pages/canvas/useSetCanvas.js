import { useDispatch } from 'react-redux';
import { shapesSet } from '../../store/canvasSlice';
import { useEffect } from 'react';
import { useSubscribeOnChangeCanvas } from './useChangeCanvas';
import { useGetCanvasByIdQuery } from '../../store/canvasApiSlice';
import { useNavigate } from 'react-router-dom';

export const useSetCanvas = (id) => {
  const { data, isSuccess, isLoading } = useGetCanvasByIdQuery(id)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  useSubscribeOnChangeCanvas(id)

  useEffect(() => {
    if (data) {
      dispatch(shapesSet(data.shapes))
    }
  }, [isSuccess])

  useEffect(() => {
    if (!isLoading && !data) {
      navigate('/')
    }
  }, [isLoading])

  return isLoading
}