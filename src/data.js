// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

// const example = () => {
//   return 'example';
// };

let filterName= (data, textPokemon)=>{
  let nameResult =  data.filter(pokemon => pokemon.name.toLowerCase() == textPokemon);
  return nameResult;
  };
 window.filterName= filterName;

let filterType= (data,typePokemon) =>{
 let typeResult = data.filter(pokemon => pokemon.type[0] == typePokemon);
 return typeResult;
 };
window.filterType= filterType;

