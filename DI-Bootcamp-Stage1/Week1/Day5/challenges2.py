#Exercise 1
def pattern1(n=3):
    for i in range(1, n+1):
        print(' '*(n-i) + '*'*(2*i-1))


pattern1(3)

def pattern2(n=5):
    for i in range(1, n+1):
        print(' '*(n-i) + '*'*i)

# example
pattern2(5)

def pattern3(n=5):
    # ascending 1..n
    for i in range(1, n+1):
        print('*'*i)
    # repeat middle line
    print('*'*n)
    # descending with increasing left padding
    for i in range(n-1, 0, -1):
        print(' '*(n-i) + '*'*i)

# example
pattern3(5)

#Exercise 2

my_list = [2, 24, 12, 354, 233]
for i in range(len(my_list) - 1): # looping through the list
    minimum = i #initializing to the first item of the list
    for j in range( i + 1, len(my_list)): 
        if(my_list[j] < my_list[minimum]):
            minimum = j #Looking 
            if(minimum != i):
                my_list[i], my_list[minimum] = my_list[minimum], my_list[i]
print(my_list) #sorting 