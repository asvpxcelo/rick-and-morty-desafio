import React from "react";
import { Caracter } from "../../interfaces/Caracters";
import "./Characters.css";

/**
 * Componente Pai contendo informações dos personagens
 * @param props character
 */

const CharactersComponent = (props: { characters: Array<Caracter> } ) => {
  return (
    <div className="container">
      <div className="characters__column">
        {props?.characters.map((item, index) => {
          return (
            <div key={index} className="characters__images__info">
              <img src={item?.image} alt="" className="characters__image"/>
              <div className="characters__info">
                <h5 className="characters__info__name">{item?.name}</h5>
                <h5 className="characters__info__origin">First seen in: {item?.origin?.name}</h5>
                <h5 className="characters__status">Status: {item?.status}</h5>
                <h5 className="characters_species">Specie: {item?.species}</h5>
                <h5 className="characters__gender">Gender: {item?.gender}</h5>
                <h5 className="characters__location">Last Location: {item?.location?.name}</h5>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CharactersComponent;
