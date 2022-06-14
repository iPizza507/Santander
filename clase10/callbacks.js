let boton = document.getElementById("boton");
let contenedor = document.getElementById("contenedor");
let post = null;

boton.addEventListener("click", function () {
  fetch("http://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((res) => {
      post = res;
      mostrarDatos(post);
    });
});

function mostrarDatos(post) {
  post.map((post, i) => {
    let titulo = document.createElement("h1");
    let contenido = document.createElement("p");

    titulo.innerHTML = i + 1 + "-" + post.tittle;
    contenido.innerHTML = post.body;

    contenedor.appendChild(titulo);
    contenedor.appendChild(contenido);
  });
}
