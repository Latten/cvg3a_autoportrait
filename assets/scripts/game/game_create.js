function create ()
{   
    //console.log(this);
    //Setup some varaibles
    cursors = this.input.keyboard.createCursorKeys();
    thisGame = this ;
    primaryColor = 0x000000 ;
    
    //Setup shapes
    maskShape01 = this.add.graphics()
    if (debugEnable == true) {
        maskShape01.fillStyle(0xff00ff, 0.2);
    }
    borderShape01 = this.add.graphics();
    borderShape01.lineStyle(3, primaryColor, 1);

    //Background & images
    background01Bitmap01 = this.add.image(860, 120, 'background01JPG').setOrigin(0,0);
    background01Vector01 = this.add.image(860, 120, 'background01SVG1').setOrigin(0,0);
    background01Bitmap02 = this.add.image(860, 120, 'background01PNG').setOrigin(0,0).setDepth(1);
    background01Vector02 = this.add.image(860, 120, 'background01SVG2').setOrigin(0,0).setDepth(1);
    background02Bitmap = this.add.image(5900, 180, 'background02JPG').setOrigin(0,0).setDepth(-2);
    background02Vector = this.add.image(5900, 180, 'background02SVG').setOrigin(0,0);
    //Border set
    setBorder(0);

    //Protagonits
    player01 = this.physics.add.sprite(1100,700, 'player01_w').setScale(0.8).setOrigin(0.5,0.5).setSize(5, 5).setOffset(140, 570)  ;
    player01.name = "player01" ;
    player02 = this.physics.add.sprite(2490,710, 'player01_o').setScale(0.2).setOrigin(0.5,0.5).setSize(5, 5).setOffset(140, 570)  ;
    player02.name = "player02" ;
    player03 = this.physics.add.sprite(5850,710, 'player01_b').setScale(0.6).setOrigin(0.5,0.5).setSize(5, 5).setOffset(140, 570)  ;
    player03.name = "player03" ;
    //Protagonits enable specs
        //none
    //Set zone for collison and overlap(toggle frames)

    //Collsions
        // #1
        setCollisionZone("01", "840, 680", "20, 460", "player01")
        setCollisionZone("02", "840, 680", "940, 20", "player01")
        setCollisionZone("03", "840, 1120", "940, 20", "player01")
        setCollisionZone("04", "1760, 680", "20, 460", "player01")
        setCollisionZone("05", "2440, 620", "20, 200", "player02")
        setCollisionZone("06", "4100, 620", "20, 200", "player02")
        setCollisionZone("06", "6910, 680", "20, 200", "player03")

        //
        

    //Overlaps
        //Toggle Background
        // #1
            setOverlapZone("01", "976, 910", "242, 22", "player01", "function() {setBackgroundColor(0); setBorder(0)}", )
            setOverlapZone("01a", "964, 868", "272, 20", "player01", "function() {setBackgroundColor(1); setBorder(1)}", )
            setOverlapZone("01b", "964, 956", "272, 20", "player01", "function() {setBackgroundColor(1); setBorder(1)}", )
            setOverlapZone("01c", "944, 888", "20, 68", "player01", "function() {setBackgroundColor(1); setBorder(1)}", )
            setOverlapZone("01d", "1236, 888", "20, 68", "player01", "function() {setBackgroundColor(1); setBorder(1)}", )
        //Toggle Frames
        setOverlapZone("F01", "1650, 700", "20, 420", "player01", "function() {frameToggle(01)}")

        setOverlapZone("F03", "2680, 620", "20, 200", "player02", "function() {frameToggle(03)}")
        setOverlapZone("F04", "3040, 620", "20, 200", "player02", "function() {frameToggle(04)}")
        setOverlapZone("F06", "3660, 620", "20, 200", "player02", "function() {frameToggle(06)}")
        setOverlapZone("F07", "4080, 620", "20, 200", "player02", "function() {frameToggle(07)}")

        setOverlapZone("F10", "6010, 680", "20, 200", "player03", "function() {frameToggle(10)}")
        setOverlapZone("F11", "6890, 680", "20, 200", "player03", "function() {frameToggle(11)}")

    //Masks set
        maskShape01.fillRect(860, 120, 716, 1020)
        maskShape01.fillRect(2560, 620, 1490, 200)
        maskShape01.fillRect(5900, 180, 1120, 780)
        
    //Enable masks
    mask01 = maskShape01.createGeometryMask();
        player01.setMask(mask01);
        player02.setMask(mask01);
        player03.setMask(mask01);



    //Animations
        //White player model
        this.anims.create({
            key: 'playerSide_W_walk',
            frames: this.anims.generateFrameNumbers('player01_w', { start: 5, end: 25 }),
            frameRate: 20, 
            repeat: -1 
        });
        this.anims.create({
            key: 'playerSide_W_still',
            frames: [{ key: 'player01_w', frame: 4 }],
            frameRate: 20
        });
        this.anims.create({
            key: 'playerFront_W_still',
            frames: [{ key: 'player01_w', frame: 0 }],
            frameRate: 20
        });
        this.anims.create({
            key: 'playerBack_W_still',
            frames: [{ key: 'player01_w', frame: 1 }],
            frameRate: 20
        });
        this.anims.create({
            key: 'playerTFfront_W_still',
            frames: [{ key: 'player01_w', frame: 3 }],
            frameRate: 20
        });
        this.anims.create({
            key: 'playerTFback_W_still',
            frames: [{ key: 'player01_w', frame: 2 }],
            frameRate: 20
        });
    //Black player model 
        this.anims.create({
            key: 'playerSide_B_walk',
            frames: this.anims.generateFrameNumbers('player01_b', { start: 5, end: 25 }),
            frameRate: 20, 
            repeat: -1 
        });
        this.anims.create({
            key: 'playerSide_B_still',
            frames: [{ key: 'player01_b', frame: 4 }],
            frameRate: 20
        });
        this.anims.create({
            key: 'playerFront_B_still',
            frames: [{ key: 'player01_b', frame: 0 }],
            frameRate: 20
        });
        this.anims.create({
            key: 'playerBack_B_still',
            frames: [{ key: 'player01_b', frame: 1 }],
            frameRate: 20
        });
        this.anims.create({
            key: 'playerTFfront_B_still',
            frames: [{ key: 'player01_b', frame: 3 }],
            frameRate: 20
        });
        this.anims.create({
            key: 'playerTFback_B_still',
            frames: [{ key: 'player01_b', frame: 2 }],
            frameRate: 20
        });
    //Blackout player model
        this.anims.create({
            key: 'playerSide_O_walk',
            frames: this.anims.generateFrameNumbers('player01_o', { start: 5, end: 25 }),
            frameRate: 20, 
            repeat: -1 
        });
        this.anims.create({
            key: 'playerSide_O_still',
            frames: [{ key: 'player01_o', frame: 4 }],
            frameRate: 20
        });
        this.anims.create({
            key: 'playerFront_O_still',
            frames: [{ key: 'player01_o', frame: 0 }],
            frameRate: 20
        });
        this.anims.create({
            key: 'playerBack_O_still',
            frames: [{ key: 'player01_o', frame: 1 }],
            frameRate: 20
        });
        this.anims.create({
            key: 'playerTFfront_O_still',
            frames: [{ key: 'player01_o', frame: 3 }],
            frameRate: 20
        });
        this.anims.create({
            key: 'playerTFback_O_still',
            frames: [{ key: 'player01_o', frame: 2 }],
            frameRate: 20
        });
    
    //First player
    actualPlayer = null;
}
//container = this.add.container(500, 500);