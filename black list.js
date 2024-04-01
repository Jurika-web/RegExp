import {transformation} from './transformation.js';
export let allList = transformation()
 let bl = [];
export function blackList(){
    let num1 = Math.floor(Math.random() * (20 - 0) + 0);
    let num2 = Math.floor(Math.random() * (20 - 0) + 0);
    let num3 = Math.floor(Math.random() * (20 - 0) + 0);
    bl.push(allList[num1]);
    bl.push(allList[num2]);
    bl.push(allList[num3]);
    return bl
}
