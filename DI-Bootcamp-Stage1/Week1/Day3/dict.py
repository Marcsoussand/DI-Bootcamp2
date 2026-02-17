# rick = [
#     ['firstname', 'rick'],
#     ['last_name', 'sanchez']

# ]

# rick_dict = {
#     'first_name': 'Rick',
#     'last_name': 'Sanchez' 
# }

# print(rick_dict['first_name'])

# my_dog = {
#     'name': 'Rufus',
#     'age':4,
#     'best_friend': {
#         'name': 'Felix',
#         'age': 4.5
#     },
#     'favorite_foods': 'falafel'
# }

# print(my_dog['name'])

# person = {
#     'first':'ruben',
#     'last':'frisch',
#     'isPresent': False
# }

# rick_dict = {
#     'first_name':'Rick',
#     'last_name':'Sanchez'
# }
# print(f"The first name of rick is: {rick_dict['first_name']} and last name: {rick_dict['last_name']}")


# a_dict = {'color': 'blue', 'fruit': 'apple', 'pet':'dog'}

# print(a_dict.items())
# for item in a_dict:
#     print (item, '->', a_dict[item])
#     # Best performance
# for key, value in a_dict.items():
#     print(key, '->', value)


# shirts = [
#   {
#     'name': 'Awesome T-shirt 3000',
#     'size': 'S',
#     'price': 20
#   },
#   {
#     'name': 'Awesome T-shirt 3000',
#     'size': 'M',
#     'price': 25
#   },
#   {
#     'name': 'Awesome T-shirt 3000',
#     'size': 'L',
#     'price': 30
#   },
# ]

# sample_dict = { 
#    "class":{ 
#       "student":{ 
#          "name":"Mike",
#          "marks":{ 
#             "physics":70,
#             "history":80
#          }
#       }
#    }
# }

# print(sample_dict["class"]["student"]["marks"]["history"])

# sample_dict["class"]["student"]["marks"]["history"] = 100
# print(sample_dict["class"]["student"]["marks"]["history"])

# sample_dict['hair_color'] = 'white'
# print(sample_dict)

# sample_dict["class"]["student"]["marks"]["music"] = 90
# print(sample_dict)

# print('age' in my_dog) # True
# print(4 in my_dog) # False

# print(my_dog.keys())
# print(my_dog.values())
# print(my_dog.items())

# sample_dict = {
#   "name": "Kelly",
#   "age":25,
#   "salary": 8000,
#   "city": "New york"

# }
# keys_to_remove = ["name", "salary"]

# #Option1
# del sample_dict["name"]
# del sample_dict["salary"]
# #Option2
# for item in keys_to_remove:
#     del sample_dict[item]

# print(sample_dict)

# my_books = {
#   "title": "Harry Potter",
#   "author": "JK Rowling",
# }

# print(my_books.items())
# x,y = list(my_books.items())[0]
# print(x,y)
# for x, y in my_books.items():
#     print("the " + x + " is " + y)

# for key,value in my_books.items():
#     print("the " + key + " is " + value)

# for item in my_books.values():
#     print(item)

# my_list = ['xiao', 'jingwen', 'cheryl']
# print(list(enumerate(my_list)))

# for index, item in enumerate(my_list):
#     print(f"index {index} is {item}")

my_number = '1234'
my_list = []

for num in my_number:
    my_list.append(num)
print(my_list)

my_list= [num for num in my_number]
print(my_list)

my_list = [x for x in range(0,6)]
print(my_list)

my_list = [x**2 for x in range(0,6)]
print(my_list)

my_list = [x for x in range(0,11) if x%2 == 0]
print(my_list)

my_list = []

for i in [2, 3, 4]:
    for j in [100, 200, 300]:
        my_list.append(i*j)

print(my_list)




