  // charmander
  var _condition = "pokemon"
  var _pocketmonster = "charmander"
  
  fetch(`"https://pokeapi.co/api/v2/type/10/"/${_condition}/${_pocketmonster}`)
  .then( res => res.json())
  .then(data => {
      console.log(data.sprites)
      const {...img} = data.sprites;
      selector = document.querySelector('#jigglypuff');
      pokeIMG = `<img src="${img.front_default}" id="charmander">`;
      selector.innerHTML = pokeIMG;
  }
      );