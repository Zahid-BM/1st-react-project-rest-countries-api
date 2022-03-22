import React from 'react';
import './Country.css'

const Country = (props) => {
    const { name, area, region, population, flags } = props.countryInfo; /* destructuring after receiving countryInfo as per requirement. LOVE THIS :) */
    return (
        <div className='country'>
            <h3>Name : {name.common}</h3>
            <p><small>Region : {region}</small></p>
            <p>Population : {population}</p>
            <p>Area : {area}</p>
            <img src={flags.png} alt="" />
        </div>
    );
};

export default Country;