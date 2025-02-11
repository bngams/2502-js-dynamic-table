// entetes js
import { handleFormSubmit } from "./submit.js";
// import { axios } from "node_modules/axios/dist/axios.js";

let users = [];

document.addEventListener("DOMContentLoaded", async () => {
  await loadDataFromDummyjson(); // Appeler la fonction pour charger les données
  populateTable(); // Appeler la fonction pour remplir le tableau
  handleFormSubmit(); // Appeler la fonction pour gérer le submit du formulaire
});

async function loadDataFromDummyjson() {
  const response = await fetch("https://dummyjson.com/users?limit=10");
  const data = await response.json();
  /* for (user of data.users) {
    users.push({ firstname: user.name, lastname: user.fullName, email: user.email });
  } */
  users = data.users.map((user) => ({
    firstname: user.firstName,
    lastname: user.lastName,
    email: user.email,
  }));
}

async function loadDataFromJsonPlaceholder() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  if(response.ok) {
    const data = await response.json();
    // TODO: gerer erreur
    // Si pas d'erreur : Initialiser la collection `users`
    users = data;
  }
}

function populateTable() {  
  console.log("populateTable");
  // Parcourir la collection `users` et appeler addRow pour chaque utilisateur
  users.forEach((user) => {
    addRow(user.firstname, user.lastname, user.email);
  });

  // ou boucle for of
  /* for(item of users){
    addRow(item.firstname, item.lastname, item.email);
  } */
}

function addRowInnerHTML(firstname, lastname, email) {
  const tbody = document.querySelector("tbody");
  tbody.innerHTML += `
    <tr>
      <td>${firstname}</td>
      <td>${lastname}</td>
      <td>${email}</td>
    </tr>
  `;
}

function addRow(firstname, lastname, email) {
  const tbody = document.querySelector("tbody");
  const tr = document.createElement("tr");

  const tdFirstname = document.createElement("td");
  tdFirstname.textContent = firstname;
  tr.appendChild(tdFirstname);

  const tdLastname = document.createElement("td");
  tdLastname.textContent = lastname;
  tr.appendChild(tdLastname);

  const tdEmail = document.createElement("td");
  tdEmail.textContent = email;
  tr.appendChild(tdEmail);

  tbody.appendChild(tr);
}

function addRowInsertRow(firstname, lastname, email) {
  const tbody = document.querySelector("tbody");
  const tr = tbody.insertRow();
  tr.insertCell().textContent = firstname;
  tr.insertCell().textContent = lastname;
  tr.insertCell().textContent = email;
}
