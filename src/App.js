import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import Countries from "./components/Countries/Countries";


function App() {
  return (
    <div className="App">
      <Countries></Countries>
      {/* <ApiCountries></ApiCountries> */}
    </div>
  );
}
/* function ApiCountries() {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  return (
    <div>
      <h1>Loading Countries from API in React</h1>
      <h3>API Data Loaded : {countries.length}</h3>
      {countries.map((country) => (
        <Country name={country.name.common}></Country>
      ))}
    </div>
  );
}
function Country(props) {
  return (
    <div>
      <h5>Country Name: {props.name}</h5>
    </div>
  );
} */

export default App;
