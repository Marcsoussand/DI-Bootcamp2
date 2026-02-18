def count_occurence():
    string = input("Please enter a sentence: ")
    character = input("Please enter a character: ")
    if character.isalpha() and len(character) == 1:
        counter = 0
        for letter in string:
            if letter == character:
                counter +=1
    else:
        print("Character invalid")
    print(counter)

count_occurence()