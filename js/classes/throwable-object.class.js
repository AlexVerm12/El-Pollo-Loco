class ThrowableObject extends MovableObject {
  y = 350;
  width = 60;
  height = 75;
  IMAGES = [
    "./img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png",
    "./img/6_salsa_bottle/bottle_rotation/2_bottle_rotation.png",
    "./img/6_salsa_bottle/bottle_rotation/3_bottle_rotation.png",
    "./img/6_salsa_bottle/bottle_rotation/4_bottle_rotation.png"
  ];

  constructor(x, y) {
    super().loadImage(this.IMAGES[0]);
    this.loadImages(this.IMAGES);
    this.y = y;
    this.x = x;
    this.throw(100, 100);
    this.animate();
  }

  throw() {
    this.speedY = 15;
    this.applyGravity();
    setInterval(() => {
      this.x += 5;
    }, 25)
  }

  animate() {
    setInterval(() => {
      let i = this.currentImage % this.IMAGES.length; // let i = 0 % 6; das ganze heißt modulu. 0 wird durch 6 geteilt und nur der rest (in ganzen zahlen) wird übergeben.
      let path = this.IMAGES[i]; // z.B.: 0 %(modulu) 6 = 0 rest 0 ; 1 % 6 = 0 rest 1; Das heißt i = [0,1,2,3,4,5,0,1,2,3,4,5,0,1...]
      this.img = this.imageCash[path];
      this.currentImage++;
    }, 1000 / 60);
  }
}
