let roadMines = [false, false, false, true, true, false, false, false, false, false];
let position = roadMines.indexOf();
let healthPoints = 2;

for ( let mine of roadMines ) {
    console.log( `Танк переместился на ${++position + 1}` );
    if (mine == true) {
        --healthPoints;
        if(healthPoints > 0) console.log( 'Танк повреждён' );
        else {
         console.log( 'Танк уничтожен' );
         break;
        };
    }
}
if(healthPoints > 0 ) console.log( 'Танк прошёл' );