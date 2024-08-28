const filePath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
const arr = require('fs').readFileSync(filePath).toString().trim().split(/\s/);
let [N, m, M, T, R] = arr.map(Number);

let result = 0;
let cnt = 0;
let currentm = m


if((M - m) < T) {
    console.log(-1);
} else {
    while(cnt < N) {
        result ++;
        if(m + T <= M) {
            m += T;
            cnt++;
        } else {
            m -= R;
            if(m < currentm) {
                m = currentm;
            }
        }
    }   
    console.log(result);
}