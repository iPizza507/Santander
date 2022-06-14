const payments = [];
const list = document.getElementById("list-group");
const resultBox = document.getElementById("total");
const user = document.getElementById("nombre");
const payment = document.getElementById("pago");
const cash = document.getElementById("ft");

function repartir() {
  //llamarlas
  addElementToList();
  lastAddedToScreen();
  showPaymentInHTML();
}

//agrega elementos a la lista
function addElementToList() {
  payments.push({
    //añadiendo atributos
    name: user.value,
    payment: payment.value,
    date: new Date().toLocaleDateString(),
  });
}

function lastAddedToScreen() {
  const li = document.createElement("li");
  //<li> </li>
  li.classList.add("list-group-item");
  li.innerText = "texto nuevo";
  //<li class="list-group-item"> </li>
  const last = payments.length - 1;
  //ultimo índice
  const current = payments[last];
  // un texto que concatena con los elementos
  li.textContent = `${current.name} : $${current.payment}, ${current.date}`;
  //<li class="list-group-item"> *ACA VA ESTAR* </li>
  //es el objeto
  list.appendChild(li);
}

function sumValues() {
  let total = 0;
  for (const user of payments) total += parseFloat(user.payment);
  return total;
}

function showPaymentInHTML() {
  const total = sumValues();
  const importe = total / payments.length;
  const subTotal = importe.toFixed(2);
  resultBox.innerHTML = `<strong>Total: $${total}</strong>. A cada uno le toca aportar: $${subTotal};`;
}

function download() {
  let a = document.createElement("a");
  //convertir el array de objetos en un JSON
  let file = new Blob([JSON.stringify(payments)], { type: "text/plain" });
  //crea un url
  a.href = URL.createObjectURL(file);
  //le asigna un nombre al archivo
  a.download = "sesión.json";
  a.click();
}
