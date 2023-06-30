import InfoDog from "./components/InfoDog"
import "./css/index.css"
import usePetision from "./hooks/usePetision"

function App() {

  const [dog, cargandoDog] = usePetision("/hound/afghan/images/random/3")
  
  if(cargandoDog) return <span>Cargando...</span>

  return(
    <>
      <InfoDog />
      <div className="dog-gallery">
        {dog.map( (dogUrl, index) => (<img key={index} src={dogUrl} alt="Imagen" />) )}
      </div>
    </>
  )
}

export default App
