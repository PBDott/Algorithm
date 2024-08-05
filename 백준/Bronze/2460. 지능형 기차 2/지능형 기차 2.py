sum = 0;
result = 0;
for i in range(10):
    x, y = map(int, input().split());
    sum += -x +y
    if(sum > result):
        result = sum;
print(result);
