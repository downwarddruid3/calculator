var n1,n2;

function setup() {
  createCanvas(400, 400);

  num1 = createInput();
  num1.position(10,60)

  num2 = createInput();
  num2.position(200,60) 


  b1 = createButton("ADD")
  b1.position(10,200)
  b1.mousePressed(add)
  
  b2 = createButton("SUBTRACT")
  b2.position(200, 200)
  b2.mousePressed(subtract)

  b3 = createButton("MULTIPLY")
  b3.position(10, 250)
  b3.mousePressed(multiply)
  
  b4 = createButton("DIVIDE")
  b4.position(200, 250)
  b4.mousePressed(divide)
}

function draw() {
  background("black");
  n1 = parseInt(num1.value())
  n2 = parseInt(num2.value())
}

function add(){
  console.log(n1+n2)

}

function subtract(){
  console.log(n1-n2)
}

function multiply(){
  console.log(n1*n2)
}

function divide(){
  console.log(n1/n2)
}