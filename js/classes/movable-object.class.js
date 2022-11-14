class MovableObject extends DrawableObject {
  speed = 0.15;
  otherDirection = false;
  speedY = 0;
  acceleration = 1;
  energy = 100;
  lastHit = 0;

  hit() {
    this.energy -= 5;
    if (this.energy < 0) {
      this.energy = 0;
    } else {
      this.lastHit = new Date().getTime();
    }
  }

  isHurt() {
    let timepassed = new Date().getTime() - this.lastHit; // Difference in ms
    timepassed = timepassed / 1000 // Difference in s
    return timepassed < 0.5;
  }

  isDead() {
    return this.energy == 0;
  }

  applyGravity() {
    setInterval(() => {
      if (this.isAboveGround() || this.speedY > 0) {
        this.y -= this.speedY;
        this.speedY -= this.acceleration;
      }
    }, 1000 / 25);
  }

  isAboveGround() {
    if( this instanceof ThrowableObject){ // Bottle should always fall
      return true;
    } else {
    return this.y < 220;
    }
  }


  playAnimation(images) {
    //walk animation
    let i = this.currentImage % images.length; // let i = 0 % 6; das ganze heißt modulu. 0 wird durch 6 geteilt und nur der rest (in ganzen zahlen) wird übergeben.
    let path = images[i]; // z.B.: 0 %(modulu) 6 = 0 rest 0 ; 1 % 6 = 0 rest 1; Das heißt i = [0,1,2,3,4,5,0,1,2,3,4,5,0,1...]
    this.img = this.imageCash[path];
    this.currentImage++;
  }

  jump() {
    this.speedY = 13;
  }

  moveRight() {
    this.x += this.speed;
  }

  moveLeft() {
    this.x -= this.speed;
  }

  isColliding(mo) {
    return (this.x +
      this.width > mo.x &&
      this.y + this.height > mo.y &&
      this.x < mo.x &&
      this.y < mo.y + mo.height);
  }
}
