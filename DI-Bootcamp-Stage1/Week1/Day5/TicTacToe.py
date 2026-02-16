

print("Welcome to TIC TAC TOE")
grid=[[""," "," "],[" "," "," "],[" "," "," "]]
player = "X"

structure = f"""TIC TAC TOE
*****************
*   {grid[0][0]} | {grid[0][1]} | {grid[0][2]}   *
*  ---|---|---  *
*   {grid[1][0]} | {grid[1][1]} | {grid[1][2]}   *
*  ---|---|---  *
*   {grid[2][0]} | {grid[2][1]} | {grid[2][2]}   *
*****************

Player {player}'s turn...

"""

print(structure)