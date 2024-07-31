function solution(numbers) {
    let max = Math.max(...numbers);
    let index = numbers.indexOf(max);
    numbers[index] = 0;
    
    return max * Math.max(...numbers);
}