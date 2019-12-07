'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}




// Complete the countApplesAndOranges function below.
function countApplesAndOranges(s, t, a, b, apples, oranges) {
    let apple_tree_pos = a;
    let orange_tree_pos = b;
    let house_loc = [s,t];
    let hm_apples = 0;
    let hm_oranges = 0;

    for(let i = 0; i < apples.length; i++){
        let val = apples[i];
        
        if(val > 0){
            let dist = apple_tree_pos + val;
            if(dist >= house_loc[0] && dist <= house_loc[1]){
                hm_apples++;
            }
        }
    }

    for(let i = 0; i < oranges.length; i++){
        let val = oranges[i];

        if(val < 0){
            let dist = orange_tree_pos + val;
            if(dist >= house_loc[0] && dist <= house_loc[1]){
                hm_oranges++;
            }
        }

    }

    console.log(hm_apples);
    console.log(hm_oranges);

}



function main() {
    const st = readLine().split(' ');

    const s = parseInt(st[0], 10);

    const t = parseInt(st[1], 10);

    const ab = readLine().split(' ');

    const a = parseInt(ab[0], 10);

    const b = parseInt(ab[1], 10);

    const mn = readLine().split(' ');

    const m = parseInt(mn[0], 10);

    const n = parseInt(mn[1], 10);

    const apples = readLine().split(' ').map(applesTemp => parseInt(applesTemp, 10));

    const oranges = readLine().split(' ').map(orangesTemp => parseInt(orangesTemp, 10));

    countApplesAndOranges(s, t, a, b, apples, oranges);
}
