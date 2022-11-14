class DrawableObject {
    img;
    imageCash = {};
    currentImage = 0;
    x = 50;
    y = 230;
    height = 200;
    width = 150;

    drawFrame(ctx) {
        if (this instanceof Character || this instanceof Chicken) {
            ctx.beginPath();
            ctx.lineWidth = "5";
            ctx.strokeStyle = "blue";
            ctx.rect(this.x, this.y, this.width, this.height);
            ctx.stroke();
        }
    }

    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }

    // loadImage(img/test.png)
    loadImage(path) {
        this.img = new Image(); // this.img = document.getElementById('image');  <img id="image" src="">
        this.img.src = path;
    }
    /* @param {Array} arr - [ 'img/image1.png', 'img/image2.png'....]*/
    loadImages(arr) {
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCash[path] = img;
        });
    }
}