import { useEffect } from 'react';
import { useLazyGetChangedCanvasQuery } from '../../store/canvasApiSlice';
import { shapesSet, setLastUpdater } from '../../store/canvasSlice';
import { useDispatch, useSelector } from 'react-redux';

export const useSubscribeOnChangeCanvas = (id) => {
  const [getChangedCanvas] = useLazyGetChangedCanvasQuery()
  const dispatch = useDispatch()
  const { user } = useSelector(store => store.user)

  const subscribeOnNewComments = async () => {
    try {
      const data = await getChangedCanvas();
      if ((data.data._id === id) && (data.data.lastUpdater.id !== user.id)) {
        dispatch(shapesSet(data.data.shapes))
        dispatch(setLastUpdater(data.data.lastUpdater))
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

