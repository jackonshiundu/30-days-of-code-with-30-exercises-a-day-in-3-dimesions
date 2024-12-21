//bject Classes
/* Write a JavaScript program to get the volume of a cylindrical with four decimal places using object classes.
Volume of a cylinder : V = πr2h
where r is the radius and h is the height of the cylinder. */

function ParametersofACylinder(diameter, height) {
  this.diameter = diameter;
  this.height = height;
}

ParametersofACylinder.prototype.volume = function () {
  let vol = Math.PI * this.height * Math.pow(this.diameter / 2, 2);
  return vol;
};

let cynderVol = new ParametersofACylinder(14, 20);
console.log(cynderVol.volume().toFixed(4));
