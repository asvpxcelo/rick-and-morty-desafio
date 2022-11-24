import React from 'react';
import SearchBarComponent from './SearchBar';
const CardsComponent = ({ characters = []}) => {
    return (
        <div className='row'>
            <SearchBarComponent />
            {
                characters.map((item, index) => (
                    <div key={index} className="col">
                        <div className='card' style={{minWidth: '200px'}}>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default CardsComponent;