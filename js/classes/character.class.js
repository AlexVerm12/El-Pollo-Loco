class Character extends MovableObject {
    y = 160;
  IMAGES_WALKING = [
    "../img/2_character_pepe/2_walk/W-21.png",
    "../img/2_character_pepe/2_walk/W-22.png",
    "../img/2_character_pepe/2_walk/W-23.png",
    "../img/2_character_pepe/2_walk/W-24.png",
    "../img/2_character_pepe/2_walk/W-25.png",
    "../img/2_character_pepe/2_walk/W-26.png",
  ];
  speed = 10;
  world;
  walking_sound = new Audio('../audio/steps.mp3')

  constructor() {
    super().loadImage("../img/2_character_pepe/2_walk/W-21.png");
    this.loadImages(this.IMAGES_WALKING);
    this.applyGravity();
    this.animate();
  }

  animate() {
    setInterval(() => {
        if (this.world.keyboard.right && this.x < this.world.level.level_end_x) {
          this.x += this.speed;
          this.otherDirection = false;
          this.walking_sound.play();
          this.walking_sound.playbackRate = 2.0;
        }
        if (this.world.keyboard.left && this.x > -200 ) {
            this.x -= this.speed;
            this.otherDirection = true;
            this.walking_sound.play();
            this.walking_sound.playbackRate = 2.0;
          }
          this.world.camera_x = -this.x + 100;
    },1000 / 60);

    setInterval(() => {
      if (this.world.keyboard.right || this.world.keyboard.left) {
        this.playAnimation(this.IMAGES_WALKING);
      }
    }, 50);
  }

  jump() {}
}
