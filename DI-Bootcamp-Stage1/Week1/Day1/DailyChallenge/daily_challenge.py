import random
user_input_init = input(" Enter a 10 characters string: ")
user_input_list = list(user_input_init)
random.shuffle(user_input_list)
user_input = "".join(user_input_list)
if len(user_input) < 10:
    print("String not long enough")
elif len(user_input) > 10:
    print("String too long")
else:
    print("Perfect string")
    print(f"first character: {user_input[0]} last character: {user_input[-1]}")
    str_to_show = ""
    for i in range(0, len(user_input), 1):
        str_to_show += user_input[i]
        print(str_to_show)


