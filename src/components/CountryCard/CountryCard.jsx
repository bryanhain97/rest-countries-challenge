import './_CountryCard.scss';
import React from 'react';

export default function CountryCard(props) {
    const { location } = props;
    return (
        <div className="countrycard-container">
            <div className="countrycard">
                <img src={location.flag} alt={`${location.name}-flag`} className="country-flag"/>
                <h2 className="country-name">{location.name}</h2>
                <div className="country-info">
                    <p>Population: {location.population}</p>
                    <p>Region: {location.region}</p>
                    <p>Capital: {location.capital}</p>
                </div>
            </div>
        </div>
    )
}
