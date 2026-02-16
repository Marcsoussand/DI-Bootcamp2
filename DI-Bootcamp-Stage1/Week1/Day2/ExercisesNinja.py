#Exercise1 

import math
def exercise1_function(C, D, H):
    q = math.sqrt((2*C*D)/H)
    return q
C = 50
H = 30
d_input = input("Please enter a comma-separated string of numbers: ")
d_list = d_input.split(",")
result = []

for D in d_list:
    q = exercise1_function(C, int(D), H)
    result.append(str(int(q)))
print(",".join(result))

#Exercise2
#1. Store the list of numbers in a variable.
a = [3, 47, 99, -80, 22, 97, 54, -23, 5, 7] 
b = [44, 91, 8, 24, -6, 0, 56, 8, 100, 2] 
c = [3, 21, 76, 53, 9, -82, -3, 49, 1, 76] 
d = [18, 19, 2, 56, 33, 17, 41, -63, -82, 1]
#2. Print the following information:
#a. The list of numbers – printed in a single line
print(a)
#b. The list of numbers – sorted in descending order (largest to smallest)
a.sort(reverse=True)
print(a)
#c. The sum of all the numbers
print(sum(a))
#3. A list containing the first and the last numbers.
b= [min(a), max(a)]
print(b)
#4. A list of all the numbers greater than 50.
more_than_50 = []
for n in c:
    if n>50:
        more_than_50.append(n)
print(f"Numbers greater than 50: {more_than_50}")
#5.A list of all the numbers smaller than 10.
smaller_than_10 = []
for n in a:
    if n<10:
        smaller_than_10.append(n)
print(f"Numbers smaller than 10 : {smaller_than_10}")
#6 A list of all the numbers squared – eg. for [1, 2, 3] you would print “1 4 9”.
squared = []
for n in a:
    squared.append(n*n)
print(f"Squared list: {squared}")

#7.The numbers without any duplicates – also print how many numbers are in the new list.

no_duplicates = set(c)
no_duplicates_list = list(no_duplicates)
print(f"No duplicates list: {no_duplicates_list}, and numbers in the list: {len(no_duplicates_list)}")

# 8. The average of all the numbers.
import statistics
print(f"Average of all the numbers {statistics.mean(a)}")

#9. The largest number.
print(f"Largest Number: {max(a)}")

#10. The smallest number 
print(f"Smallest Number: {min(a)}")

#11. Bonus: Find the sum, average, largest and smallest number without using built in functions.
sum_new = 0

for n in a:
    sum_new +=n
print(f"Manual sum: {sum_new}")

print(f"Average of all the numbers {sum(a)/len(a)}")

max_new = a[0]
for n in a:
    if n > max_new:
        max_new = n
print(max_new)

min_new = a[0]
for n in a:
    if n < min_new:
        min_new = n
print(min_new)

#12. Bonus: Instead of using pre-defined lists of numbers, ask the user for 10 numbers between
#  -100 and 100. Ask the user for an integer between -100 and 100 – repeat this question 10
#  times. Each number should be added into a variable that you created earlier.

new_list =[]
for i in range(1,11):
    new_list.append(int(input("Merci de rentrer un nombre entre -100 et 100: ")))
print(new_list)
#13. Bonus: Instead of asking the user for 10 integers, generate 10 random integers yourself.
#  Make sure that these random integers are between -100 and 100.
import random  
new_list_random = []
for i in range (0,10):
    new_list_random.append(random.randint(-100,100))
print(new_list_random)

#14. Random size of random numbers
new_random_number = random.randint(1,50)
new_list_random_2 = []

for i in range (0,new_random_number):
    new_list_random_2.append(random.randint(-100,100))
print(new_list_random_2)

#15. Yes it should (excluding 12 but which is in the bonus)

#Exercise 3 
paragraph = """The phrase is not only a shorthand for the imminent kickoff of the new season. It also applies to the league’s value to the US men’s national team under Mauricio Pochettino as the 2026 FIFA World Cup on home soil looms.

The Argentine head coach turned heads from coast to coast last August when he declared, “We need to give MLS the value, because I think competing there, I think the player can show that they can perform in the national team … It's not necessary to move from MLS to Europe.”

Those words reflected the coach’s desire to stoke competition and hunger among every single member of his team, and his recognition of the league’s dramatic maturation in recent years. And they also signaled to aspiring USMNTers across MLS that high performance here will be noted and rewarded by ‘Poch’ and his staff."""
print("Analysis of the paragraph")
print(f"Length of the paragraph: {len(paragraph)}")
sentence_numbers = paragraph.count(".")+1
print(f"Numbers of sentences: {sentence_numbers}")
words_number = len(paragraph.split())
print(f"Number of words: {words_number}")
set_paragraph = set(paragraph.split())
print(f"Number of Unique Words: {len(set_paragraph)}")
print(f"Number of non-whitespace characters: {len(paragraph.replace(" ",""))}")
print(f"Average amount of words per sentence in the paragraph: {words_number/sentence_numbers}")
counter_non_unique = 0
non_unique = []
for word in set_paragraph:
    if paragraph.count(word)> 1:
        counter_non_unique +=1
        
print(f"Non_unique words in the paragraph: {counter_non_unique}")


#Exercise 4: 
from collections import Counter
input_sentence = input("Please enter a sentence: ")
words = input_sentence.split()
words_count = Counter(words)
for word, count in words_count.items():
    print(f"{word}:{count}")