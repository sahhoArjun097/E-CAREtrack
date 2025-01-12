import { useContext, useState } from "react"
import con

function Navbar() {
    const [show,setShow] = useState();
    const { isAuthenticated, setIsAuthenticated } = useContext(Context)
  return (
    <div>Navbar</div>
  )
}

export default Navbar