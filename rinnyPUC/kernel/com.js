export function runProg(id){
    let script = document.createElement('script');
    script.src = `programs/${id}/main.js`;
    document.body.appendChild(script);
}
export function getVer(){
    console.log()
}