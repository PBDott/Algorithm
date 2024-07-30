n = int(input());
person = [];

for i in range(n):
    person.append(list(input().split()));

person.sort(key=lambda x: int(x[0]));

for i in person:
    print(i[0], i[1]);