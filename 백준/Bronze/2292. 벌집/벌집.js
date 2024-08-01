const filePath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\r\n');

const n = Number(input);
let black = 1;
let cnt = 1;

while (black < n) {
    black += 6 * cnt;
    cnt++;
}
console.log(cnt)
