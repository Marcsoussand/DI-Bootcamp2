import {array2} from './data.js';

function average(arrayn) {
    let sumAge = 0;
    arrayn.map(person => 
        sumAge += person.age);
    let averageAge = sumAge / arrayn.length;
    return averageAge;
    }

console.log(average(array2));
