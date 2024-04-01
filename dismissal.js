import { allList } from "./black list.js";
let dismissalsWorkers = [];
export let regexp1 = /hamster/;
export let regexp2 = /\$/||/€/;
export function dismissals(){
for(let i = 0; i < allList.length; i++){
    let worker = Object.values(allList[i]);
if(worker[1].match(regexp2)){
    dismissalsWorkers.push(worker);
}
 if(worker[2].match(regexp1)){
    dismissalsWorkers.push(worker);
 } 
}
return dismissalsWorkers
}