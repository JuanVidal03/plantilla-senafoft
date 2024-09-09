import { BrowserRouter } from "react-router-dom";

import AllRoutes from "./routes/AllRoutes.routes";


const App = () => {

  return (
    <BrowserRouter>
      <AllRoutes/>
    </BrowserRouter>
  )
}

export default App;
