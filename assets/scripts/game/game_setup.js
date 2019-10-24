const gameconfig = {
    type: Phaser.AUTO,
    width: 8000,
    height: 1200,
    parent:"game",
    transparent: true,
    physics:
    {default: "arcade", arcade:{fps: 75, debug:false, debugShowBody: false,}},
    scene: {preload: preload, create: create, update: update},
    scale: {
        parent: 'game',
        mode: Phaser.Scale.HEIGHT_CONTROLS_WIDTH
    },
    banner: false
};

/* Debug (dont forget to check config) */
debugEnable = false ;
/* Initiate game */
var game = new Phaser.Game(gameconfig);