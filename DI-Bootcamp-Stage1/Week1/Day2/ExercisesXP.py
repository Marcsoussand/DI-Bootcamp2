#Exercise1

my_fav_numbers = {3,7,21}

my_fav_numbers.add(9)
my_fav_numbers.add(5)
my_fav_numbers.remove(5)
print(my_fav_numbers)

friend_fav_numbers = {2,4,6}

our_fav_numbers = my_fav_numbers.union(friend_fav_numbers)
print(our_fav_numbers) 

#Exercise2
my_tuple = (1,2,3,4,5)
# my_tuple.add(6)

#Exercise3
basket = ["Banana", "Apples", "Oranges", "Blueberries"]
basket.remove("Banana")
basket.remove("Blueberries")
basket.append("Kiwi")
basket.insert(0,"Apples")
basket.count("Apples")
basket.clear()
print(basket)

#Exercise4
#Float are numbers with digits after the decimal point, while integers are whole numbers without a decimal point.

my_list = [1.5,2, 2.5, 3, 3.5, 4, 4.5, 5]
print(my_list)
new_list = []
init_value = 1.5
for i in range(8):
    if init_value % 1 == 0:
        new_list.append(int(init_value))
    else: new_list.append(init_value)
    init_value += 0.5
print(new_list)

#Exercise5
for i in range(1,21):
    print(i)

for i in range(2,21,2):
    print(i)

#Exercise6

input_name = input("Enter your name: ")
checker = False

while not checker:
        if len(input_name) >= 3 and input_name.isalpha():
            checker = True
            print("thank you")
        else:
            input_name = input("give the correct name: ")

#Exercise7
favorite_fruits = input("Enter your favorite fruits, separated by spaces: ")
favorite_fruits_list = favorite_fruits.split()
print("Your favorite fruits are:", favorite_fruits_list)
fruit = input("Enter a new fruit: ")

if fruit in favorite_fruits_list:
    print("You chose one of your favorite fruits! Enjoy!")
else: 
    print("You chose a new fruit. I hope you enjoy it!")

#Exercise8
price = 10
toppings = []

while True:
    pizza_topping = input("Enter a pizza topping (or 'quit' to stop): ")
    if pizza_topping.lower() == 'quit':
        break
    else:
        toppings.append(pizza_topping)
        print(f"Adding {pizza_topping} to your pizza.")
        price +=2.5

print("Your pizza toppings are:", toppings)
print(f"Your final pizza price is ${price:.2f}")

#Exercise9
family_size = int(input("Enter the number of people in your family: "))
cost = 0
for i in range(family_size):
    age = input(f"Enter the age of family member {i+1}: ")
    if age.isdigit():
        age = int(age)
        if age < 3:
            cost += 0
        elif 3 <= age <= 12:
            cost += 10
        else:
            cost += 15
    else:
        print("Invalid input. Please enter a valid age.")
print(f"The total cost for your family is: ${cost}")

teenagers_group_size = int(input("Enter the number of teenagers in the group: "))
allowed = []
for i in range(teenagers_group_size):
    name = input(f"Enter the name of teenager {i+1}: ")
    age = input(f"Enter the age of {name}: ")
    if age.isdigit():
        age = int(age)
        if 16 <= age <= 21:
            allowed.append(name)
    else:
        print("Invalid input. Please enter a valid age.")
print("The following teenagers are allowed:", allowed)