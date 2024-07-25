n = int(input());


for i in range(n):
    arr = input();  
    result = 0;
    cnt = 1;
    for j in range(len(arr)):
        if arr[j] == "O":    
            result += cnt;
            cnt += 1;
        else:
            cnt = 1;
    print(result);