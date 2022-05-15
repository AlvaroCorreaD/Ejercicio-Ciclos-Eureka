let claveCorrecta: string = "eureka";
let pass: string = "";

for (let i = 1; i <= 3; i++) {
  pass = prompt("Ingrese la clave, intento N° " + i);
  if (pass == claveCorrecta) {
    console.log("Clave Correcta");
    break;
  } else {
    console.log("Error: Clave Incorrecta");
  }
}
