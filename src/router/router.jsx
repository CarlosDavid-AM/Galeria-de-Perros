import { createBrowserRouter } from "react-router-dom";
import Bienvenida from "../Bienvenida";
import Error_404 from "../pages/Error_404";
import Galeria from "../pages/Galeria";

const router = createBrowserRouter([
  {
    path:"/",
    element: <Bienvenida />,
    errorElement: <Error_404 />,
  },
  {
    path: "/galeria",
    element: <Galeria />
  }
])

export default router