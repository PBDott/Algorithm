function solution(num_list) {
    let result = [];
    for(let i = 0; i < num_list.length; i++) {
        result[i] = num_list[num_list.length - i - 1];
    }
    return result;
}