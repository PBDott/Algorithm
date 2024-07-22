function solution(age) {
    const arr = age.toString().split("")
    let str = ""
    for(let i = 0; i < arr.length; i++) {
        str += String.fromCharCode(Number(arr[i]) + 97);
    }
    return str
}