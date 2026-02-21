import random

list_of_numbers = [random.randint(0, 10000) for _ in range(20000)]

target_number   = 3728

def find_pairs():
    result = []
    for number in list_of_numbers:
        target = target_number - number
        if target in list_of_numbers:
            result.append(number)
            result.append(target)
            print(f"{number} and {target} sums to the target_number {target_number}")
            list_of_numbers.remove(number)
            list_of_numbers.remove(target)

find_pairs()

