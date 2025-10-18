//      RRRRRRRRRR  IIIIIIIIIIII   NN        NN   NN        NN    YY      YY
//      RR      RR       II        NNNN      NN   NNNN      NN      YY  YY
//      RR      RR       II        NN  NN    NN   NN  NN    NN        YY
//      RRRRRRRRRR       II        NN    NN  NN   NN    NN  NN        YY
//      RR    RR         II        NN      NNNN   NN      NNNN        YY
//      RR     RR        II        NN        NN   NN        NN        YY
//      RR      RR  IIIIIIIIIIII   NN        NN   NN        NN        YY

//This OS is named after Rinny from Pretty Blood, despite having no relation to the series itself.
//Why did I codename a project after a fictional serial torturer/killer? I wanted a consistent naming scheme for future OS Codenames.
//And no, I'm not doing what Eluca calls "Developing" (AKA Neutering peoples' abilities to pursue their dreams.) This is actual development.
//Don't worry, This won't ruin or end anyone's lives. At worst, it's gonna make GoGuardian devs pull their hair out trying to block it.
//This project is probably going to be the closest thing to a real OS possible in a file:// environment.


const nonFatalErrors = ["A Program failed to load. If you're a developer, check your program's metadata file.", "An unexpected error occurred. Please try again later.", "Failed to complete the requested operation. Please file a bug report on GitHub if the problem persists."];
const fatalErrors = ["A critical error occurred. The system will now halt.", "A fatal error has been detected. Please restart the system.", "System failure! Immediate attention required."];


export function getBrowserInfo() {
    const ua = navigator.userAgent;
    let browserName = "Unknown";
    let fullVersion = "Unknown";
}
function getPrograms() {
    let progList = [];
    for(x=0;x++;x<65536) {
        //Scans for programs. Program IDs are similar to that of Steam's AppIDs. The maximum number of programs is 65535.
        //Why did I artifically set it to the 16-bit integer limit? A: Because I'm a nerd who likes retro stuff, and B: It might avoid a memory leak.
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

window.onbeforeunload = function() {
    return true;
};
//ROFL, GoGuardian! Your flimsy extension-based filters are weaker than that Thneedville wall from The 2012 Lorax movie

export function runProgram(input, args, debug=false){

}