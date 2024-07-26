n = int(input());

for i in range(n):
    a, b = map(int, input().split());
    result ="Case #{i}: {a} + {b} = {ab}".format(i=i+1, a=a, b=b, ab= a+b);
    print(result)
