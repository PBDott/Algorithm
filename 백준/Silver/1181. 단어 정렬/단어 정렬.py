import sys # 시간 초과 이슈
n = int(sys.stdin.readline());
arr = [];

for i in range(n):
    arr.append(sys.stdin.readline().strip());

array = list(set(arr))
array.sort();
array.sort(key=len);

for i in array:
    print(i);
