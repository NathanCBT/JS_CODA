class Player {
    constructor(name, skin, position = { x: 0, y: 0 }) {
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
        this.walkSpriteIndex = 0; 
        this.walkSpriteNumber = 9; 
        this.walkSpriteDuration = 2; // vitesse d’animation
        this.currentWalkSpriteStep = 0;
        this.frameCounter = 0; // compteur pour ralentir l’animation
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
        this.walkSpriteDuration = serverPlayer.walkSpriteDuration;
        this.walkSpriteIndex = serverPlayer.walkSpriteIndex;
        this.walkSpriteNumber = serverPlayer.walkSpriteNumber;
        this.currentWalkSpriteStep = serverPlayer.currentWalkSpriteStep;
    }


    Animate() {
        if (this.isMoving || this.isAttack) {
            this.frameCounter++;

            if (this.frameCounter >= this.walkSpriteDuration) {
                this.frameCounter = 0;
                this.currentWalkSpriteStep++;

                if (this.currentWalkSpriteStep >= this.walkSpriteNumber) {
                    this.currentWalkSpriteStep = 0;
                }
            }
             
        if (this.isDead) {
            this.currentWalkSpriteStep = 0;
            console.log(`${this.name} est mort. Animation arrêtée.`);
            return;
        }

            console.log("Walk Animation :");
            console.log("isMoving =", this.isMoving);
            console.log("walkSpriteIndex (direction) =", this.walkSpriteIndex);
            console.log("currentWalkSpriteStep =", this.currentWalkSpriteStep, "/", this.walkSpriteNumber);
        }
    }
}

const Albator = new Player("Albator", "img/character-spritsheet.png", { x: 50, y: 50 });
Albator.isMoving = true;

for (let i = 0; i < 10; i++) {
    Albator.Animate();
}
