class MovableObject extends DrawableObject {
  speed = 0.15;
  otherDirection = false;
  speedY = 0;
  acceleration = 1;
  energy = 100;
  lastHit = 0;

  offset = {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  };




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
    this.speedY = 15;
  }

  moveRight() {
    this.x += this.speed;
  }

  moveLeft() {
    this.x -= this.speed;
  }

  isColliding(mo) {
    return this.isHorizontalIntersection(mo) && this.isVerticalIntersection(mo);
    
    /*(this.x + this.width - this.offset.right > mo.x + mo.offset.left &&
      this.y + this.height - this.offset.bottom > mo.y + mo.offset.top &&
      this.x + this.offset.left < mo.x + mo.width - mo.offset.right &&
      this.y + this.offset.top < mo.y + mo.height - mo.offset.bottom);*/
  }

  isVerticalIntersection(mo){
    return !(this.isAbove(mo) || this.isBelow(mo));
  }

  isHorizontalIntersection(mo){
    return !(this.isLeftSide(mo) || this.isRightSide(mo));
  }

  isAbove(mo){
    return !(this.getHitBoxBottomPos() > mo.getHitBoxTopPos());
  }

  isBelow(mo){
    return !(this.getHitBoxTopPos() < mo.getHitBoxBottomPos());
  }

  isLeftSide(mo){
    return !(this.getHitBoxRightPos() > mo.getHitBoxLeftPos());
  }

  isRightSide(mo){
    return !(this.getHitBoxLeftPos() < mo.getHitBoxRightPos());
  }

  getHitBoxRightPos(){
    return this.x + this.width - this.offset.right;
  }

  getHitBoxLeftPos(){
    return this.x + this.offset.left;
  }

  getHitBoxTopPos(){
    return this.y + this.offset.top;
  }

  getHitBoxBottomPos(){
    return this.y + this.height - this.offset.bottom;
  }


}
