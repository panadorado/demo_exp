let timeleft = 1500;
let downloadTimer = setInterval(function(){

    let xp = 0;

    if(timeleft <= 0){
        clearInterval(downloadTimer);
    }
    xp = 1500 - timeleft;
    timeleft -= 1;

    let xps = [0, 20, 70, 150, 250, 500, 1000, 2000, 3500, 6000, 10000, 15000];
    let exactLevel = 0
    if (xp >= 15000) {
        return exactLevel = (xp - 15000) / 10000 + 12;
        // Calculate the exactLevel for players whose level is 12 or above.
    } 

    for (i = 0; i < xps.length; i++) {
        // Loop through the xps array and determine the integer value of the player's level.
        if (xp < xps[i]) {
            exactLevel = i + (xp - xps[i-1]) / (xps[i] - xps[i-1]);
            console.log(`Exp: ${xp} / ${xps[i]}`)
            break;
            // If xp < xps[i], the integer value of level is found. Hence, calculate the exactLevel and stop the loop.
        }
    }

    if(Number.isInteger(exactLevel))
    {
        //console.log(Number.isInteger(exactLevel));
        console.log(`=======> LEVEL ${exactLevel}`);
    }
}, 1000);