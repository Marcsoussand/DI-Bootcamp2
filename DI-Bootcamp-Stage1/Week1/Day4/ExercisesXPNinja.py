#Exercise1: What's your name ?

def get_full_name(first_name, last_name, middle_name = ""):
    print(first_name, middle_name, last_name)

get_full_name(first_name="john", middle_name="hooker", last_name="lee")

get_full_name(first_name="bruce", last_name="lee")

#Exercise2: From English to morse

#Exercise3: Box of Stars

def box_printer(*kwargs):
    max_length = 0
    for word in kwargs: 
        if len(word) > max_length:
            max_length = len(word)
    print("*"*(max_length+5))
    for word in kwargs:
        print("*",word," "*(max_length - len(word)),"*")
    print("*"*(max_length+5))

box_printer("Hello", "World", "in", "reallylongword", "a", "frame")


def insertion_sort(alist):
   for index in range(1,len(alist)):

     currentvalue = alist[index]
     position = index

     while position>0 and alist[position-1]>currentvalue:
         alist[position]=alist[position-1]
         position = position-1

     alist[position]=currentvalue

alist = [54,26,93,17,77,31,44,55,20]
insertion_sort(alist)
print(alist)

