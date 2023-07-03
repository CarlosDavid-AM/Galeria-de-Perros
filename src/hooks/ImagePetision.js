import axios from "axios"
import { useEffect, useState } from "react"

const ImagePetision = (ruta, enpoint) => {

  const [dog, setDog] = useState([]);
  const [cargango, setCargando] = useState(false)

  useEffect(() => {

    setCargando(true)

    axios.get(`${ruta}${enpoint}`)
    .then(resp => {
      setCargando(false)
      setDog(resp.data.message)
    })
    .catch(err => {
      setCargando(false)
      console.log(err)
    })
  }, [])

  return [dog, cargango]
}

export default ImagePetision