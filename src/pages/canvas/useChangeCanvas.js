import { useEffect } from 'react';
import { useLazyGetChangedCanvasQuery } from '../../store/canvasApiSlice';
import { shapesSet } from '../../store/canvasSlice';
import { useDispatch } from 'react-redux';

export const useSubscribeOnChangeCanvas = (id) => {
  const [getChangedCanvas] = useLazyGetChangedCanvasQuery()
  const dispatch = useDispatch()

  const subscribeOnNewComments = async () => {
    try {
      const data = await getChangedCanvas();
      if (data.data._id === id) {
        dispatch(shapesSet(data.data.shapes))
      }
      await subscribeOnNewComments();
    } catch (error) {
      console.log(error)
      setTimeout(() => {
        subscribeOnNewComments();
      }, 1000);
    }
  };

  useEffect(() => {
    subscribeOnNewComments();
  }, []);
}

