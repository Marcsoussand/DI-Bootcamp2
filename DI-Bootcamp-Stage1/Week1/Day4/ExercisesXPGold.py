#1. Exercise 1 : When will I retire ?

today = {
    'year': 2026,
    'month': 2,
    'day': 18
}

def get_age(year, month, day):
    age = today['year'] - year  -1
    if month < today['month'] or (month == today['month'] and day < today['day']):
        age +=1
    print(age)
    return age

def can_retire(gender, date_of_birth):
    date_of_birth_year = int(date_of_birth[0:4])
    date_of_birth_month = int(date_of_birth[5:7])
    date_of_birth_day = int(date_of_birth[8:10])
    # print(date_of_birth_year,date_of_birth_month, date_of_birth_day)
    age = get_age(date_of_birth_year,date_of_birth_month,date_of_birth_day)
    if (gender == 'm' and age >= 67) or (gender == 'f' and age >= 62):
        return True
    else:
        return False
        
        


get_age(1983,9,16)

def main():
    gender = input("Please provide your gender (m/f): ")
    date_of_birth_input = input("Please enter your birthday date (yyyy/mm/dd): ")
    if can_retire(gender, date_of_birth_input):
        print("You may know enjoy your retirement time !!")
    else:
        print("You still have marvellous years of work ahead of you !!")
     

# main()

#2. Exercise 2: Sum

def sum_2():
    x = input("please enter an integer: ")
    sum = int(x)+ int(x+x)+ int(x+x+x)+ int(x+x+x+x)
    print(sum)

sum_2()

#Exercise 3: Double Dice
import random
def throw_dice():
    return random.randint(1,6)

def throw_until_doubles():
    dice_counter = 0
    while True:
        dice_counter += 1
        dice_1 = throw_dice()
        dice_2 = throw_dice()
        # print(dice_1,dice_2,":",dice_counter,";")
        if dice_1 == dice_2:
            break
    return dice_counter

throw_until_doubles()

def main_dice():
    list = []
    for i in range(0,100):
        list.append(throw_until_doubles())
    print(f"Total Throws: {sum(list)}")
    print(f"Average throws to reach doubles: {sum(list)/len(list)}")

main_dice()

        