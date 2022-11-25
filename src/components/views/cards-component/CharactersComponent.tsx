import React, { useState } from "react";
import SearchBarComponent from "../search-bar-component/SearchBarComponent";
import "./Characters.css";

const CharactersComponent = ({ characters }: any) => {
  console.log(characters, 'characters');
  return (
    <div className="container">
      <div className="characters__row">
        {characters.map((item, index) => {
          return (
            <div key={index} className="characters__col">
              <img src={item?.image} alt="" className="characters__image" />
              <div className="characters__info">
                <h3 className="">{item?.name}</h3>
                <h3 className="">{item?.status}</h3>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CharactersComponent;