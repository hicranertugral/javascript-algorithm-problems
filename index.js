//1- Dairenin yarıçapını hesaplayan fonksiyon.
//1- Function that calculates the radius of the circle.

// Answer A
function calculateRadiusA(area) {
  const pi = Math.PI;
  let radius = Math.sqrt(area / pi);
  return radius;
}

let area = 80;
console.log(calculateRadiusA(area));

// Answer B
function calculateRadiusB(area){
    const pi = 3.14159
    let radius = (area / pi) ** 0.5;
    return radius
}
console.log(calculateRadiusB(area));
