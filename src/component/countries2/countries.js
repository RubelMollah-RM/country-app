import React from 'react';
import './Country.css'
const Country = (props) => {
    const { name, population, area, flags } = props.country;
    return (
        <div className='country-div'>
            <h2>name :{name.common}</h2>
            <img src={flags.png} alt="" />
            <h2>population :{population}</h2>
            <h3>Area :{area}</h3>
        </div>
    );
};

export default Country;