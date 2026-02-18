sum = 0
number = int(input("Enter a number: "))
for i in range(1,number):
    print(i)
    if number % i == 0:
        sum += i
        print(sum)

if number == sum:
    print(f"{number} is a perfect number, congratulations !")
else: 
     print(f"{number} is a not perfect number, sorry !")
