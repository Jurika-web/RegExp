import { workersData } from "./workers data.js";
import { allList,  blackList} from "./black list.js";
import{dismissals, regexp1, regexp2} from './dismissal.js';

let BlackList = document.getElementById('BlackList');
let AllWorkers = document.getElementById('AllWorkers');
let Black = blackList();
export function paintTile(){
for(let i = 0; i<Black.length; i++){
    let tileBL = document.createElement('div');
    BlackList.append(tileBL);
    let field1BL = document.createElement('div');
    let field2BL = document.createElement('div');
    let field3BL = document.createElement('div');
    tileBL.append(field1BL, field2BL, field3BL);
    field1BL.style.height = '30%';
    field1BL.style.textAlign = 'center';
    field1BL.style.width = '90%';
    field1BL.style.backgroundColor = 'black'
    field1BL.style.color = 'white';
    field1BL.style.border= 'solid 2px white'
    field1BL.style.paddingLeft = '10px';
    field1BL.style.paddingRight = '10px';
    field2BL.style.textAlign = 'center';
    field2BL.style.height = '30%';
    field2BL.style.width = '90%';
    field2BL.style.backgroundColor = 'black'
    field2BL.style.color = 'white';
    field2BL.style.border= 'solid 2px white'
    field2BL.style.paddingLeft = '10px';
    field2BL.style.paddingRight = '10px';
    field3BL.style.textAlign = 'center';
    field3BL.style.height = '30%';
    field3BL.style.width = '90%';
    field3BL.style.backgroundColor = 'black'
    field3BL.style.color = 'white';
    field3BL.style.border= 'solid 2px white';
    field3BL.style.paddingLeft = '10px';
    field3BL.style.paddingRight = '10px';
    let dismissed = Object.entries(Black[i]);
    field1BL.textContent = dismissed[0].join(': ');
    field2BL.textContent = dismissed[1].join(': ');
    field3BL.textContent = dismissed[2].join(': ');

}
for(let i = 0; i<allList.length; i++){
    let tile = document.createElement('div');
    AllWorkers.append(tile);
    tile.classList.add('tile'+i);
    tile.style.height = '23%';
    tile.style. width = '18%';
    tile.style.border = 'solid 1px black';
    tile.style.display = 'flex';
    tile.style.flexDirection = 'column';
    tile.style.justifyContent = 'space-around'
    tile.style.margin = '5px';
    tile.style.boxShadow = 'inset 2px 2px 5px rgba(154, 147, 140, 0.5), 1px 1px 5px rgba(255, 255, 255, 1)';
    let field1 = document.createElement('div');
    let field2 = document.createElement('div');
    let field3 = document.createElement('div');
    tile.append(field1, field2, field3)
    field1.style.height = '25%';
    field1.style.width = '100%';
    field1.style.textAlign = 'center'
    field2.style.height = '25%';
    field2.style.width = '100%';
    field3.style.height = '25%';
    field3.style.width = '100%';
    let worker = Object.entries(allList[i])
    field1.textContent = worker[0].join(': ');
    field2.textContent = worker[1].join(': ');
    field3.textContent = worker[2].join(': ');
    if(worker[1][1].match(/\$/)){
        field2.style.color = 'red'
        tile.style.border = 'solid 1px red';
    }
    if(worker[1][1].match(/€/)){
        field2.style.color = 'red'
        tile.style.border = 'solid 1px red';
    }
    if(worker[2][1].match(/hamster/)){
        field3.style.color = 'red'
        tile.style.border = 'solid 1px red';
    }

}


}