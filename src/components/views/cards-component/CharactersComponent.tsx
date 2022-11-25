import React, { useState } from "react";
import "./Characters.css";

const CharactersComponent = ({ characters }: any) => {
  console.log(characters, "characters");
  return (
    <div className="container">
      <div className="characters__row">
        {characters.map((item, index) => {
          return (
            <div key={index} className="characters__col">
              <img src={item?.image} alt="" className="characters__image" />
              <div className="characters__info">
                <h5 className="">Name: {item?.name}</h5>
                <h5 className="">Status: {item?.status}</h5>
                <h5 className="">Espécie: {item?.species}</h5>
                <h5 className="">Gênero: {item?.gender}</h5>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CharactersComponent;
