class World {
  character = new Character();
  level = level1;
  canvas;
  ctx;
  keyboard;
  camera_x = 0;
  statusBar = new StatusBar();
  coinBar = new CoinBar();
  bottleBar = new BottleBar();
  endbossBar = new EndbossBar();
  throwableObjects = [];
  throwableBottles = 0;
  totalCoins = 0;

  constructor(canvas, keyboard) {
    this.canvas = canvas;
    this.keyboard = keyboard;
    this.ctx = canvas.getContext("2d");
    this.draw();
    this.setWorld();
    this.run();
  }

  setWorld() {
    this.character.world = this;
  }

  run() {
    setInterval(() => {
      this.checkCollision();
      this.checkThrowObjects();
    }, 200);
  }

  checkThrowObjects() {
    if (this.keyboard.D && this.throwableBottles > 0) {
      let bottle = new ThrowableObject(this.character.x + 50, this.character.y + 50);
      this.throwableObjects.push(bottle);
      this.throwableBottles--;
      this.bottleBar.setPercentage(this.throwableBottles);
    }
  }


  checkCollision() {
    this.collidingEnemy();
    this.collidingBottle();
    this.collidingCoin();
    this.collidingEnemyJump();
    this.CollidingBottleWithEnemy();
  }

  collidingEnemy() {
    this.level.enemies.forEach((enemy) => {
      if (this.character.isColliding(enemy) && !this.character.isAboveGround()) {
        this.character.hit();
        this.statusBar.setPercentage(this.character.energy)
      }
    });
  }

  collidingEnemyJump() {
    this.level.enemies.forEach((enemy, index) => {
      if (this.character.isColliding(enemy) && this.character.isAboveGround() && (enemy instanceof Chicken || enemy instanceof SmallChicken)) {
        enemy.hit();
        setTimeout(() => {
          this.level.enemies.splice(index, 1);
        }, 200);
        this.character.jump();
      }
    });
  }

  collidingBottle() {
    this.level.bottles.forEach((bottle, index) => {
      if (this.character.isColliding(bottle)) {
        this.throwableBottles++;
        this.level.bottles.splice(index, 1);
        this.bottleBar.setPercentage(this.throwableBottles);
      }
    });
  }

  CollidingBottleWithEnemy() {
    this.level.enemies.forEach((enemy, index1) => {
      this.throwableObjects.forEach((bottle, index2) => {
        if (bottle.isColliding(enemy) && (enemy instanceof Chicken || enemy instanceof SmallChicken)) {
          enemy.hit();
          this.throwableObjects.splice(index2, 1);
          setTimeout(() => {
            this.level.enemies.splice(index1, 1);
          }, 200);
        } else if (bottle.isColliding(enemy) && enemy instanceof Endboss) {
          enemy.hit();
          this.endbossBar.setPercentage(enemy.energy);

          setTimeout(() => {
            this.throwableObjects.splice(index2, 1);
          }, 100);
        }
      })
    })
  }

  collidingCoin() {
    this.level.coins.forEach((coin, index) => {
      if (this.character.isColliding(coin)) {
        this.totalCoins++;
        this.level.coins.splice(index, 1);
        this.coinBar.setPercentage(this.totalCoins);
      }
    });
  }


  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.ctx.translate(this.camera_x, 0);
    this.addObjectsToMap(this.level.backgroundObjects);
    this.addObjectsToMap(this.level.coins);
    this.addObjectsToMap(this.level.bottles);
    this.addObjectsToMap(this.throwableObjects);
    this.addObjectsToMap(this.level.clouds);
    this.addToMap(this.character);
    // Space for fixed objects
    this.ctx.translate(-this.camera_x, 0);
    this.addToMap(this.statusBar);
    this.addToMap(this.coinBar);
    this.addToMap(this.bottleBar);
    this.addToMap(this.endbossBar);
    this.ctx.translate(this.camera_x, 0);

    this.addObjectsToMap(this.level.enemies);
    this.ctx.translate(-this.camera_x, 0);

    // draw() wird immer wieder aufgerufen.
    let self = this;
    requestAnimationFrame(function () {
      self.draw();
    });
  }

  addObjectsToMap(objects) {
    objects.forEach((o) => {
      this.addToMap(o);
    });
  }

  addToMap(mo) {
    if (mo.otherDirection) {
      this.flipImage(mo);
    }
    mo.draw(this.ctx);
    mo.drawFrame(this.ctx);
    mo.drawFrameChicken(this.ctx);
    mo.drawFrameBottle(this.ctx);
    mo.drawFrameCoin(this.ctx);
    mo.drawFrameEndboss(this.ctx);

    if (mo.otherDirection) {
      this.flipImageBack(mo);
    }
  }

  flipImage(mo) {
    this.ctx.save();
    this.ctx.translate(mo.width, 0);
    this.ctx.scale(-1, 1);
    mo.x = mo.x * -1;
  }

  flipImageBack(mo) {
    this.ctx.restore();
    mo.x = mo.x * -1;
  }
}
