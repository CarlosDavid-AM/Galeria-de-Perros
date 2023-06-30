import axios from "axios"
import { useEffect, useState } from "react"
import { LIST_URL } from "./API_URL"

const usePetision = (enpoint) => {

  const [dog, setDog] = useState([]);
  const [cargango, setCargando] = useState(false)

  useEffect(() => {

    setCargando(true)

    axios.get(`${LIST_URL}${enpoint}`)
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

export default usePetision