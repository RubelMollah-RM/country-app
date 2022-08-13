import React, { useEffect, useState } from 'react';
import Country from '../countries2/countries';
import './Countries1.css';

const Countries1 = () => {
    const [country, setCountry] = useState([]);
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountry(data))
    }, [])
    return (
        <div>
            <h1>Fiend new countries={country.length}</h1>

            <div className="countries-container">
                {
                    country.map(country => <Country
                        country={country}
                    ></Country>)
                }
            </div>

        </div>
    );
};

export default Countries1;