function createCard(data) {
  let div = document.createElement("div");
  div.classList.add("card");
  let figure = document.createElement("figure");
  let img = document.createElement("img");
  img.src = "https://via.placeholder.com/80x80";
  img.alt = "img";
  figure.appendChild(img);
  div.appendChild(figure);
  let div2 = document.createElement("div");
  div2.classList.add("details");
  let p1 = document.createElement("p");
  p1.appendChild(document.createTextNode(data.title));
  let p2 = document.createElement("p");
  p2.appendChild(document.createTextNode(data.date));
  div2.appendChild(p1);
  div2.appendChild(p2);
  let button = document.createElement("button");
  button.id = "deleteCard";
  button.appendChild(document.createTextNode("X"));
  div.appendChild(div2);
  button.addEventListener("click", e => deleteCard(e));
  div.appendChild(button);
  return div;
}

let button = document.getElementById("addCard");
button.addEventListener("click", e => addCard(e));

const addCard = e => {
  e.preventDefault();

  let title = document.getElementById("title").value;
  let date = document.getElementById("date").value;
  let cardBox = document.getElementById("card-box");
  let card = createCard({ title, date });
  cardBox.appendChild(card);
};

const deleteCard = e => {
  let target = e.target.parentElement;
  target.remove();
};
