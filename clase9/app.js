const list = document.getElementById("list-group");
fetch("https:dolarsi.com/api/api.php?type=valoresprincipales")
  .then((data) => data.json())
  .then((data) =>
    data.forEach((e) => {
      console.log(e);
      const li = document.createElement("li");
      li.classList.add("list-group-item");
      li.innerText = `Nombre: ${e.casa.nombre}`;
      list.appendChild(li);
      //aca esta debajo
      const p = document.createElement("p");
      p.innerText = `Compra: $${e.casa.compra} - Venta: $${e.casa.venta}`;
      li.appendChild(p);
    })
  );
