import random

def play():
    error_counter = 0
    letters_proposed = set()
    wordslist = ['correction', 'childish', 'beach', 'python', 'assertive', 'interference', 'complete', 'share', 'credit card', 'rush', 'south']
    word = random.choice(wordslist)
    hidden_word = "*"*len(word)
    if " " in word:
        indexes = [i for i, ch in enumerate(word) if ch == " "]
        lst = list(hidden_word)
        for i in indexes:
            lst[i] = " "
            hidden_word = "".join(lst)
    tries = 0
    while True:
        tries +=1
        print(word)
        print(hidden_word)
        if hidden_word == word:
            print(f"Wow you find it in {tries} tries with {error_counter} errors!")
            break
        new_letter = input("Please give me a new letter: ").strip().lower()
        if not new_letter.isalpha():
            error_counter +=1
        elif new_letter in letters_proposed:
            print("You already proposed this letter, try again")
        elif new_letter in word:
            indexes = [i for i, ch in enumerate(word) if ch == new_letter]
            lst = list(hidden_word)
            for i in indexes:
                lst[i] = new_letter
                hidden_word = "".join(lst)
            letters_proposed.add(new_letter)
        else:
            error_counter +=1
            letters_proposed.add(new_letter)
            print(f"The letter {new_letter} is not in the hidden word")
            print(HANGMANPICS[error_counter])
            if error_counter == 6:
                print("Sorry you're hanged, you lost!")
                break

HANGMANPICS = ['''
  +---+
  |   |
      |
      |
      |
      |
=========''', '''
  +---+
  |   |
  O   |
      |
      |
      |
=========''', '''
  +---+
  |   |
  O   |
  |   |
      |
      |
=========''', '''
  +---+
  |   |
  O   |
 /|   |
      |
      |
=========''', '''
  +---+
  |   |
  O   |
 /|\\  |
      |
      |
=========''', '''
  +---+
  |   |
  O   |
 /|\\  |
 /    |
      |
=========''', '''
  +---+
  |   |
  O   |
 /|\\  |
 / \\  |
      |
=========''']

play()


    