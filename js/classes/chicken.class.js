class Chicken extends MovableObject {
  y = 380;
  height = 50;
  width = 40;

  IMAGES_WALKING = [
    "../img/3_enemies_chicken/chicken_normal/1_walk/1_w.png",
    "../img/3_enemies_chicken/chicken_normal/1_walk/2_w.png",
    "../img/3_enemies_chicken/chicken_normal/1_walk/3_w.png",
  ];

  constructor() {
    super().loadImage("../img/3_enemies_chicken/chicken_normal/1_walk/1_w.png");
    this.loadImages(this.IMAGES_WALKING);
    this.x = 200 + Math.random() * 500; // immer Zahl zwiscchen 200 und 700. Math.random() gibt immer einne zufällige zahl raus zischen 0 und 1.
    this.animate();
    this.speed = 0.15 + Math.random() * 0.25;
  }

  animate() {
    this.moveLeft();
    setInterval(() => {
      let i = this.currentImage % this.IMAGES_WALKING.length; // let i = 0 % 6; das ganze heißt modulu. 0 wird durch 6 geteilt und nur der rest (in ganzen zahlen) wird übergeben.
      let path = this.IMAGES_WALKING[i]; // z.B.: 0 %(modulu) 6 = 0 rest 0 ; 1 % 6 = 0 rest 1; Das heißt i = [0,1,2,3,4,5,0,1,2,3,4,5,0,1...]
      this.img = this.imageCash[path];
      this.currentImage++;
    }, 100);
  }
}
