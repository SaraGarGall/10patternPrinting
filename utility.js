export function triangle() {
  let width = 10;
  let star = "*";
  let concatedStars = star;

  for (let i = 0; concatedStars.length < width; i++) {
    concatedStars = star.repeat(i + 1);
    console.log(concatedStars);
  }
  return concatedStars;
}
