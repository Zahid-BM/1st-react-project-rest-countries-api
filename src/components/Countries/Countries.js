import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'



const Countries = () => {
    const [countries, setCountries] = useState([]);
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])
    return (
        <div>
            <h1>Load API countries and doing it in REACT separate component folder</h1>
            <h2>Found total : <mark>{countries.length}</mark> Countries</h2>
            <div className='country-container'>
                {
                    countries.map(country => <Country countryInfo={country} key={country.cca3}></Country>)

                }
            </div>
        </div>
    );
};

export default Countries;