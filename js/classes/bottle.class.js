class Bottle extends MovableObject{
        y = 350;
        width = 60;
        height = 75;
        IMAGES = ["./img/6_salsa_bottle/1_salsa_bottle_on_ground.png"];

        offset = {
          top: 25,
          left: 20,
          right: -40,
          bottom: -30,
        };

        constructor() {
          super().loadImage(this.IMAGES);

          this.x = 200 + Math.random() * 3500;

        }
}
