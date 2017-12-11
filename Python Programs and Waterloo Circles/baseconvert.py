def main():

    print ("Welcome to the base calculator thing. For this thing to work, you must first input a decimal, then you must indate which base you would like to convert to.")
    intToDigit = ['0','1','2','3','4','5','6','7','8','9',
                  'A','B','C','D','E','F','G','H','I','J',
                  'K','L','M','N','O','P','Q','R','S','T',
                  'U','V','W','X','Y','Z',]
    conversion = []
    d = int(input("Input a decimal: "))
    b = int(input("Select a base. Input 2-36: "))
    dv = 1
    z = 0
    while (dv*b <= d):
        dv = dv*b
        z += 1
    for i in range (z+1):
        conversion.append('0')
    while (d > 0):
        dv = 1
        z = 0
        while (dv*b <= d):
            dv = dv*b
            z += 1
        digit = int(d/dv)
        d -= digit*dv
        conversion[z] = intToDigit[digit]
    finalAnswer = ''
    for i in range (len(conversion)):
        finalAnswer = conversion[i] + finalAnswer
    print(finalAnswer)
    input()

    restart=input("Do you want to convert another decimal?").lower()
    if restart == "yes":
        main()

    else:
        exit()

main()
