// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

// const example = () => {
//   return 'example';
// };

window.pokemon={

  filterName: (data, textPokemon)=>{
    let nameResult =  data.filter(pokemon => pokemon.name.toLowerCase() == textPokemon);
    return nameResult;
    },

  filterType: (data,typePokemon) =>{
    let typeResult = data.filter(pokemon => pokemon.type[0] == typePokemon);
    return typeResult;
    },

  orderAzza: (data, aZza)=>{
    if (aZza == "A-Z"){
      const result= data.sort((a,b)=>{
          if (a.name.toLowerCase() < b.name.toLowerCase()
          ) return -1;
          if (a.name.toLowerCase() > b.name.toLowerCase()
          ) return 1;
          return 0;
      });
      return result;
  } 
  else {
      const result= data.sort((a,b)=>{
          if (a.name.toLowerCase() > b.name.toLowerCase()
          ) return -1;
          if (a.name.toLowerCase() < b.name.toLowerCase()
          ) return 1;
          return 0;
      });
      return result;
  }
  }
};


 



