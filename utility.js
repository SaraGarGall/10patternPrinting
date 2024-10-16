// PROBLEM: La ultima linea tiene el mismo length que la penultima. Hay que eliminarla o incrementarla en uno.

export function triangle() {
  let width = 10;
  let star = "*";
  let stars = star;

  for (let i = 0; stars.length < width; i = 0) {
    //To add two stars every line, except the first line.
    if (stars.length == 1) {
      stars = "*" + '\n'; //No se como quitar el salto desde la 1ª a la 2ª linea
    } else {
      stars = star.repeat(stars.length + 1)/*+ '\n'*/; //Asi quito los espacios de linea tan grandes
    }
    console.log(stars);
  }
  return stars;
}
