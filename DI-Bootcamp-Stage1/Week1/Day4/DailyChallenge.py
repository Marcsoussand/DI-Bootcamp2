menu = {
    "espresso": 7.0,
    "latte": 12.0,
    "cappuccino": 10.0
}

def add_item():
    item = input("Please enter a new item: ")
    price = float(input(f"Please enter the price of {item}: "))
    if item in menu:
        print("Item already exists")
    else: 
        menu[item] = price
        print(f"{item} was added in the Menu with a price of: {price}")

def show_menu():
    if menu:
        print("Current menu:")
        for item in menu:
            print(f"{item} - {menu[item]}ְֳָּׂ₪")
    else:
        print("The Menu is empty")

def update_price():
    item = input("Which item do you want to update? ")
    if item in menu:
        price = float(input("What should be the new price? "))
        menu[item] = price
        print("Price updated!")
    else:
        print("Item not found")
    

def delete_item():
    item = input("Which item do you want to remove? ")
    if item in menu:
        menu.pop(item)
        print("Item deleted")
    else:
        print("Item not found")

def show_options():
    print("""What would you like to do?
          1. Show menu
          2. Add item
          3. Update price
          4. Delete item
          5. Exit""")
    
def run_coffee_shop(menu):
    while True:
        show_options()
        choice = int(input("Please choose (1-5)"))
        if choice == 1:
            show_menu()
        elif choice == 2:
            add_item()
        elif choice == 3:
            update_price()
        elif choice == 4:
            delete_item()
        elif choice == 5:
            print("Goodbye!")
            break
        else:
            print("Invalid choice, try again.")

run_coffee_shop(menu)