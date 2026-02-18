#Exercise 1
def display_message():
    print("I am learning about functions in Python")

display_message()

#Exercise 2: What's your favorite book

def favorite_book(title):
    print(f"One of my favorite books is {title}")

favorite_book("The Bible")

#Exercise 3: Some geography

def describe_city(city, country='Unknown'):
    print(f"{city} is in {country}")

describe_city("Paris", "France")
describe_city("reykjavik")

#Exercise 4: Random
import random

def random_number(parameter):
    if 1<= parameter <= 100:
        rand = random.randint(1,100)
        if parameter == rand:
            print("Success !")
        else:
            print(f"Fail! Your number: {parameter}, Random Number: {rand}")
    else:
        print("Please enter a number between 1 and 100")

random_number(50)

#Exercise 5: Let's create some personalized shirts

def make_shirt(size="large", text='I Love Python'):
    print(f"You choose a {size} T-Shirt with the following text: {text}")

make_shirt()
make_shirt('medium')
sizes = ['small', 'medium','large']
for size in sizes:
    make_shirt(size, 'New Message')

#Bonus

make_shirt(size="small", text="Hello!")

#Exercise 6: Magicians

magicians = ['Harry Houdini', 'David Blaine', 'Criss Angel']
def show_magicians(magician=magicians):
    for item in magician:
        print(item)

show_magicians()

def make_great(magician=magicians):
    modified_magicians = []
    for item in magician:
        modified_magicians.append("The Great "+item)
    print(modified_magicians)

make_great()    
#Step 3 asks to put the great before magician name, where the expected output show it after the name. 

#Comment not removed from AI at the end of Exercise 6 

#Exercise 7: 
def get_random_temp():
    return round(random.uniform(-10,40),2)

def get_random_temp_bonus(season):
    if season == 'winter':
        return round(random.uniform(-10,15))
    elif season == 'spring':
        return round(random.uniform(0,20))
    elif season == 'summer':
        return round(random.uniform(15,40))
    elif season == 'autumn':
        return round(random.uniform(0,20))

   
def main():
    season='winter'
    month = int(input("Please give me the current month (1-12):"))
    if 3 <= month <6:
        season = 'spring'
    elif 6 <= month < 9:
        season = 'summer'
    elif 9 <= month < 12:
        season = 'autumn'
    temp = get_random_temp()
    temp_bonus = get_random_temp_bonus(season)
    print(f"The temperature right now is {temp} degrees Celsius")
    print(f"The temperature right now is {temp_bonus} degrees Celsius")
    if temp < 0:
        print("Brrr, that’s freezing! Wear some extra layers today.")
    elif 0 <= temp < 16:
        print("Quite chilly! Don’t forget your coat.")
    elif 16 <= temp <= 23:
        print("Nice weather.")
    elif 23 < temp < 32:
        print("A bit warm, stay hydrated.")
    elif 32 <= temp <=40:
        print("It’s really hot! Stay cool.")
    else:
        print("Something went wrong, sorry")
    if temp_bonus < 0:
        print("Brrr, that’s freezing! Wear some extra layers today.")
    elif 0 <= temp_bonus < 16:
        print("Quite chilly! Don’t forget your coat.")
    elif 16 <= temp_bonus <= 23:
        print("Nice weather.")
    elif 23 < temp_bonus < 32:
        print("A bit warm, stay hydrated.")
    elif 32 <= temp_bonus <=40:
        print("It’s really hot! Stay cool.")
    else:
        print("Something went wrong, sorry")

main()