n = int(input())
for i in range(n):
    cnt, s = input().split();
    for j in range(len(s)):
        print(int(cnt) * s[j], end="");
    print();