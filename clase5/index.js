//alert("Hola desde index.js");

var primer = 12;
console.log("nuevo msj");
var segundo = primer + "a";
//let primer;
const primero = 5;

{
  var mascota = "perro";
  console.log(mascota);
}

{
  var mascotas = ["perro", "gato"];
  console.log(mascotas[1]);
}

{
  var edad = 20;
  var ingresos = 300;
  if (edad >= 18) {
    console.log("Podes acceder al paquete premium");
  } else if (ingresos >= 250) {
    console.log("no es posible abrirte la cuenta");
  }
}

{
  var evaluacion;

  switch (edad) {
    case 15:
      evaluacion = "tenes 15 años";
      break; //aca se identa solo..

    case 20:
      evaluacion = "tenes 20 años";
      break;

    default:
      evaluacion = "No tenes ninguna de las edades";
      break;
  }

  console.log("Pudimos evaluar que, " + evaluacion);
}

{
  //             0  1  2  3
  var cheques = [5, 3, 4, 5];
  var valoresChques = [100, 23, 14213, 13];
  //numero de cheque
  //valor
  //firma
  //cantidad

  //si tengo una extension

  for (let i = 0; i <= cheques.length; i++) {
    if (cheques[i] == 5) {
      console.log(valoresChques[i]); // 13
    }
  }
}
