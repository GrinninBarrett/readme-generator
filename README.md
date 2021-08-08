# README Generator

This is a tool to create a high quality README file based on user input, using Node.js and the Inquirer npm package.


## Table of Contents
  * [Technologies](#technologies)
  * [Functionality](#functionality)
  * [Challenges](#challenges)
  * [Contact](#contact)
  * [License](#license)


## Technologies
* JavaScript
* Node.js
* Inquirer npm package


## Functionality
[App Demonstration Video](./assets/images/demo.gif)


## Challenges
- I couldn't format the text to be added to the generated README file as one normally would with JavaScript 
(by indenting lines within a function), because the indentations were read literally and translated to the README.
- I learned how to use the <code>map()</code> method a bit better, which took some research. It was used to prevent 
a user's email from being rendered as a link in the generated README.md preview by changing periods and the "@" symbol 
to their respective character entity.


## Contact
* Email - ctbarrett.tech@gmail.com


## License
Copyright 2021 Charles Tucker Barrett

[MIT License](https://opensource.org/licenses/MIT)