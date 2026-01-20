class GameController {
  constructor() {
    // Server sends updates at 20 ticks per second
    this.SERVER_TICK_RATE = 20;
    // Duration between two server ticks in milliseconds
    this.SERVER_INTERVAL = 1000 / this.SERVER_TICK_RATE;

    //Partie 1
    this.Game = new Game();
    this.name = localStorage.getItem("pseudo");
    this.serverUrl = localStorage.getItem("Lienbck"); //serverurl
    this.skinPath = localStorage.getItem("selectedSkin");
    this.inputState = {
      up: false,
      down: false,
      left: false,
      right: false,
      attack: false,
    };
    this.initInput();

    //partie 2
    console.log(this.serverUrl);
    this.socket = new WebSocket(this.serverUrl);
    this.initSocket();
    this.startInputSender();
    // Permanently bind "this" at the instance of the GameController class
    this.loop = this.loop.bind(this);

    // Regulates framerate to keep 60fps
    requestAnimationFrame(this.loop);
  }
  //fin partie 2 declaration de la methode initSocket
  initSocket() {
    //partie 3
    this.socket.onopen = () => {
      console.log("Connected to server");

      this.socket.send(
        JSON.stringify({
          name: this.name, // je ne sais pas si il faut que je mette name ou que je laisse pseudo
          skinPath: this.skinPath, // skinpath ? ------ pareil que pour le name/pseudo
        }),
      );
    };
    //partie 4
    this.socket.onmessage = (event) => {
      //console.log(event.data);
      let msg = JSON.parse(event.data);
      this.Game.update(msg);
    };
  }

  //partie 5
  initInput() {
    // Touche pressée
    window.addEventListener("keydown", (event) => {
      switch (event.key) {
        case "z":
          this.inputState.up = true;
          break;
        case "s":
          this.inputState.down = true;
          break;
        case "q":
          this.inputState.left = true;
          break;
        case "d":
          this.inputState.right = true;
          break;
        case "f":
          this.inputState.attack = true;
          break;
      }
    });

    // Touche relâchée
    window.addEventListener("keyup", (event) => {
      switch (event.key) {
        case "z":
          this.inputState.up = false;
          break;
        case "s":
          this.inputState.down = false;
          break;
        case "q":
          this.inputState.left = false;
          break;
        case "d":
          this.inputState.right = false;
          break;
        case "f":
          this.inputState.attack = false;
          break;
      }
    });
  }

  //partie 6
  startInputSender() {
    setInterval(() => {
      if (this.socket.readyState === WebSocket.OPEN) {
        this.socket.send(
          JSON.stringify({
            type: "input",
            input: this.inputState,
          }),
        );
      }
    }, this.SERVER_INTERVAL);
  }

  // === Main render loop ===
  loop(timestamp) {
    //partie 7
    //console.log(this.inputState);
    console.log(this.Game);
    // Request the next frame
    requestAnimationFrame(this.loop);
  }
}

// === Start the game controller by instantiating the GameController class ===
// This line will execute the constructor (e.g, launch the frontend)
new GameController();
