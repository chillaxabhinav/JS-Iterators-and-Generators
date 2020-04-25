// console.log('Connected successfully');

// ==================== Iterators ==================== //

// Below I have defined my own iterator

function myIterator(start, finish){
    let index = start;
    let count = 0;

    return{
        next(){
            let result;
            if(index < finish){
                result = {value : index,done : false};
                index += 1;
                count++;
                return result;
            }
            return {
                value : count,
                done : true
            }
        }
    }
}

// let it = myIterator(0,10);
// let res = it.next();
// res = it.next();

// while(res.done !== true){
//     console.log(res.value);
//     res = it.next();
// }


// Using build in iterables to create iterators

// 1. Using Array iterable

const arr = [0,2,4,6];

// const it = arr[Symbol.iterator]();

// let res = it.next();

// while(!res.done){
//     console.log(res.value);
//     res = it.next();
// }

// 2. Using Map Iterable

const myMap = new Map();
myMap.set('key1','value1');
myMap.set('key2','value2');

// const it = myMap[Symbol.iterator]();

// let res = it.next();

// while(!res.done){
//     console.log(res.value);
//     res = it.next();
// }



// ================== Generators ================== //



function *mygen(){
    var ts = Date.now();
    console.log('Original ts: ',ts);
    yield ts;
    console.log('Waiting');
    var additionalTime = yield;
    console.log('Additional Time: ', additionalTime);
    if(additionalTime){
        ts = ts + additionalTime;
    }
    console.log(ts);
}

const it = mygen();
let originalTs = it.next();
console.log(originalTs);
it.next();
it.next(1000);
