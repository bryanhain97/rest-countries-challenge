import React from 'react';
import './_MainSection.scss';
// import CountryCard from '../CountryCard/CountryCard';


export default function MainSection(props) {
    // let { lightmode, dataJSON} = props; // bool
    // fetch data in App.js Component and pass as props to this Component
    return (
        <div className="main-section-container">
            <div className="main-section">
                <div className="row">
                    {/* {dataJSON.map()} */}
                    {/* <CountryCard lightmode={lightmode}/> */}
                </div>
                <div className="row">
                </div>
            </div>
        </div>
    )
}
