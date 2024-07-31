n, k = map(int, input().split());
arr = [];
result = [];
index = 0;

for i in range(1, n + 1):
    arr.append(i);

while arr:
    index = (index + k - 1) % len(arr);
    result.append(arr.pop(index));

print('<', ', '.join(map(str, result)), '>', sep="");

