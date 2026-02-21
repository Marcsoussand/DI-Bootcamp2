# Exercise 1
# Write a script that inserts an item at a defined index in a list.
letters = ['a', 'b', 'c']


letters.insert(2, 'd')
print(letters)

# Exercise 2

text = "salut ca va"

print(text.count(" "))

# exercise3

str3 = "Salut Comment Ca Va"
upper = 0
lower = 0
for i in range(0, len(str3)):
    if str3[i].isupper():
        upper += 1
    elif str3[i].islower():
        lower += 1
print(f"number of upper letters: {upper}, number of lower letters: {lower}")

# Exercise4

list_4 = [1, 5, 4, 2]

def my_sum(lst):
    total = 0
    for i in range(0, len(lst)):
        total += lst[i]
    print(total)

my_sum(list_4)

# Exercise 5

def find_max(lst):
    max_val = lst[0]
    for i in range(0, len(lst)):
        if lst[i] > max_val:
            max_val = lst[i]
    print(max_val)

find_max(list_4)
    
# Exercise 6

def factorial(n):
    result = 1
    for i in range(1, n + 1):
        result *= i
    print(result)
    return (result)

factorial(4)

# Exercise 7
list_7 = ['a', 'a', 't', 'o']

def list_count(lst, element):
    counter = 0
    for i in range(0, len(lst)):
        if lst[i] == element:
            counter += 1
    print(counter)

list_count(list_7, 'a')

# Exercise 8 
import math

def norm(lst):
    total = 0
    for i in range(0, len(lst)):
        total += lst[i] ** 2
    print(math.sqrt(total))

norm(list_4)
norm([1, 2, 2])

# Exercise 9 
def is_mono(lst):
    asc = sorted(lst)
    desc = sorted(lst, reverse=True)
    if asc == lst or desc == lst:
        print("True")
    else:
        print("False")

is_mono(list_7)
is_mono(list_4)
is_mono([7, 6, 5, 5, 2, 0])
is_mono([2, 3, 3, 3])

# Exercise 10

def longest_word(lst):
    result = lst[0]
    for i in range(1, len(lst)):
        if len(lst[i]) > len(lst[i - 1]):
            result = lst[i]
    print(result)

longest_word(['apple', 'banana', 'strawberry'])

# Exercise 11

def sort_integers_and_strings(items):
    string_list = []
    integers_list = []
    for x in items:
        if isinstance(x, int):
            integers_list.append(x)
        elif isinstance(x, str):
            string_list.append(x)
    print(string_list, integers_list)

sort_integers_and_strings(['abc', 123, 'def', 3, 4, 5, 6, 'a', 'b'])

# Exercise 12

def is_palindrome(s):
    s_clean = s.lower()
    if s_clean == s_clean[::-1]:
        print(True)
    else:
        print(False)

is_palindrome("Laval")
is_palindrome("Truc")

#Exercise 13

def amount_words(sentence, k):
    counter = 0
    sentence_list = sentence.split()
    for word in sentence_list:
        if len(word) > k:
            counter += 1
    print(counter)

amount_words('Do or do not there is no try', 2)


#Exercise 14
def dict_avg(dict_14):
    sum = 0
    for key in dict_14:
        sum += dict_14[key]
    print(sum/len(dict_14))
    
dict_avg({'a': 1,'b':2,'c':8,'d': 1})

#Exercise 15

def common_div(a,b):
    results = []
    for i in range(1,min(a,b)+1):
        if a%i == b%i == 0:
            results.append(i)
    print(results)

common_div(10,20)

#Exercise 16
def is_prime(number):
    result = True
    if number == 1 or number ==2:
        result = True
    else:
        for i in range(2,number):
            if number%i == 0:
                result = False
    print(result)

is_prime(11)
is_prime(12)

#Exercise 17
def weird_print(lst):
    result = []
    for i in range(0, len(lst),2):
        if lst[i]%2 == 0:
            result.append(lst[i])
    print(result)

weird_print([1,2,2,3,4,5])

#Exercise 18
def type_count(**kwargs):
    counts = {}
    for v in kwargs.values():
        tname = type(v).__name__
        counts[tname] = counts.get(tname, 0) + 1
    return counts


print(type_count(a=1, b='string', c=1.0, d=True, e=False))

#Exercise 19 

#Exercise 20
def password_format(string):
    result = ""
    for i in range (0,len(string)):
        result += "*"
    print(result)


password_format("mypassword")     