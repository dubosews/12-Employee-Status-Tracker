# 12: Employee SQL Tracker (Node.js)

## Table of Contents
  1. [Description](#description) 
  2. [Installation](#installation)
  3. [Usage](#usage)  
  4. [Contributing](#contributing)
  5. [Tests](#tests)
  6. [License](#license)
  7. [Questions](#questions)
  8. [E-mail](#e-mail)
  9. [Walkthrough](#walkthrough)

## Description
This is a command line application for manager the Employees on your team. The client side of the application was developed with node.js, including the Inquirer npm, mySQL, mySQL2, Client.Table modules. This application can add job departments within the company on a database table, as well as an employee table and a table with the different roles that employees could have. There are ID values that are shared between certain tables to help connect the employees to their roles and the roles to the departments. It works for the most part, but a couple things got changed while i was cleaning up the code that led to a few minor bugs. REQUIRES npm || node_modules. Feel free to use this code and provide feedback on the github repository linked below. 

## Installation
To install this application after the repository files have been downloaded, open your command line application of choice (as long as it supports npm and Node_Modules), navigate the active directory to the root folder of the application and run the script: ```npm i```

## Usage
MYSQL must be installed on the computer you want to run the application on to allow it to communicate with the database. In the commmand line navigate to the application's root directory and run the script ```mySQL -u root -p``` root is the default mySQL user, depending on how the user installed mySQL this may be a different process for different users. After opening the mySQL command line, open the ./db directory in the application files, the file name "index.sql" contains the mySQL commands to initialize the database for the application and initialize the table schemas that the application will use to store the user's input data. Run each of the scripts in the mySQL command line, once completed, check the database to make suere everything installed and initialized correctly. If the database is properly initialized then you are ready to move on to the next step. In a new command line window, navigate back to the applications root directory, this is where the application needs to be started from each time you wish to use it. Once you're in the application root, run the script: ```node index.js``` this will initialize the application and open up the Inquirer prompt/ navigation page in the command line. Once the application has loaded, the rest of the process is up to the user. The scripts for the application were developed to work with the mySQL schemas that you should've setup before starting the applicaiton. There are a few problems that arose when i was cleaning up the code for the final repository commit, these bugs dont break the application, but a few features may not work properly. Please feel free to leave feedback and suggestions in the Github Repository. Thank you!

## Contributing
This is a medium-basic node.js CLI application, while its not going to be the #1 app in the app store, I did still spend A LOT of time developing this. So, please feel free to leave constructive feedback and suggestions in the repository page. Thank you for taking the time to check out my Application and reading the README.md file this far.

## Tests
There are no test scripts setup to run on this applcation, and to be honest I am not very confident when it comes to the topic of writing tests for applications, I am still in the process of learning the basics and getting comfortable with them.

## License
 

## Questions
[github icon](./github-icon-small.png)
Github Profile: [dubosews](https://github.com/dubosews)
Contact Email: [wsd10205@gmail.com](mailto:wsd10205@gmail.com)
Directions for reaching out with further questions:
    My email is provided in this README.md, but to be fair, I recieve so many marketing ad emails combined with company blasts, it is very easy for emails to slip through the crack, comments on the Repository page are the best way to contact.


## Walkthrough
I recorded a walkthrough video for this application and uploaded it to my personal Youtube channel, please feel free to check it out! If you enjoyed this application and/ or the walkthrough video please drop a like and hit the subscribe button with that notification bell on to get notified when I drop a new exciting node.js app build walkthrough.(and the occasional Rocke League/ Apex Legends highlight clips)

YOUTUBE VIDEO: https://youtu.be/hRqW2u2va-c