const API_URL = "http://localhost:3001";

function renderUsers(users) {
  const userListElement = document.querySelector(".user-list");
  userListElement.innerHTML = "";

  users.forEach((user) => {
    const userElement = document.createElement("li");
    userElement.setAttribute("id", user.id);

    const nameElement = document.createElement("p");
    nameElement.innerText = `${user.first_name} ${user.last_name}`;

    const emailElement = document.createElement("span");
    emailElement.innerText = user.email;

    userElement.appendChild(nameElement);
    userElement.appendChild(emailElement);
    userListElement.appendChild(userElement);
  });
}

async function fetchUsers() {
  const url = new URL("/users", API_URL);
  const response = await fetch(url.toString());
  const jsonResponse = await response.json();
  console.log("parsed response", jsonResponse);
  renderUsers(jsonResponse.users);
}

document.addEventListener("DOMContentLoaded", () => {
  fetchUsers();
});
