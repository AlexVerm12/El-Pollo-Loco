class MovableObject{
    x = 50;
    y = 230;
    img;
    height = 200;
    width = 150;
    // loadImage(img/test.png)
    loadImage(path){
        this.img = new Image(); // this.img = document.getElementById('image');  <img id="image" src="">
        this.img.src = path;
    }

    moveRight(){

    }

    moveLeft(){

    }
}