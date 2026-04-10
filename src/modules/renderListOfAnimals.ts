//Titta i index.html och hitta den UL där listan på djur ska skrivas ut.
//Rendera ut en lista över djurens namn på skärmen
//Varje list-item ska ha en event-lyssnare som kallar på "renderAnimalInfo"
//Typa upp funktionens parameter

import { IAnimal } from "./IAnimal"; 
import renderAnimalInfo from "./renderAnimalInfo.js";

export default function renderListOfAnimals(animals: IAnimal[]) {
  const ul = document.querySelector(".list-of-animals ul");

  if (!ul) return;

  animals.forEach(animal => {
    const li = document.createElement("li");
    li.textContent = animal.name;

    li.addEventListener("click", () => {
      renderAnimalInfo(animal);
    });

    ul.appendChild(li);
  });
} 
