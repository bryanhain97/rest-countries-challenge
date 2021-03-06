import React from 'react'
import './_Searchbar.scss';
import { GiMagnifyingGlass } from 'react-icons/gi';
// import { IoIosArrowDown } from 'react-icons/io';

export default function Searchbar(props) {
    const { dataJSON } = props;
    let regions = [...new Set(dataJSON.map(object => object.region))].filter(x => x !== "");
    return (
        <div className="searchbar-container">
            <div className="searchbar">
                <div className="searchbar-input-container">
                    <input list="countries" placeholder="Search for a country..." className="searchbar-input" type="text" />
                    <datalist id="countries">
                        {dataJSON.map(option => (
                            <option key={option.name} value={option.name}>{option.name}</option>
                        ))}
                    </datalist>
                    <GiMagnifyingGlass className="searchbar-input-icon" />
                </div>
                <div className="searchbar-select-container">
                    <select type="select" defaultValue={'DEFAULT'} className="searchbar-select">
                        <option value="DEFAULT" disabled>Filter by Region</option>
                        {regions.map(region => (
                            <option key={region} value={regions}>{region}</option>
                        ))}
                    </select>
                    {/* <IoIosArrowDown className="searchbar-select-icon" /> */}
                </div>
            </div>
        </div>
    )
}
