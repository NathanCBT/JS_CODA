class GameView {
  constructor(Game) {
    this.canvas = document.getElementById("gameCanvas");
    this.ctx = this.canvas.getContext("2d");

    //stocker les dimensions du canvas
    /*
    this.width = this.canvas.width;
    this.height = this.canvas.height;
    */
    this.canvas.height = 600;
    this.canvas.width = 600;
    //Stocker une référence vers l’instance de Game
    this.Game = Game;
    //partie 3
    this.spritePath = localStorage.getItem("selectedSkin");
    this.sprite = new Image();
    this.sprite.src = this.spritePath;
  }

  //partie 2
  clear() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  drawBackground() {
    this.ctx.fillStyle = "rgba(0, 0, 0, 0.5)";
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
  }

  render() {
    this.clear();
    this.drawBackground();
    this.drawTimer();
    this.drawStatGame();
    for (let id in this.Game.players) {
      this.drawPlayer(this.Game.players[id]);
    }
  }

  //partie 3
  drawPlayer(player) {
    let x = player.finalX * this.canvas.width;
    let y = player.finalY * this.canvas.height;

    let size = 64;
    let midX = (player.framewidth - 64) / 2;
    let midY = (player.frameheight - 64) / 2;
    console.log(player.direction);

    if (player.isDead) return;
    player.animate();

    let line = {
      0: 8,
      1: 11,
      2: 10,
      3: 9,
    }[player.direction];
    let colonne = 0;
    let ligne_sprite = line * size;

    if (player.isDying) {
      colonne = player.deathSpriteIndex;
      ligne_sprite = 1280;
    } else if (player.isAttacking) {
      if (player.direction === 0) {
        ligne_sprite = 3456;
      } else if (player.direction === 1) {
        ligne_sprite = 4032;
      } else if (player.direction === 2) {
        ligne_sprite = 3840;
      } else {
        ligne_sprite = 3648;
      }
      midX = 192;
      midY = 192;
      size = 192;
      colonne = player.attackSpriteIndex;
    } else if (player.isWalking) {
      colonne = player.walkSpriteIndex;
    }

    this.ctx.drawImage(
      this.sprite,
      colonne * size, // colonne
      ligne_sprite, //recupere la 10eme image tous les 64 pixels
      size, // sourceWidth
      size, // sourceHeight

      //où il va l'afficher sur la page
      x - midX / 2, // destX
      y - midY / 2, // destY
      size, // destWidth
      size, // destHeight
    );

    this.drawPlayerHUD(x, y, player);
  }

  drawPlayerHUD(x, y, player) {
    let ctx = this.ctx;
    let width = 40;
    let hpHeight = 8;
    let cdHeight = 6;

    let hpPositionY = 20;
    let cdPositionY = 12;
    let pseudoPositionY = 28;

    // barre de vie
    let hpRatio = player.hp / player.maxHp;

    ctx.fillStyle = "#000";
    ctx.fillRect(x - width / 2, y - hpPositionY, width, hpHeight);

    //HP du joueur
    ctx.fillStyle = "#e74c3c";
    ctx.fillRect(x - width / 2, y - hpPositionY, width * hpRatio, hpHeight);

    ctx.strokeStyle = "#fff";
    ctx.strokeRect(x - width / 2, y - hpPositionY, width, hpHeight);

    // cooldoawn barre
    let cdRatio = 1 - player.currentAttackCooldown / player.attackCooldown;

    //bg
    ctx.fillStyle = "#000";
    ctx.fillRect(x - width / 2, y - cdPositionY, width, cdHeight);

    ctx.fillStyle = "#1e4cff";
    ctx.fillRect(x - width / 2, y - cdPositionY, width * cdRatio, cdHeight);

    ctx.strokeStyle = "#fff";
    ctx.strokeRect(x - width / 2, y - cdPositionY, width, cdHeight);

    //pseudo et le niveau du joeur
    ctx.font = "16px 'Press Start 2P'";
    ctx.textAlign = "center";
    ctx.textBaseline = "bottom";

    ctx.fillStyle = "#fff";
    ctx.strokeStyle = "#000";

    let text = `${player.name} Lv.${player.lvl}`;

    ctx.strokeText(text, x, y - pseudoPositionY);
    ctx.fillText(text, x, y - pseudoPositionY);
  }

  //partie bonus
  drawTimer() {
    let ctx = this.ctx;
    let timer = Math.floor(this.Game.timer); //pour arrondir

    ctx.font = "20px 'Press Start 2P'";
    ctx.textAlign = "center";
    ctx.textBaseline = "top";

    ctx.fillStyle = "#fff";
    ctx.strokeStyle = "#000";

    let text = `TIME: ${timer}s`;

    ctx.strokeText(text, this.canvas.width / 2, 10);
    ctx.fillText(text, this.canvas.width / 2, 10);
  }

  PlayerAliveNb() {
    let alive = 0;
    let total = 0;

    for (let id in this.Game.players) {
      total++;
      const p = this.Game.players[id];
      if (!p.isDead && p.hp > 0) alive++;
    }

    return { alive, total };
  }

  drawStatGame() {
    let ctx = this.ctx;
    let { alive, total } = this.PlayerAliveNb();
    let text = `Players: ${alive}/${total}`;
    ctx.font = "20px 'Press Start 2P'";
    ctx.textAlign = "left";
    ctx.textBaseline = "top";
    ctx.fillStyle = "#fff";
    ctx.strokeStyle = "#000";

    ctx.strokeText(text, 10, 10);
    ctx.fillText(text, 10, 10);
  }
}
