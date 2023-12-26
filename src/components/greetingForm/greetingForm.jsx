import { useState, useEffect } from "react"
import { setUser } from "../../store/userSlice"
import { useDispatch } from "react-redux"
import { v4 as uuidv4 } from 'uuid';

const GreetingForm = ({ }) => {
  const [open, setOpen] = useState(false)
  const [name, setName] = useState('');
  const dispatch = useDispatch()

  const handleSubmitUser = (event, name) => {
    event.preventDefault()
    if (name) {
      const id = uuidv4()
      dispatch(setUser({ name, id }))
      setOpen(false)
    }
  }

  useEffect(() => {
    setOpen(true)
  }, [])

  return (
    <>
      {open && <div className="bg-black bg-opacity-30 fixed top-0 left-0 w-screen min-h-screen  z-10 ">
        <form onSubmit={(e) => handleSubmitUser(e, name)} className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-max bg-white p-8 flex flex-col gap-4 rounded-md border border-gray-600 shadow-sm shadow-gray-700">
          <h2 className="text-3xl">Enter your name</h2>
          <input
            value={name}
            onChange={e => setName(e.target.value)}
            type="text"
            placeholder="Enter your name"
            className="p-3 border rounded-md border-gray-400 shadow-sm shadow-gray-500" />
          <button
            type="submit"
            className="p-2 rounded-md bg-white mb-2 border border-gray-400 shadow-sm shadow-gray-500"
          >
            Confirm
          </button>
        </form>
      </div>}
    </>
  )
}

export default GreetingForm