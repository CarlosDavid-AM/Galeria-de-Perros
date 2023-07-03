import InfoDog from "./components/InfoDog"
import "./css/dogGallery.css"
import { API_URL } from "./hooks/API_URL"
import ImagePetision from "./hooks/ImagePetision"
import MainBody from "./organism/MainBody"

function Bienvenida() {

  const [dog, cargandoDog] = ImagePetision(`${API_URL}`,"/image/random/3")
  
  if(cargandoDog) return <span>Cargando...</span>

  return(
    <>
      <InfoDog />
      <div className="dog-gallery">
        {dog.map( (dogUrl, index) => (<img key={index} src={dogUrl} alt="Imagen" />) )}
      </div>

      <MainBody/>
    </>
  )
}

export default Bienvenida
