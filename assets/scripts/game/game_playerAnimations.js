//is a subdivision of "game_functions.js" (this documents can be copied (tranfered) into that js script/texfile to gain some load speed)
    blackout = null ;
    idleDirection = null ;
function playerMovementsAnimation(playerId, playerspeed, twoAxis, blackout) {
    
    if (blackout == true) {
        playerSideWalk = 'playerSide_O_walk';
        playerSideStill = 'playerSide_O_still';
        playerFrontStill = 'playerFront_O_still';
        playerBackStill = 'playerBack_O_still';
        playerTFfrontStill = 'playerTFfront_O_still';
        playerTFbackStill = 'playerTFback_O_still';
    }
    else if (primaryColor == "0x000000") {
        playerSideWalk = 'playerSide_W_walk';
        playerSideStill = 'playerSide_W_still';
        playerFrontStill = 'playerFront_W_still';
        playerBackStill = 'playerBack_W_still';
        playerTFfrontStill = 'playerTFfront_W_still';
        playerTFbackStill = 'playerTFback_W_still';
    }
    else if (primaryColor == "0xffffff") {
        playerSideWalk = 'playerSide_B_walk';
        playerSideStill = 'playerSide_B_still';
        playerFrontStill = 'playerFront_B_still';
        playerBackStill = 'playerBack_B_still';
        playerTFfrontStill = 'playerTFfront_B_still';
        playerTFbackStill = 'playerTFback_B_still';
    };
    
    if (cursors.left.isDown)
    {
        if (cursors.up.isDown && twoAxis == true)
        {   //LEFT-UP
            idleDirection = 'left-up' ;
            console.log(idleDirection)
        }
        else if (cursors.down.isDown && twoAxis == true)
        {   //LEFT-DOWN
            idleDirection = 'left-down' ;
            console.log(idleDirection)
        }
        else 
        {   //LEFT
            idleDirection = 'left' ;
            console.log(idleDirection)
        }
        playerId.flipX = true ;
        playerId.anims.play(playerSideWalk , true);
    }

    else if (cursors.right.isDown)
    {   
        if (cursors.up.isDown && twoAxis == true)
        {   //RIGHT-UP
            idleDirection = 'right-up' ;
            console.log(idleDirection)
        }
        else if (cursors.down.isDown && twoAxis == true)
        {   //RIGHT-DOWN
            idleDirection = 'right-down' ;
            console.log(idleDirection)
        }
        else 
        {   //RIGHT
            idleDirection = 'right' ;
            console.log(idleDirection)
        }
        playerId.flipX = false ;
        playerId.anims.play(playerSideWalk , true);
    }
    else if (cursors.up.isDown && twoAxis == true)
    {   //UP
        idleDirection = 'up';
        console.log(idleDirection)
        playerId.flipX = false ;
        playerId.anims.play(playerBackStill);
    }
    else if (cursors.down.isDown && twoAxis == true)
    {   //DOWN
        idleDirection = 'down';
        console.log(idleDirection)
        playerId.flipX = false ;
        playerId.anims.play(playerFrontStill);
    }

    else 
    {
            if (idleDirection == 'left') {
                playerId.flipX = true ;
                playerId.anims.play(playerSideStill);
        }   else if (idleDirection == 'left-up') {
                playerId.flipX = true ;
                playerId.anims.play(playerTFbackStill);
        }   else if (idleDirection == 'left-down') {
                playerId.flipX = true ;
                playerId.anims.play(playerTFfrontStill);
        }   else if (idleDirection == 'right') {
                playerId.flipX = false ;
                playerId.anims.play(playerSideStill)
        }   else if (idleDirection == 'right-up') {
                playerId.flipX = false ;
                playerId.anims.play(playerTFbackStill)
        }   else if (idleDirection == 'right-down') {
                playerId.flipX = false ;
                playerId.anims.play(playerTFfrontStill)
        }   else if (idleDirection == 'up') {
                playerId.flipX = false ;
                playerId.anims.play(playerBackStill);
        }   else if (idleDirection == 'down') {
                playerId.flipX = false ;
                playerId.anims.play(playerFrontStill);
        }
    }
 
};
