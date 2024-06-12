let cards = document.getElementById("cards");
let url = "https://jsonplaceholder.typicode.com/users";

fetch(url)
  .then((response) => response.json())
  .then((res) => getData(res))
  .catch((err) => console.log(err));

function getData(data) {
  for (const user of data) {
    let card = document.createElement("div");
    let h3 = document.createElement("h3");
    let pUsername = document.createElement("p");
    let pAddress = document.createElement("p");
    let pEmail = document.createElement("p");

    h3.innerHTML = `Name: (user.name)`;
    pUsername.innerHTML = `Username: (user.username)`;
    pAddress.innerHTML = `Address: (user.address.street)`;
    pEmail.innerHTML = `Email: (user.email)`;
    card.classList.add("card");
    card.appendChild(h3);
    card.appendChild(pUsername);
    card.appendChild(pAddress);
    card.appendChild(pEmail);
    cards.appendChild(card);
  }
}