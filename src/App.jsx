import axios from "axios"
import { LIST_URL } from "./hooks/API_URL"
import { useEffect, useState } from "react"

function App() {

  const [dog, setDog] = useState([]);

  useEffect(() => {
    axios.get(`${LIST_URL}/hound/afghan/images/random/3`)
    .then(resp => {
      setDog(resp.data.message)
    })
    .catch(err => {
      console.log(err)
    })
  }, [])

  return(
    <>
      <h1> hola mundo </h1>
      <div>
        {dog.map(dog => (
          <img key={dog} src={dog} alt="Imagen" />
        ))}
      </div>
    </>
  )
}

export default App
