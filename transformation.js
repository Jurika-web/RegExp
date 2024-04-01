import{workersData} from './workers data.js';
export function transformation(){
    let arr = [];
    
    for (let i = 0; i<workersData.length; i+=1){
        let worker = workersData[i].split(', ');
        let obj1 = {}
        for ( let b = 0; b<worker.length; b+=1){
            let worker1 = worker[b].split(': ');
            for(let a = 0; a<worker1.length; a+=1){
                obj1[worker1[a++]] = worker1[a];
            }
        }
        arr.push(obj1)
    }
 return arr
}
