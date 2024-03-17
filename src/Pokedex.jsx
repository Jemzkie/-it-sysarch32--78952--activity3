import React, { useState, useEffect } from 'react';
import Pokemon from './Pokemon';

const api = "https://us-central1-it-sysarch32.cloudfunctions.net/pokemon";
function Pokedex() {
  const [pokemon, setPokemon] = useState([]);
  const [language, setLanguage] = useState("english");

  useEffect(() => {
    const fetchAPI = async () => {
      const response = await fetch(api);
      const data = await response.json();
      setPokemon(data)
    };
    fetchAPI();
  }, []);

  return (
    <>
    <div className="wrapper">
        <div className="button-header">
    <button
          className="button"
          onClick={() => {
              setLanguage("english");
          } }
      >
          English
      </button>
      <button
          className="button"
          onClick={() => {
              setLanguage("japanese");
          } }
      >
              Japanese
          </button>
          <button
              className="button"
              onClick={() => {
                  setLanguage("chinese");
              } }
          >
              Chinese
          </button>
          <button
              className="button"
              onClick={() => {
                  setLanguage("french");
              } }
          >
              French
          </button>
    </div>
    <div className="pokedex">
      {pokemon.map(pokemon => (
        <Pokemon
          key={pokemon.id}
          id={pokemon.id}
          name={pokemon.name[language]}
          type={pokemon.type}
          image={pokemon.image}
          HP={pokemon.base.HP}
          Attack={pokemon.base.Attack}
          Defense={pokemon.base.Defense}
          Speed={pokemon.base.Speed}
          Sp_Attack={pokemon.base["Sp. Attack"]}
          Sp_Defense={pokemon.base["Sp. Defense"]}
          
        />
      ))}
     </div>
    </div>
    </>
  );
};

export default Pokedex;