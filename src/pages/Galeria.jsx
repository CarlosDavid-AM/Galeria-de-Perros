import { useState } from 'react';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [responseData, setResponseData] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  }; 

  const handleClick = () => {
    const apiUrl = `https://dog.ceo/api/breed/hound/${encodeURIComponent(inputValue)}/images`;

    fetch(apiUrl)
      .then(response => response.json())
      .then(data => setResponseData(data))
      .catch(error => console.error(error));
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <button onClick={handleClick}>Enviar</button>
      <div>
      {responseData.message && responseData.message.length > 0 ? (
        responseData.message.map((imageUrl, index) => (
          <img key={index} src={imageUrl} alt={`Imagen ${index}`} />
        ))
      ) : (
        <p>No se encontraron imágenes</p>
      )}
    </div>
    </div>
  );
}

export default App;
