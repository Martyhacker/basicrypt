const {reverse, straight, even, caesar} = require('./vocabulary/straight');
const string = 'I AM ENCRYPTING THIS TEXT';
var caesar_result = [],
    straight_result = [],
    reverse_result = [],
    even_result = [];
// Straight
for(var i =0; i<[...string].length; i++){
    caesar_result[i] = caesar[[...string][i]];
}
for(var i =0; i<[...string].length; i++){
    straight_result[i] = straight[[...string][i]];
}
for(var i =0; i<[...string].length; i++){
    reverse_result[i] = reverse[[...string][i]];
}
for(var i =0; i<[...string].length; i++){
    even_result[i] = even[[...string][i]];
}
console.log('Sezar: ', caesar_result.map(e => e.length ? e : ' ').join('').split(' ').join(" "));
console.log('\nStraight: ', straight_result.join(""));
console.log('\nReverse: ', reverse_result.join(""));
console.log('\nEven: ', even_result.join(""));