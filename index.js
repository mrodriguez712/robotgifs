import { transformers } from "./data.js";

const container = document.getElementById('container');
const btn = document.getElementById('btn');

function getRandomGif() {
    const randomNumber = Math.floor(Math.random() * transformers.length)
    return transformers[randomNumber]
}

function getAccess() {
    const robotObject = getRandomGif()
        
    container.innerHTML = 
        `
        <h1>This Program Works</h1>
        <img src="./images/${robotObject.image}" />
        <p>${robotObject.name}</p>
        `
}


btn.addEventListener('click', function(){
    getAccess()
})
