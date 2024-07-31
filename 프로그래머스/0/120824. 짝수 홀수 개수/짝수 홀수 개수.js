function solution(num_list) {
    let odd = 0;
    let even = 0;
    let result = [];
    for(let i = 0; i < num_list.length; i++) {
        if(num_list[i] % 2 == 0) {
            even++; 
        }else {
            odd++;
        }
    }
    result.push(even, odd);
    return result
}