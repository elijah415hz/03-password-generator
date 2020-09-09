# 03-password-generator

![Password Generator Preview](/assets/passwordGeneratorPreview.png)

This is a simple javascript password generator. Upon clicking the "Generate Password" button it prompts the user to define the length and character types used for the password. It verifies the user's input to ensure that the password length is between 8 and 128, and that at least one password type is selected. It then uses a boolean array created by the users response to filter the character types to be used. 

`Math.random()` is then used to randomly generate each character of the password, which is then filled into the "Password" box.

The passwords this creates are truly gibberish as all characters are selected at (psuedo)random. The next step would be to replicate some more modern password generators that have the ability to create passwords that are easier to read and remember.

This page is deployed at https://elijah415hz.github.io/03-password-generator/


## Assignment from the client
### User Story

```
AS AN employee with access to sensitive data
I WANT to randomly generate a password that meets certain criteria
SO THAT I can create a strong password that provides greater security
```

### Acceptance Criteria

```
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN prompted for character types to include in the password
THEN I choose lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
```