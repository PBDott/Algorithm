n = int(input());

for i in range(n):
    h, w, n = map(int, input().split());
    floor = n % h;
    num = n // h + 1;
    if n % h == 0:
        num = n // h;
        floor = h;
    print(floor * 100 + num);
