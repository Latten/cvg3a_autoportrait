function preload ()
{
    //Backgrounds
    this.load.image('background01JPG', 'assets/images/backgrounds/background01/background01_cavern01_jpg_texture.jpg', { width: 716, height: 1020 });
    this.load.image('background01PNG', 'assets/images/backgrounds/background01/background01_cavern01_png_texture.png', { width: 716, height: 1020 });
    this.load.svg('background01SVG2', 'assets/images/backgrounds/background01/background01_cavern01_svg_traces_front.min.svg', { width: 716, height: 1020});
    this.load.svg('background01SVG1', 'assets/images/backgrounds/background01/background01_cavern01_svg_traces_back.min.svg', { width: 716, height: 1020});
    this.load.image('background02JPG', 'assets/images/backgrounds/background02/background02_door01_jpg_texture.jpg', { width: 1120, height: 780});
    this.load.svg('background02SVG', 'assets/images/backgrounds/background02/background02_door01_svg_traces.min.svg', { width: 1120, height: 780});
    
    //Player sprites
    this.load.spritesheet('player01_w', 'assets/images/sprites/player01/player01_all-still_side-aniamtion_spritesheet_W_7.8k_x600.png',{ frameWidth: 300, frameHeight: 600, endFrame: 26 });
    this.load.spritesheet('player01_b', 'assets/images/sprites/player01/player01_all-still_side-aniamtion_spritesheet_B_7.8k_x600.png', { frameWidth: 300, frameHeight: 600, endFrame: 26 });
    this.load.spritesheet('player01_o', 'assets/images/sprites/player01/player01_all-still_side-aniamtion_spritesheet_O_7.8k_x600.png',{ frameWidth: 300, frameHeight: 600,  endFrame: 26 });
}