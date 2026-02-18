str_cars = "Volkswagen, Toyota, Ford Motor, Honda, Chevrolet"

cars = list(str_cars.split(","))
print(cars)

print(f"Manufacturers in this list : {len(cars)}")

sorted_cars = sorted(cars,reverse = True)
print(sorted_cars)

o_counter = 0
i_counter = 0
for car in cars:
    if car.lower().find("o") != -1:
        o_counter += 1
for car in cars:
    if car.lower().find("i") != -1:
        i_counter += 1

print(f"Manufacturers with 'o' inside their name: {o_counter}")
print(f"Manufacturers with 'i' inside their name: {i_counter}")

#Bonus

bonus_cars = ["Honda","Volkswagen", "Toyota", "Ford Motor", "Honda", "Chevrolet", "Toyota"]

single_bonus_cars = list(set(bonus_cars))
print(single_bonus_cars)

print(", ".join(single_bonus_cars))