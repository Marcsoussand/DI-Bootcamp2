matrix_str = """
7ir
Tsi
h%x
i ?
sM# 
$a 
#t%"""

# list = [list(matrix_str.strip().split('\n'))]
matrix = [list(line) for line in matrix_str.strip().split('\n')]

read_matrix = ""
for i in range(0,len(matrix[0])):
    for item in matrix:
        if item[i].isalpha():
            read_matrix += item[i]
        else:
            read_matrix += " "
    

print(matrix)
print(matrix[0])
print(read_matrix)

