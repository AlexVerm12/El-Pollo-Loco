class Bottle extends MovableObject{
        y = 350;
        width = 60;
        height = 75;
        IMAGES = ["./img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png"];
      
        constructor(x,y) {
          super().loadImage(this.IMAGES);
          this.y = y;
          this.x = x;
          this.throw(100,100);

        }

        throw(){
          this.speedY = 15;
          this.applyGravity();
          setInterval(()=> {
            this.x += 5;
          }, 25)
        }
}