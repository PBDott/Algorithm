function solution(my_string) {
    let arr = my_string.split("");
    let result = [... new Set(arr)];

    return result.join("");
}