class Coin extends MovableObject {
  width = 90;
  height = 90;
  IMAGES = ["./img/8_coin/coin_1.png", "./img/8_coin/coin_2.png"];

  constructor() {
    super().loadImage(this.IMAGES[0]);
    this.loadImages(this.IMAGES);
    this.x = 200 + Math.random() * 3500;
    this.y = 135 + Math.random() * 200;
    this.animate();
  }

  animate() {
    setInterval(() => {
      let i = this.currentImage % this.IMAGES.length; // let i = 0 % 6; das ganze heißt modulu. 0 wird durch 6 geteilt und nur der rest (in ganzen zahlen) wird übergeben.
      let path = this.IMAGES[i]; // z.B.: 0 %(modulu) 6 = 0 rest 0 ; 1 % 6 = 0 rest 1; Das heißt i = [0,1,2,3,4,5,0,1,2,3,4,5,0,1...]
      this.img = this.imageCash[path];
      this.currentImage++;
    }, 400);
  }
}
