# Quartz Partment Shears for Portfolio
from random import randint
 #Computer choice
t = ["Quartz", "Parchment", "Shears"]

computer = t[randint(0,2)]
 #Player choices
player = False
while player == False:
    player = input("To play, type either Quartz, Parchment, or Shears.")
    if player == computer:
        print("Tie, you're both losers!")
    elif player == "Quartz":
        if computer == "Parchment":
            print("You lose!", computer, "covers", player, "[u're not good at this game]")
        else:
            print("Victory!", player, "smashes", computer, "[heck yeah]")
    elif player == "Parchment":
        if computer == "Shears":
            print("You lose! [U're a loser.]", computer, "cut", player)
        else:
            print("You win! [Good job, bud.]", player, "covers", computer)
    elif player == "Shears":
        if computer == "Quartz":
            print("You lose...chump", computer, "smashes", player)
        else:
            print("You won! [U sliced that computer]", player, "cut", computer)
    else:
        print("What? Idk what u're saying. Type the Queen's English, u peasant!")
# Replay function
    player = False
    computer = t[randint(0,2)]
