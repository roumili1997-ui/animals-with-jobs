import { IAnimal } from "./IAnimal.js";

export default function renderAnimalInfo(animal: IAnimal) {
  const container = document.querySelector(".animal-info");
  if (!container) return;
  container.innerHTML = "";
  
  const img = document.createElement("img");

  img.src = `./images/${animal.imageUrl}`;


  const name = document.createElement("h2");
  name.textContent = `${animal.name} the ${animal.kindOfAnimal}`;


  const job = document.createElement("p");
  const employed = animal.employmentEndDate ? "not employed" : "employed";
  job.textContent = `${animal.job} - Currently ${employed}`;


  const age = document.createElement("p");
  const currentYear = new Date().getFullYear();
  const animalAge = currentYear - Number(animal.birthYear);
  age.textContent = `Age: ${animalAge} years old.`;


  const skillsTitle = document.createElement("p");
  skillsTitle.textContent = "Skills:";


  const ul = document.createElement("ul");


  if (Array.isArray(animal.skills)) {
    animal.skills.forEach(skill => {
      const li = document.createElement("li");
      li.textContent = skill;
      ul.appendChild(li);

    });


  } else if (typeof animal.skills === "string") {
    const li = document.createElement("li");
    li.textContent = animal.skills;
    ul.appendChild(li);
  }

  container.append(img, name, job, age, skillsTitle, ul);
}