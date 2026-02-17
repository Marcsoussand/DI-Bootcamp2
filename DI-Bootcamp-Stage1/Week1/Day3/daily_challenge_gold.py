import string 
message = input("Type the message: ")
instruction = input("Do you want to encrypt or decrypt ? : (Please put D or E)")
cypher_message = ""

if instruction == 'E':
    for letter in message:
        if letter.isalpha():
            cypher_message += chr(ord(letter)+3)
        elif letter in string.punctuation or letter == " ":
            cypher_message += letter
        else:
            print("Please enter a valid message")
elif instruction == "D":
    for letter in message:
        if letter.isalpha():
            cypher_message += chr(ord(letter)-3)
        elif letter in string.punctuation or letter == " ":
            cypher_message += letter
        else:
             print("Please enter a valid message")
else:
    print("Please enter a valid instruction")
print(cypher_message)