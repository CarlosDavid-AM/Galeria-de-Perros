import { Link } from "react-router-dom"

const MainBody = () => {
  return(
    <div>
      <h2>¿Qué desea hacer?</h2>
      <a><Link to="/galeria">Inspeccionar la nuestra galeria.</Link></a>
    </div>
  )
}

export default MainBody