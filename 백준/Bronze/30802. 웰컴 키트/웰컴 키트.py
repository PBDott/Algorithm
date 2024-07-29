import math

n = int(input());
arr = list(map(int, input().split()));
t, p = map(int, input().split());
cnt = 0;

for i in range(len(arr)):
    if arr[i] == 0:
        continue;
    elif arr[i] < t:
        cnt += 1;
    else:
        cnt += math.ceil(arr[i] / t);
print(cnt);
print(math.ceil(n // p), n % p, end=" ");