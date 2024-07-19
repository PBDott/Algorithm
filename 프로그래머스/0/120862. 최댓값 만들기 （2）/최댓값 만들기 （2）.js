function solution(numbers) {
    numbers.sort((a, b) => (b - a));
    const arr1 = numbers[0] * numbers[1];
    const arr2 = numbers[numbers.length - 1] * numbers[numbers.length - 2];
    
    return arr1 > arr2 ? arr1 : arr2
}