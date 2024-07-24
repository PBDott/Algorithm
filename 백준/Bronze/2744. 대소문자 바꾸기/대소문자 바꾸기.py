s = input();
result = "";
for i in s:
    if i.isupper() == True:
        result += i.lower();
    else:
        result += i.upper();
print(result);