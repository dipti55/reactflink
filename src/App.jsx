import { BrowserRouter,Route, Routes } from "react-router-dom"
import User from "./layouts/User"



function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        {/* <Route element={<UserLayouts/>}> */}
          <Route path="/" element={<User/>}/>
        {/* </Route> */}
      </Routes>
    </BrowserRouter>

      <p>
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
