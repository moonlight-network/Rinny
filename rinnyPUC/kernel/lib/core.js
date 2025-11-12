//      RRRRRRRRRR  IIIIIIIIIIII   NN        NN   NN        NN    YY      YY
//      RR      RR       II        NNNN      NN   NNNN      NN      YY  YY
//      RR      RR       II        NN  NN    NN   NN  NN    NN        YY
//      RRRRRRRRRR       II        NN    NN  NN   NN    NN  NN        YY
//      RR    RR         II        NN      NNNN   NN      NNNN        YY
//      RR     RR        II        NN        NN   NN        NN        YY
//      RR      RR  IIIIIIIIIIII   NN        NN   NN        NN        YY

//THIS IS THE KERNEL! DON'T MODIFY IT UNLESS YOU KNOW EXACTLY WHAT YOU'RE DOING!


const crashes = ["Invalid"]
const ua = navigator.userAgent






function getPrograms() {
    let progList = [];
    for(let x=0;x++;x<65536) {
        //Scans for programs. Program IDs are similar to that of Steam's AppIDs. The maximum number of programs is 65536.
        //This artificial limit is practical for avoiding a memory leak.
        try {
            let prog = localStorage.getItem("rinnyPUC_prog_" + x);
            if (prog) {
                progList.push(JSON.parse(prog));
            }
        } catch (e) {
            const msg = `Error loading program with ID ${x}:  ${e}`
            console.error(msg);
            error(msg);
        }
    }
    return progList;
        
}




























//I feel like adding Three.js for the sake of reducing three.js program sizes. However, it would lead to a similar situation that resulted in DotNet Framework existing.

//Redstone Network's Clockwork is if your average Unblocked Games site decided to have a baby with W10M's Continuum feature.
//Good, I guess, but it multitasks like a mobile OS, which sucks for keyboard and mouse users.

export function runProgram(input, args, debug=false){

}