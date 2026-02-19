

grid=[[" "," "," "],[" "," "," "],[" "," "," "]]



def display_board():
    structure = f"""TIC TAC TOE
*****************
*   {grid[0][0]} | {grid[0][1]} | {grid[0][2]}   *
*  ---|---|---  *
*   {grid[1][0]} | {grid[1][1]} | {grid[1][2]}   *
*  ---|---|---  *
*   {grid[2][0]} | {grid[2][1]} | {grid[2][2]}   *
*****************

"""
    print(structure)

def player_input(player):
    print(f"Player {player}'s turn: ")
    while True:
        row = int(input("Enter row: (1-3)"))
        if 1 <= row <= 3:
            break
        else:
            print("Sorry, row should be between 1 and 3, try again")
    while True:
        column = int(input("Enter column: (1-3)"))
        if 1 <= column <= 3:
            break
        else: 
            print("Sorry, column should be between 1 and 3, try again")
    # print(row, column)
    return [row-1, column-1]

def check_win(board, player):
    for i in range(0,3):
        if board[i][0] == board[i][1] == board[i][2] and board[i][0] != " ":
            return True
        elif board[0][i] == board[1][i] == board[2][i] and board[0][i] != " ":
            return True
    if board[0][0] == board[1][1] == board[2][2] and board[0][0] != " ":
        return True
    elif board[2][0] == board [1][1] == board[0][2] and board[2][0] != " ":
        return True
    return False


def check_tie(player):
    if all(cell != " " for row in grid for cell in row) and not check_win(grid,player):
            print("Result is a Tie!")
            return True
    else:
        return False


def play():
    print("Welcome to TIC TAC TOE")
    player = "X"
    restart = None
    game_on = True
    while True:
        if restart == "Y": 
            grid[:] = [[" "," "," "],[" "," "," "],[" "," "," "]]
            player = "X"
            restart = None
            game_on = True
            continue
        elif restart == "N":
            print("Goodbye!")
            break
        while game_on:
            display_board()
            player_move = player_input(player)
            if (grid[player_move[0]][player_move[1]] == " "):
                grid[player_move[0]][player_move[1]] = player
                break
            else:
                print("This cell was already played, please try another one")
        display_board()
        if check_win(grid,player):
            print(f"Player {player} has win !!")
            restart = input("Do you want to play another game? (Y/N)").upper()
            game_on = False
        if check_tie(player):
            restart = input("Do you want to play another game? (Y/N)").upper()
            game_on = False
        if player == "X":
            player = "O"
        else:
            player = "X"

play()

        

