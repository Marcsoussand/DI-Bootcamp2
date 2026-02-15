is_a = False
sentence_bk=""

while is_a == False:
    sentence = input("Enter the longest sequence you may without an a  sentence: ")
    
    if sentence.find("a") != -1:
        print("There is an a in the sentence")
        is_a = True
    else:
        if len(sentence) > len(sentence_bk):
            sentence_bk = sentence
            print("Congratulations, your new sentence is longer than the previous one. ")
            print(f"Your longest sentence without an a is: {len(sentence_bk)} characters long.")