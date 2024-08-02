const filePath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim();

const n = parseInt(input);
let result = 0;

for (let i = 1; i <= n; i++) {
    let sum = i;
    let str = i.toString();

    for (let j = 0; j < str.length; j++) {
        sum += parseInt(str[j]);
    }

    if (sum === n) {
        result = i
        break;
    }
}
console.log(result);
