import calendar
from datetime import datetime,date

birthday_date = input("Please enter your birthday date (DD/MM/YYYY): ")
year = int(birthday_date[-4:])
# print(year)
today = date.today()
born = datetime.strptime(birthday_date,"%d/%m/%Y").date()
age = today.year - born.year
if (today.month, today.day) < (born.month, born.day):
    age -= 1
print(f"Age: {age}")

age_string = age % 10

sizes_underscore = (11 - age_string)
# print(f"sizes_underscore: {sizes_underscore % 2}")
if sizes_underscore % 2 == 1:
    left_underscore = int(sizes_underscore // 2 + 1)
    right_underscore = int(sizes_underscore // 2)
    
else: 
    left_underscore = int(sizes_underscore / 2)
    right_underscore = int(sizes_underscore / 2)
# print(left_underscore, right_underscore)

print("    "+"_"*left_underscore+"i"*age_string+"_"*right_underscore+"   ")
print("   |:H:a:p:p:y:|   ")
print(" __|___________|__ ")
print("|^^^^^^^^^^^^^^^^^|")
# print("                   ")
print("|:B:i:r:t:h:d:a:y:|")
print("|                 |")
print("~~~~~~~~~~~~~~~~~~~")

if calendar.isleap(year):
    print("    "+"_"*left_underscore+"i"*age_string+"_"*right_underscore+"   ")
    print("   |:H:a:p:p:y:|   ")
    print(" __|___________|__ ")
    print("|^^^^^^^^^^^^^^^^^|")
    # print("                   ")
    print("|:B:i:r:t:h:d:a:y:|")
    print("|                 |")
    print("~~~~~~~~~~~~~~~~~~~")