f = open("data.txt", "r")
data = f.readlines()
f.close()

print(data[0])
print(data[1])
print(len(data))

d1 = data[0].replace('\n', '')
print(d1)
ds = d1.split('\t')
print(ds)

result = []
for line in open('data.txt', 'r'):
    line.replace('\n', '')
    item = line.split('\t')
    if len(item) == 2:
        first = item[0].replace('\n', '')
        second = item[1].replace('\n', '')
        result.append([int(first), int(second)])

print(len(result))
# print(result)

import json

with open('data.json', 'w') as f:
    f.write(json.dumps(result))
