



// bulbasaur
var _condition = "pokemon"
var _pocketmonster = "bulbasaur"

fetch(`https://pokeapi.co/api/v2/${_condition}/${_pocketmonster}`)
.then( res => res.json())
.then(data => {
    console.log(data.sprites)
    const {...img} = data.sprites;
    selector = document.querySelector('#bulbasaur');
    pokeIMG = `<img src="${img.front_default}" id="bulbasaur ">`;
    selector.innerHTML = pokeIMG;
}
    );

// chikorira
var _condition = "pokemon"
var _pocketmonster = "chikorita"

fetch(`https://pokeapi.co/api/v2/${_condition}/${_pocketmonster}`)
.then( res => res.json())
.then(data => {
    console.log(data.sprites)
    const {...img} = data.sprites;
    selector = document.querySelector('#chikorita');
    pokeIMG = `<img src="${img.front_default}" id="chikorita">`;
    selector.innerHTML = pokeIMG;
}
    );

//turtwig
var _condition = "pokemon"
var _pocketmonster = "turtwig"

fetch(`https://pokeapi.co/api/v2/${_condition}/${_pocketmonster}`)
.then( res => res.json())
.then(data => {
    console.log(data.sprites)
    const {...img} = data.sprites;
    selector = document.querySelector('#turtwig');
    pokeIMG = `<img src="${img.front_default}" id="turtwig">`;
    selector.innerHTML = pokeIMG;
}
    );


// snivy
var _condition = "pokemon"
var _pocketmonster = "snivy"

fetch(`https://pokeapi.co/api/v2/${_condition}/${_pocketmonster}`)
.then( res => res.json())
.then(data => {
    console.log(data.sprites)
    const {...img} = data.sprites;
    selector = document.querySelector('#snivy');
    pokeIMG = `<img src="${img.front_default}" id="snivy">`;
    selector.innerHTML = pokeIMG;
}
    );


