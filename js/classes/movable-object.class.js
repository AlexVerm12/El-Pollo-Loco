class MovableObject {
  x = 50;
  y = 230;
  img;
  height = 200;
  width = 150;
  imageCash = {};
  currentImage = 0;
  speed = 0.15;

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

  moveRight() {}

  moveLeft() {
        setInterval(() => {
            this.x -= this.speed;
        }, 1000 / 60)
  }
}
