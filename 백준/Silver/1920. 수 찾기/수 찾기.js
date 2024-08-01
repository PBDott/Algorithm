const filePath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

const n = input[1].split(' ').map(v=>+v);
const m = input[3].split(' ').map(v=>+v);
const result = [];

n.sort((a, b) => a - b);

m.forEach(v => {
    let start = 0;
    let end = n.length - 1;
    let found = false;
    while (start <= end) {
        let mid = parseInt((start + end) / 2);
        if (v < n[mid]) {
            end = mid - 1;
        } else if (v > n[mid]) {
            start = mid + 1;
        } else {
            found = true;
            break;
        }
    }
    if (found === true) {
        result.push(1);
    } else {
        result.push(0);
    }
});

console.log(result.join('\n'));