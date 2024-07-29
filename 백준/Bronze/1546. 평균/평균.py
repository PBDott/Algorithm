n = int(input());
arr = list(map(int, input().split()));
maxarr = max(arr);
tmp = 0;

for i in range(n):
    tmp += arr[i] / maxarr * 100;

print(tmp / n); 