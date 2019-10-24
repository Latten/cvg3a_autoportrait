function update ()
{   if (actualPlayer == 01) {
        playerMovementsCursors(player01, 80, false, false)
    }
    else if (actualPlayer == 02) {
        playerMovementsCursors(player02, 80, false, true)
    }
    else if (actualPlayer == 03) {
        playerMovementsCursors(player03, 80, false, false)
    }
}

