//1- Dairenin yarıçapını hesaplayan fonksiyon.
//1- Function that calculates the radius of the circle.

function calculateRadius(area) {
  const pi = Math.PI;
  let radius = Math.sqrt(area / pi);
  return radius;
}

let area = 78.5;
console.log(calculateRadius(area));
