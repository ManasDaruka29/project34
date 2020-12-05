
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint
var dog,dogimage;

function preload()
{
	//dogimage=loadImage("dog.png");
}


function setup() {
	createCanvas(500, 500);

	dog=new Dog(20,250,700,100);

	
}

function draw() {
	background(46, 139, 87)
//Dog.display();
}
function readstoke(data){
	food=data.val();
}
function writestoke(x){
	database.ref("/").update({
		food:x
	})
	if(keyWentDown(UP_ARROW)){
		writestoke(food)
		dog.addImage("happydog.png");
}
}