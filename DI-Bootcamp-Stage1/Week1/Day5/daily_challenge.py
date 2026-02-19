#Challenge 1: Sorting

def input_string():
    strings = input("Please enter a string of words separated by commas: ")
    return strings

def split(word):
    return word.strip().split(",")

def sort_list(list):
    list.sort()
    return list

def join_list(list):
    return ",".join(list)

def main():
    input_str = input_string()
    result=join_list(sort_list(split(input_str)))
    print(result)

main()

#Challenge 2: Longest Word

def longest_word():
    str = input("Please enter a sentence: ")
    split_string = str.split(" ")
    longest_length = 0
    longest_return = ""
    for i in range(0,len(split_string)):
        length = len(split_string[i])
        if  length > longest_length:
            longest_return = split_string[i]
            longest_length = length
    return longest_return

longest_word()