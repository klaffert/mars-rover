import SearchForm from './SearchForm';
import Rovers from './Rovers';
import { useState } from 'react';

const API_KEY = process.env.REACT_APP_ROVER_API_KEY

function App() {
  const [rovers, setRovers] = useState({
    rover: "opportunity",
    sol: 0,
    camera: ""
  });
  const [isLoaded, setIsLoaded] = useState(false);

  const API = `https://api.nasa.gov/mars-photos/api/v1/rovers/${rovers.rover}/photos?sol=${rovers.sol}&camera=${rovers.camera}&api_key=${API_KEY}`

  const handleChange = (event) => {
    event.preventDefault()

    const value = event.target.value

    setRovers({
      ...rovers,
      [event.target.name]: event.target.type === 'number' ? parseInt(value) : value
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    fetch(API)
      .then(response => response.json())
      .then(data => {
        setRovers(data.photos)
        setIsLoaded(true)
      })
  }



  return (
    <div>
      <SearchForm onChange={handleChange} onSubmit={handleSubmit} />
      {isLoaded && <Rovers rovers={rovers} />}
    </div>
  );
}


export default App;
