n = int(input());
for i in range(n):
    arr = list(input()); 
    if len(arr) == 1:
        print(arr[0] + arr[0]);
    elif len(arr) == 2:
        print(arr[0] + arr[1]);
    else:
        print(arr[0] + arr[len(arr) - 1]);