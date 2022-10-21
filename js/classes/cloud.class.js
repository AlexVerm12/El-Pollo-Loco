class Cloud extends MovableObject {
        y = 5;
        width = 600;
        height = 400;


    constructor(){
        super().loadImage('../img/5_background/layers/4_clouds/1.png');

        this.x = Math.random()*500; // immer Zahl zwiscchen 200 und 700. Math.random() gibt immer einne zufällige zahl raus zischen 0 und 1.

    }
        

}