#Exercise1
list_1 = [1,2,3,4,5]
list_2 = [6,7,8,9,10]
list_1.extend(list_2)
print(list_1) 

#Exercise2
for i in range(1500,2501):
    if i % 5 == 0 and i % 7 == 0:
        print(i)

#Exercise3

names = ['Samus', 'Cortana', 'V', 'Link', 'Mario', 'Cortana', 'Samus']
         
input_name = input("Enter your name: ")
if input_name in names:
    index = names.index(input_name)
    print(f"Your name {input_name}is in the list at index {index}")
else:
    print(f"Sorry, your name {input_name} is not in the list")

#Exercise4
numbers = []
for i in range(0,3):
    numbers.append(int(input(f"Input the {i+1} number: ")))
print(f"The greatest numer is: {max(numbers)}")


#Exercise5
import string 
alphabet = string.ascii_lowercase
vowels = "aeiou"
for letter in alphabet:
    if letter in vowels:
        print(f"{letter} is a vowel")
    else:
        print(f"{letter} is a consonant")

#Exercise6
words = []

for i in range(0,7):
    words.append(input(f"Input the {i+1} word: "))
letter = input(" Please enter a letter:")
for word in words: 
    if word.find(letter) != -1:
        print(f"{word} contains the letter {letter} at index {word.index(letter)}")
    else:        print(f"{word} does not contain the letter {letter}")

#Exercise7
million_list = [i for i in range(1,1000001)]
print(min(million_list))
print(max(million_list)) 
print(sum(million_list))

#Exercise8
comma_separated_numbers = input("Enter a list of comma separated numbers: ")
numbers_list = comma_separated_numbers.split(",")
numbers_tuple = tuple(numbers_list)
print(numbers_list)
print(numbers_tuple)

#Exercise9
import random
random_number = random.randint(1, 9)
wins = 0
losses = 0
while True:
    random_number_input = input("Please enter a number from 1 to 9 included: (You may type 'quit' to exit)")
    if random_number_input.lower() == 'quit':
        print("Exiting the game. Goodbye!")
        print(f"Total wins: {wins}, Total losses: {losses}")
        break
    elif random_number_input.isdigit():
        random_number_input = int(random_number_input)
        if 1 <= random_number_input <= 9:
            if random_number_input == random_number:
                print(f"Winner!")
                wins += 1
            else:
                print("Better luck next time!")
                losses +=1
        else:
            print("Invalid input. Please enter a number between 1 and 9.")