import React, { useEffect, useState } from 'react';

const SearchBarComponent = () => {

    const [search, setSearch] = useState('');

    useEffect(() => {

    }, []);

    return (
        <form>
            <input
            type="text"
            placeholder="Search a Guys.."
            />
        </form>
    );
}

export default SearchBarComponent;