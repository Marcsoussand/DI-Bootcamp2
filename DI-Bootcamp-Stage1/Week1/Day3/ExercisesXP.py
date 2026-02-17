#Exercise1: Converting Lists into Dictionaries

keys = ['Ten', 'Twenty', 'Thirty']
values = [10, 20, 30]

my_dictionary = {}

for i in range(0, len(keys)):
    my_dictionary[keys[i]] = values[i]

print(my_dictionary)


#Exercise2: Cinemax #2
family = {"rick": 43, 'beth': 13, 'morty': 5, 'summer': 8}
price = 0

for name, age in family.items():
    if age < 3:
        print(f" Ticket is free for {name}")
        continue
    if 3 <= age <=12:
        price += 10
        print(f" Ticket price is 10$ for {name}")
    if age > 12:
        price += 15
        print(f" Ticket price is 15$ for {name}")
print(f"Total ticket prices is {price} for the whole family")

# Bonus for Exercise 2
family_input = {}
while True:
    input_name = input("Enter a new name or type 'quit': ")
    if input_name != 'quit':
        family_input[input_name] = int(input(f"Enter the age of {input_name}: "))
    else:
        print(family_input)
        price = 0

        for name, age in family_input.items():
            if age < 3:
                print(f" Ticket is free for {name}")
                continue
            if 3 <= age <=12:
                price += 10
                print(f" Ticket price is 10$ for {name}")
            if age > 12:
                price += 15
                print(f" Ticket price is 15$ for {name}")
        print(f"Total ticket prices is {price} for the whole family")
        break

    #Exercice 3: Zara

brand = {
    'name': 'Zara',
    'creation_date': 1975,
    'creator_name': 'Amancio Ortega Gaona',
    'type_of_clothes': ['men', 'women', 'children', 'home'],
    'international_competitors': ['Gap', 'H&M', 'Benetton'],
    'number_stores': 7000,
    'major_color': { 
        'France': 'blue', 
        'Spain': 'red', 
        'US': ['pink', 'green']
    }
}
#Change the value of number_stores to 2.
brand['number_stores'] = 2
#Print a sentence describing Zara’s clients using the type_of_clothes key.
print(f"Zara's clients type of clothes: {', '.join(brand['type_of_clothes'])}")
#Add a new key country_creation with the value Spain.
brand['country_creation'] = 'Spain'
#Check if international_competitors exists and, if so, add “Desigual” to the list.
if brand['international_competitors']:
    brand['international_competitors'].append('Desigual')
# print(brand)
#Delete the creation_date key.
del brand['creation_date']
# print(brand)
#Print the last item in international_competitors.
print(f"Last international competitor: {brand['international_competitors'][-1]}")
#Print the major colors in the US.
print(f"Major color in the US: {brand['major_color']['US']}")
#Print the number of keys in the dictionary.
#Manual way
counter_key = 0
for key in brand:
   counter_key +=1
print(counter_key)
#Built-in way
print(len(brand))

#Print all keys of the dictionary.
for key in brand:
    print(key)

#Bonus:
more_on_zara = {
    'creation_date': 1975,
    'number_stores': 7000
}

brand.update(more_on_zara)

print(brand)

#Exercise 4: Disney Characters
users = ["Mickey", "Minnie", "Donald", "Ariel", "Pluto"]

#1. Create a dictionary that maps characters to their indices:
indices = {user: index for index, user in enumerate(users)}
print(indices)

#2. Create a dictionary that maps indices to characters:
characters = {index:user for index, user in enumerate(users)}
print(characters)

#3. Create a dictionary where characters are sorted alphabetically and mapped to their indices:
users.sort()
sorted_characters = {user:index for index, user in enumerate(users)}
print(sorted_characters)