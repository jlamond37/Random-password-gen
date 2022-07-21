Questions
---------

-Utilize similar paths and syntax as found in the module 3 mini challenge solution
-If password length is less than 8 or greater than 128, program should stop. 
-If users doesn’t select any character type, program should stop.
-User can’t reset password, but button will generate new password. This is already setup in source code.

Research
-special character passwords (owasp.org)
-how to use conditionals to check user entered length?
-how to use math.random to pick a random letter?
-how to randomly select from a specific group of characters (upper vs lower case)

Steps
-DECLARE vars
 0.string password (result) *strings function as an array of individual characters
 1.num passLength (user input)
 2.bool useUpper (user input)
 3.bool useLower (user input)
 4.bool useSpecial (user input)
 5.bool useNumber (user input)
 6.array lowerChars
 7.array upperChars
 8.array specialChars
 9.array numChars
 10.array choices (array containing all characters chosen by user)

-PROMPT user for password length

-CONFIRM user for lowerCase letters

-CONFIRM user for upperCase letters

-CONFIRM user for specialChars

-CONFIRM user for numbers

. . .

Tasks
-Research
-Break down app in smaller problems
-choose problem to start with
-psuedocope the problem
-code the problem
-debug the problem
-move on to next problem, repeat steps
-build app one problem at a time
-debug app
-create readme
-submit app
He said it would be a good idea to work with study group to determine the next steps as that section is incomplete
Q: What if user pass len < 8 or > 128?
A: Alert message and quit

Q: What is meant by "Special Characters?
A: Use OWASP list (excluding the space): https://owasp.org/www-community/password-special-characters

Q: What happens if the user doesn't choose ANY character types?
A: Alert user to choose at least one type and quit

Q: Can the user reset the password?
A: No. But the user can click the button again to generate a new password


Research
--------
- Research special characters. (See link above in Questions)
- Research how to make an alert pop up.
- How do I check the user entered length? (Hint: use conditional)
- How do I use Math.random() to pick a random letter?
- How to randomly select from a specific group of characters? (e.g. upper vs lower)

Steps
-----

DECLARE VARS
string password (the result)
num passLength (user input)
bool useUpper (user input)
bool useLower (user input)
bool useSpecial (user input)
bool useNumber (user input)
arr lowerChars
arr upperChars
arr specialChars
arr numChars
arr choices (array containing all characters chosen by the user)

PROMPT user for password length

CONFIRM if user would like lower case
IF user would like lower case
THEN add all lowerChars to choices

CONFIRM if user would like upper case

CONFIRM if user would like special characters

CONFIRM if user would like numbers

..

Tasks
-----
- Read requirements 3-5 times
- List questions to ask
- Make a list of items to research
- Get questions answerwed
- Do research
- Break down app into smaller problems
- Choose problem to start with
- Pseudocode the problem
- Code the problem
- Debug the problem
- Choose next problem and repeat steps
- Deploy the app
- Test the deployed app using the links i will submit
- Create a professional readme
- Submit both links (GitHub, and GitHub Pages) in canvas

GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page