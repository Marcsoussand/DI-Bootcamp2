#Exercise 1: Birthday Look-up
birthdays = {"Marc":"1983/09/16", "Sophie":"1985/10/09", "Aaron":"2017/04/26", "Naor":"2019/07/28","Elon":"2025/04/03"}
names = list(birthdays.keys())
print("Welcome to the birthday look-up!! You may look up the birthdays of the people in the list")
print(names)
name = input("Give me a person name: ")

if name in birthdays:
    print(f"Birthday date of {name} is {birthdays[name]}")
else:
    print(f"Sorry, we don’t have the birthday information for {name}")

#Exercise 2 inside

#Exercice 3

new_person = input("Please enter a new name: ")
new_birthday = input("Please enter this person's birthday: (YYYY/MM/DD)")
birthdays[new_person] = new_birthday

#Exercise 4: FRuit Shop

items = {
    "banana": 4,
    "apple": 2,
    "orange": 1.5,
    "pear": 3
}
print (", ".join(f"{k}: {v}" for k,v in items.items()))

items = {
    "banana": {"price": 4 , "stock":10},
    "apple": {"price": 2, "stock":5},
    "orange": {"price": 1.5 , "stock":24},
    "pear": {"price": 3 , "stock":1}
}

total_fruit_cost=0

for info in items.values():
    # print(info['price'])
    total_fruit_cost += info['price'] * info['stock']
print(f"Total fruits cost: {total_fruit_cost}")

#option one line

total_fruit_cost = sum(info['price']*info['stock'] for info in items.values())
print(f"Total fruits cost: {total_fruit_cost}")

