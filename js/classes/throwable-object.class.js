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

  IMAGES_BOTTLE_SPLASH = [
    'img/6_salsa_bottle/bottle_rotation/bottle_splash/1_bottle_splash.png',
    'img/6_salsa_bottle/bottle_rotation/bottle_splash/2_bottle_splash.png',
    'img/6_salsa_bottle/bottle_rotation/bottle_splash/3_bottle_splash.png',
    'img/6_salsa_bottle/bottle_rotation/bottle_splash/4_bottle_splash.png',
    'img/6_salsa_bottle/bottle_rotation/bottle_splash/5_bottle_splash.png',
    'img/6_salsa_bottle/bottle_rotation/bottle_splash/6_bottle_splash.png'
  ];

  constructor(x, y) {
    super().loadImage(this.IMAGES[0]);
    this.loadImages(this.IMAGES);
    this.loadImages(this.IMAGES_BOTTLE_SPLASH);
    this.x = x;
    this.y = y;
    
    if (world.character.otherDirection == true) {
      this.throwLeft(-150,-100)
    } else {
      this.throw(100,100);
    }

  }

  throw() {
    this.speedY = 15;
    this.applyGravity();
    setInterval(() => {
      this.x += 10;
    }, 40)
    this.animate();
  }

  throwLeft() {
    this.speedY = 15;
    this.applyGravity();
    setInterval(() => {
      this.x -= 10;
    }, 40)
    this.animate();
  }

  animate() {
    setInterval(() => {
     if (this.y > 350) {
      this.playAnimation(this.IMAGES_BOTTLE_SPLASH);
     } else {
      this.playAnimation(this.IMAGES);
     }
    }, 1000 / 60);
  }
}
