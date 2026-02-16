#Challenge 1: Multiples of a Number

num_integer = int(input("Please give me an integer:"))
num_length = int(input("Please give me a length (integer): "))
result = []
for i in range(1,num_length+1):
    result.append(num_integer*i)
print(result)

#Challenge 2: Remove Consecutive Duplicate Letters

challenge2_input = input("Please give me a sentence: ")
result2 = challenge2_input[0]
for i in range(1,len(challenge2_input)):
    if challenge2_input[i] != challenge2_input[i-1]:
        result2 += challenge2_input[i]

print(result2)
