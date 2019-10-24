function player02move(position){
if (position == 1) {
    player02.anims.play('playerSide_O_walk',true);
    player02.setVelocityX(+50 * 2)
} else if (position == 2) {
    player02.setVelocityX(0);
    player02.x = 3600 ;
    player02.setVelocityX(+50* 2)

}}

function player03move(position){
    if (position == 1) {
        player03.anims.play('playerSide_B_walk',true);
        player03.setVelocityX(+50 * 2);
    } else if (position == 2) { 
        player03.setVelocityX(0);
    }}