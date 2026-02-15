user_input = input(" Enter a 10 characters string: ")
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


