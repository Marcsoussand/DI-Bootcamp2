# print('Hello to Python')
#basic math operations
# print(2+2) # =4
# print(10-3) #=7
# print(20/4) #=5.0
# print(10//3) #=3
# print(10%3) #=1
# print(2**8) #=256

#Order of operations
# print (5+3*2) #=11
# print ((5+3)*2) #=16
greeting = "Hello Class"
# print(type(greeting)) #=<class 'str'>
# print(type('hi'))
# print(type(123))
# print(type("123"))

# String method
# print(greeting.upper()) #=HELLO CLASS
# print(greeting.lower()) #=hello class
# print(greeting.capitalize()) #=Hello class
# print(len(greeting)) #=11

#String Concatenation
# first = "John"
# last = "Doe"
# full_name = first + " " + last
# print(full_name) #=John Doe

# test = "Hello, World"
# test =test.replace("World", "Python") #=Hello, Python
# print(test)
# print(test.count('l'))

# multiline = """
# line 1 
# line2 
# """
# print(multiline)
# print(test[0])
# print(test[-1])

#Numbers
#integers
# age=25
# temp=25
# year=2026
# print(type(year)) #=<class 'int'>

#float
# price = 19.99
# pi = 3.14159
# print(type(price))

#boolean
# is_sunny = True
# is_raining = False

# print(type(is_sunny)) 
# print(5>3) #=True
# print(10<5)
# print(5==5) #=True
# print(5!=5) #=False

#Comparison operators
# >, <, >=, <=, ==, !=
#Logical Operators
# and, or, not

# print(True and True)
# print (not True)

# x=42
# y= "42"

# print(x+1)
# print(int(y)+1)

# num = 42
# print(str(num)+ ' is the answer')

# print(bool(1)) #= True
# print(bool(0)) #= False
# print(bool(-1)) #= True
# print(bool("")) #= False

# name = "Alice"
# age = 25
# height = 186.5
# is_student = True

# a,b,c = 1,2,3
# print(a,b,c) #= 1 2 3

#incrementing
# counter = 0
# counter = counter + 1
# counter *= 5

# String Formatting
# first= "John"
# last = "Doe"

# text1 = "Hello," + " " + first+ " " + last 
# print(text1)

# text2 = "Hello, {} {}".format(last, first)
# print(text2)

# text3= f"Hello, {first} {last}"
# print(text3)

# price = 19.99
# quantity = 3
# total = f"Total: ${price*quantity}"
# print(total)

# pi = 3.14159
# print(f"Pi: {pi:.2f}")

# name = input("What is your name? ")
# print(f"Hello, {name}!")
# age = input("What is your age? ")
# print(f"My age is {int(age)+1}")

# age = 15
# if age >=18:
#     print("You can vote!")
# print("Finish") 

# score = 50

# if score >=90:
#     grade = "A"
# elif score >=80:
#     grade = "B"
# elif score >=70:
#     grade = "C"
# else:
#     grade = "F"

# print(grade)

has_license = True
if not has_license:
    print("No")
else:
    print("Yes")

my_age = 20

status = "adult" if my_age >=18 else "minor"
print(status)