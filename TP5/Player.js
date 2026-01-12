class Player {
    constructor(name, skin, position = {x: 0, y: 0}) {
        this.name = name;
        this.skin = skin;
        this.level = 1;
        this.maxHP = 100;
        this.currentHP = 100;
        this.regenHP = 10;
        this.damageAttack = 20;
        this.cooldown = 2;
        this.currentCooldown = 0;
        this.moveSpeed = 5;
        this.position = position;
        this.isMoving = false;
        this.isAttack = false;
        this.isDead = false;
    }

    update(serverPlayer) {
        this.name = serverPlayer.name;
        this.skin = serverPlayer.skin;
        this.level = serverPlayer.level;
        this.maxHP = serverPlayer.maxHP;
        this.currentHP = serverPlayer.currentHP;
        this.regenHP = serverPlayer.regenHP;
        this.damageAttack = serverPlayer.damageAttack;
        this.cooldown = serverPlayer.cooldown;
        this.currentCooldown = serverPlayer.currentCooldown;
        this.moveSpeed = serverPlayer.moveSpeed;
        this.position = serverPlayer.position;
        this.isMoving = serverPlayer.isMoving;
        this.isAttack = serverPlayer.isAttack;
        this.isDead = serverPlayer.isDead;
    }
}

const p1 = new Player("Albator", "img/character-spritsheet.png", {x: 50, y: 50});
console.log(p1);