var student={
  name:"Tanvi",
  class:8,
  rolenumber:39,
  favoritesubject:"coding",
  marks:[4,5,20,69,82,82]
}
function setup() {
  createCanvas(400, 400);
  console.log(student.name)
  console.log(student.class)
  console.log(student.rolenumber)
  console.log(student.favoritesubject)
  console.log(student.marks)
}

function draw() {
  background(220);
}