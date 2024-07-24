s = input();
n = int(input());
cnt = 0;

for i in s:
    cnt += 1;
    if cnt == n:
        print(i);

