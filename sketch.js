let array = [];
function setup() {
  createCanvas(1000, 1000);
  background(255);

  strokeWeight(4);
  noFill
}

function draw() {

  if (mouseIsPressed == true){
    line(mouseX, mouseY, pmouseX, pmouseY);
    line(width - mouseX, mouseY, width - pmouseX, pmouseY);
    array.push([mouseX, mouseY]);

  }

function keyTyped(){
  if (key === 's'){
    saveCanvas('yourfunnyface', 'png');
  } else if (key === 'd'){
  beginShape;
    for(let i = 0; i < array.length; i++){
      console.log(i);
    }
    curveVertex(array[i][0], array[i][1]);
  }
  endShape;
  return false;
}
}
