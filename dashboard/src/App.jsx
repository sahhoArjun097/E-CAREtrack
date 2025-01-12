
import { BrowserRouter as Router ,Routes,Route  } from "react-router-dom"
import Dashboard from "./components/Dashboard";
function App(){
  return (
    <>
    <Routes>
      <Router>
        <Route path="/" element={<Dashboard/>}/>
        <Route path="/" element={<Dashboard/>}/>
        <Route path="/" element={<Dashboard/>}/>
        <Route path="/" element={<Dashboard/>}/>
        <Route path="/" element={<Dashboard/>}/>
        <Route path="/" element={<Dashboard/>}/>
        <Route path="/" element={<Dashboard/>}/>
        <Route path="/" element={<Dashboard/>}/>
      </Router>

    </Routes>
    

    
    </>
  )
}

export default App;