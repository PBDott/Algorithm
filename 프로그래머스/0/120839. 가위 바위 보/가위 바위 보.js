function solution(rsp) {
    const arr = rsp.split("");
    const result = [];
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] == 0) {
            result.push("5");
        } else if (arr[i] == 2) {
            result.push("0");
        } else {
            result.push("2");
        }
    }
    return result.join("")
}