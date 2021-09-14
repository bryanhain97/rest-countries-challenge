import React from 'react'
import './_Searchbar.scss';
import { GiMagnifyingGlass } from 'react-icons/gi';

export default function Searchbar() {
    return (
        <div className="searchbar-container">
            <div className="searchbar">
                <div className="searchbar-input-container">
                    <input placeholder="Search for a country..." className="searchbar-input" type="text" />
                </div>
                <div className="searchbar-select-container">
                    <select type="select" defaultValue={'DEFAULT'} className="searchbar-select">
                        <option value="DEFAULT" disabled>Filter by Region</option>
                        <option value="">Hey</option>
                    </select>
                </div>
            </div>
        </div>
    )
}
