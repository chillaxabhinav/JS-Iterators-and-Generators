const axios = require('axios');

const readline = require('readline').createInterface({
    input : process.stdin,
    output : process.stdout
});

readline.question(`What you would like to log today\n`,async (item) => {
    const { data } = await axios.get('http://localhost:3001/food');
    const it = data[Symbol.iterator]();
    let position = it.next();
    while(!position.done){
        const food = position.value.name;
        if(food === item){
            console.log(`${item} has ${position.value.calories} calories.`);
            break;
        }
        position = it.next();
    }
    readline.close();
})