import React, { useEffect, useState } from 'react';
import './Searchbar.css';

const SearchBarComponent = () => {
    const [search, setSearch] = useState('');

    useEffect(() => {

    }, []);

    const handleChange = (event: any) => {
        console.log(event.target.value);
    }

    return (
        <div className='container'>
        <form>
            <input type="text" placeholder="Search a Guys.." onChange={handleChange}/>
            <button className='button__search'>Search</button>
        </form>
        </div>
    );
}

export default SearchBarComponent;