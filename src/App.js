import React, { useState } from "react";
import axios from "axios";
import SearchCity from "./components/SearchCity";
import WeatherCard from "./components/WeatherCard";
import ErrorMessage from "./components/ErrorMessage";

function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");
  const [errorMessage, setErrorMessage] = useState({
    text: "",
    error: false
  })

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=b68955c8fc03157b607d710fc31f2a8b`;
       
    const onSearchLocation = async(event) => {
    setErrorMessage(false);
    try {
      if (event.key === 'Enter') {
            const response = await axios.get(url);
              setData(response.data);
      } 
    } catch(error) {
      setErrorMessage({text: "Please type in a valid city name!", error: true});
    } 
  } 
 
  const onSearchChange = (event) => setLocation(event.target.value);

return (
    <div className="app">
      <SearchCity searchLocation={onSearchLocation} searchChange={onSearchChange} />
       
       { !errorMessage.error && 
         <WeatherCard data={data} />
       }

       { errorMessage.error && 
         <ErrorMessage />
       }
    </div>
  );
}

export default App;
