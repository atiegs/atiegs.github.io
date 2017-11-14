#Simple Mastermind for Portfolio
import random

def mastermind():

    tries = 0
   
    colors = {"b": "Blue",
              "g": "Green",
              "r": "Red",
              "g": "Green",
              "y": "Yellow",
            }

#Create Random Code             
    codegenerator = random.sample(list(colors.keys()), 4)
    print("You get 10 tries to crack the color code. Can you do it? Probably not.")
    for k, v in colors.items():
        print("{}: {}".format(k, v))
    while tries < 10:
        try:
            guess = list(input("Guess: "))
            if not (len(guess) == 4 and set(guess).issubset(set(colors))):  # check if all colors exist
                raise ValueError
        except ValueError:
            print("How about you work with the colors given to ya... Okay, bub?. \n")
            continue
        print("Your guess was: {}, {}, {}, {}.".format(*[colors[c] for c in guess]))
#Comparing guess to code
        if guess == codegenerator:
            print("You cracked it, now you're cursed. Ha! Jokes on you, chump!")
            break
        else:
            Correct = 0
            attempts = 10
            for color in range(4):
                if guess[color] == codegenerator[color]:
                    Correct += 1
                    attempts -= 1
                
            print ("\n You got {} correct. \n".format(Correct))
            print("You have {} attempts remaining. \n".format(attempts))
            tries += 1
#Fail to guess code
    print("Loser! HA! The code was {}.".format("".join(codegenerator)))


if __name__ == "__main__":
    mastermind()
    
