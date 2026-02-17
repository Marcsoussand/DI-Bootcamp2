word = input("Please enter a word: ")

dictionary = {}
index = -1

for letter in word:
    if letter.isalpha():
        index += 1
        if letter in dictionary:
            dictionary[letter].append(index)
        else: 
            dictionary[letter] = [index]
    else: 
        print("Error, please write only legitimate words")
print(dictionary)

#Challenge 2 : Affordable Items
# items_purchase = {"Water": "$1", "Bread": "$3", "TV": "$1,000", "Fertilizer": "$20"}
# wallet = "$300"
# items_purchase = {"Apple": "$4", "Honey": "$3", "Fan": "$14", "Bananas": "$4", "Pan": "$100", "Spoon": "$2"}
# wallet = "$100"
items_purchase = {"Phone": "$999", "Speakers": "$300", "Laptop": "$5,000", "PC": "$1200"}
wallet = "$1"

items_cleaned = {item: price.replace("$","").replace(",","") for item,price in items_purchase.items() }
print(items_cleaned)
wallet_cleaned = int(wallet.replace("$",""))
basket = []

for item in items_cleaned:
    if int(items_cleaned[item]) < wallet_cleaned:
        basket.append(item)
        basket.sort()

if basket:
    print(basket)
else:
    print("Nothing")
    