import React from 'react';
import SearchBarComponent from '../search-bar-component/SearchBarComponent';

const CardsComponent = ({ characters = []}) => {

    console.log(characters, 'characters');
    return (
        <div className='row'>
            {
                characters.map((item, index) => (
                    <div key={index} className="col">
                        <div className='card' style={{minWidth: '200px'}}>
                            <img src={item?.image} alt=""/>
                        </div>
                        <div className='card-boby'>
                            <h3 className=''>{item?.name}</h3>
                            <h3 className=''>{item?.status}</h3>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default CardsComponent;