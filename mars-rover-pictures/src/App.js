import SearchForm from './SearchForm';
import Rovers from './Rovers';
import { useState } from 'react';

const API_KEY = process.env.REACT_APP_ROVER_API_KEY

function App() {
  const [state, setState] = useState({
    rover: "opportunity",
    sol: 0,
    camera: ""
  });
  const [rovers, setRovers] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  const API = `https://api.nasa.gov/mars-photos/api/v1/rovers/${state.rover}/photos?sol=${state.sol}&camera=${state.camera}&api_key=${API_KEY}`

  const handleChange = (event) => {
    event.preventDefault()

    const value = event.target.value

    setState({
      ...state,
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
      },
        error => {
          setIsLoaded(true)
        })
  }



  return (
    <div>
      <SearchForm onChange={handleChange} onSubmit={handleSubmit} />
      <div>
        {isLoaded && <Rovers rovers={rovers} />}
      </div>
    </div>
  );
}


export default App;
