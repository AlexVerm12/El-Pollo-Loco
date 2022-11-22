class Chicken extends MovableObject {
  y = 350;
  height = 70;
  width = 55;

  IMAGES_WALKING = [
    "./img/3_enemies_chicken/chicken_normal/1_walk/1_w.png",
    "./img/3_enemies_chicken/chicken_normal/1_walk/2_w.png",
    "./img/3_enemies_chicken/chicken_normal/1_walk/3_w.png",
  ];

  IMAGES_DEAD = [
    "./img/3_enemies_chicken/chicken_normal/2_dead/dead.png"
  ]

  constructor() {
    super().loadImage("./img/3_enemies_chicken/chicken_normal/1_walk/1_w.png");
    this.loadImages(this.IMAGES_WALKING);
    this.x = 200 + Math.random() * 3600; // immer Zahl zwiscchen 200 und 700. Math.random() gibt immer einne zufällige zahl raus zischen 0 und 1.
    this.animate();
    this.speed = 0.15 + Math.random() * 0.25;
  }

  animate() {
    setInterval(() => {
      this.moveLeft();
    }, 1000 / 60);

    setInterval(() => {
      this.playAnimation(this.IMAGES_WALKING);
    }, 150);

  }
}
