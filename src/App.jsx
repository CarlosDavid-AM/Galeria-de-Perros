import axios from "axios"
import { API_URL } from "./hooks/API_URL"
import { useEffect, useState } from "react"

function App() {

  const [dogi, useDog] = useState([])

  useEffect(() => {
    axios.get(`${API_URL}/list/all`)
    .then(resp => {
      useDog(resp)
    })
    .catch(err => {
      console.log(err)
    })
  })

  return(
    <>
      <h1> hola mundo </h1>
      <p> {JSON.stringify(dogi)} </p>
    </>
  )
}

export default App
