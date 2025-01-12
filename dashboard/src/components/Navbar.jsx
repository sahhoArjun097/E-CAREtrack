import { useContext, useState } from "react"
import { Context } from '../main'

function Navbar() {
  const [show, setShow] = useState();
  const { isAuthenticated, setIsAuthenticated } = useContext(Context)
  return (
    <div className="md:w-52 min-h-screen absolute flex-col  bg-slate-300 md:p-2">
      <div className="bg-slate-100 flex-col text-cyan-300"> 

      </div>
    </div>
  )
}

export default Navbar