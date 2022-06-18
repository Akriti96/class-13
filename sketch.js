//sprite library
// https://molleindustria.github.io/p5.play/docs/classes/Sprite.html


// P5.js
//https://p5js.org/reference/



var trex, trex_running;
var ground, groundImage
var invisibleGround
var clouds, cloudsImage

// To load the  assest(imag,audio,gif,video) we use function preload
function preload() {
  trex_running = loadAnimation("trex1.png", "trex3.png", "trex4.png")
  groundImage = loadImage("ground2.png")
  cloudsImage = loadImage("cloud.png")
}

// to create a object onetime we use function setup
function setup() {
  createCanvas(600, 200)

  //create a trex sprite
  trex = createSprite(40, 190, 80, 80)
  trex.addAnimation("trex", trex_running)
  trex.scale = 0.4


  ground = createSprite(300, 190, 600, 10)
  ground.addImage("floor", groundImage)

  invisibleGround = createSprite(300, 196, 600, 10)
  invisibleGround.visible = false



}


// to display the object multiple time we use function draw
function draw() {
  background("white")
  drawSprites()



  if (keyDown("space") && trex.y >= 172) {
    trex.velocityY = -8
  }
  else if (keyDown("up") && trex.y >= 172) {
    trex.velocityY = -8
  }


  //gravity to the trex
  trex.velocityY = trex.velocityY + 0.5

  ground.velocityX = -4

  //infinite ground
  if (ground.x < 0) {
    ground.x = ground.width / 2
  }


  //collide
  trex.collide(invisibleGround)

  // console.log(trex.y)

  // calling function
  createClouds()

}


function createClouds() {
  if (frameCount % 50 === 0) {
    clouds = createSprite(500, 80, 100, 20)
    clouds.addImage("cloudy", cloudsImage)
    clouds.velocityX = -4
    // console.log("display clouds ", frameCount)
    clouds.scale = 0.6
    clouds.y = Math.round(random(80, 150))

    trex.depth = clouds.depth
    trex.depth += 1

    console.log("clouds depth is", clouds.depth)
    console.log("trex depth is", trex.depth)
  }
}
