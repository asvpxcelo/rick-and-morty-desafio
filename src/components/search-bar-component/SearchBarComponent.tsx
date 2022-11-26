import React, { useEffect, useState } from 'react';
import './Searchbar.css';

const SearchBarComponent = () => {
    const [search, setSearch] = useState('');

    useEffect(() => {

    }, []);

    return (
        <div className='container'>
        <form>
            <input type="text" placeholder="Search a Guys.."/>
            <button className='button__search'>Search</button>
        </form>
        </div>
    );
}

export default SearchBarComponent;