a = list(map(int, input().split()));
b = [];
c = list(map(int, input().split()));

b.append(abs(a[2] - c[0]));
b.append(c[1] // a[1]);
b.append(abs(a[0] - c[2]));

for i in b:
    print(i, end=" "); 