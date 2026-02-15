#Exercise1
print(5*"Hello world\n")
#Exercise2
print((99**3)*8)
#Exercise3
print(5<3) # False
print(3 == 3) # True
print(3 == "3") # False
# print("3" > 3) # Error
print("Hello" == "hello") # False
#Exercise4
computer_brand = "Lenovo"
print(f"I have a {computer_brand} computer")
#Exercise5
name = "Marc"
age = 42
shoe_size = 40
info  = f"My name is {name}, I am {age} years old and my shoe size is {shoe_size}"
print(info)
#Exercise6
a = 12
b = 10
if a > b:
    print("Hello World")
#Exercise7
number = input("Enter a number: ")
if int(number) % 2 == 0:
    print(f"{number} is an even number.")
else:
    print(f"{number} is an odd number.")
#Exercise8
my_name = "Marc"
your_name = input("What is your name?")

if my_name == your_name:
    print("How come, I like your name so much !!! I have the same name as you")
else:
    print("We have different names!")
#Exercise9
height = input("What is your height in cm?")
if int(height) >= 145:
    print("You are tall enough to ride the rollercoaster!")
else:
    print("You need to grow some more to ride the rollercoaster!")

