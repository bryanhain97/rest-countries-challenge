import React from 'react';
import './_MainSection.scss';
import CountryCard from '../CountryCard/CountryCard';


export default function MainSection(props) {
    const { locations } = props;
    return (
        <div className="main-section-container">
            <div className="main-section">
                <div className="row">
                    {locations.slice(0,4).map(location => (
                        <CountryCard key={location.name} location={location} />
                    ))}
                </div>
                <div className="row">
                {locations.slice(4,8).map(location => (
                        <CountryCard key={location.name} location={location} />
                    ))}
                </div>
            </div>
        </div>
    )
}
