import React, { useState } from "react";
import pokemonList from "./pokemonList";
import { choice, formatPoke } from "../helpers";

/* Select element to choose from common pokemon. */
function PokemonSelect({ add, pokemon = pokemonList }) {
  const [pokeIdx, setPokeIdx] = useState(0);
  const handleChange = (evt) => {
    setPokeIdx(evt.target.value);
  };

  return (
    <div>
      <select onChange={handleChange}>
        {pokemon.map((p, idx) => (
          <option key={idx} value={idx}>
            {p}
          </option>
        ))}
      </select>
      <button onClick={() => add(formatPoke, pokemon[pokeIdx])}>
        Catch one!
      </button>
      <button onClick={() => add(formatPoke, choice(pokemon))}>
        I'm feeling lucky
      </button>
    </div>
  );
}

export default PokemonSelect;
