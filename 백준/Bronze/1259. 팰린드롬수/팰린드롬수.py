while True:
    arr = input();
    if arr[0] == "0":
        break;
    flag = 1
    for i in range(len(arr)):
        if arr[i] != arr[-(i+1)]:
            flag = 0
        
    if flag == 1:
        print("yes");
    else:
        print("no")