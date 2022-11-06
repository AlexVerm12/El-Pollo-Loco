class MovableObject {
  x = 50;
  y = 230;
  img;
  height = 200;
  width = 150;
  imageCash = {};
  currentImage = 0;
  speed = 0.15;
  otherDirection = false;

  // loadImage(img/test.png)
  loadImage(path) {
    this.img = new Image(); // this.img = document.getElementById('image');  <img id="image" src="">
    this.img.src = path;
  }

  loadImages(arr) {
    arr.forEach((path) => {
      let img = new Image();
      img.src = path;
      this.imageCash[path] = img;
    });
  }

  playAnimation(images){
    //walk animation
    let i = this.currentImage % this.IMAGES_WALKING.length; // let i = 0 % 6; das ganze heißt modulu. 0 wird durch 6 geteilt und nur der rest (in ganzen zahlen) wird übergeben.
    let path = images[i]; // z.B.: 0 %(modulu) 6 = 0 rest 0 ; 1 % 6 = 0 rest 1; Das heißt i = [0,1,2,3,4,5,0,1,2,3,4,5,0,1...]
    this.img = this.imageCash[path];
    this.currentImage++;
  }

  moveRight() {}

  moveLeft() {
    setInterval(() => {
      this.x -= this.speed;
    }, 1000 / 60);
  }
}
