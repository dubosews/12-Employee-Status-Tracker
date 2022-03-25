const inquirer = require('inquirer');
const mysql = require('mysql2');
const cTable = require('console.table');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'test'
});




inquirer.prompt([
    {
        type: "list",
        message: "Welcome to the Employee Management Portal! What task would you like to perform?",
        choices: [
            "* VIEW: All Departments *", 
            "* VIEW: All Roles *", 
            "* VIEW: All Employees *",
            "* ADD: Department *",
            "* ADD: Role *",
            "* ADD: Employee *",
            "* UPDATE: Employee Role *",
        ],
        name: "portalMain",
    },
])
.then((response) =>{

    var choice = response.portalMain

    if (choice === "* VIEW: All Departments *") {
        viewDepartments();
    }
    if (choice === "* VIEW: All Roles *") {
        viewRoles();
    }
    if (choice === "* VIEW: All Employees *") {
        viewEmployees();
    }
    if (choice === "* ADD: Department *") {
        addDepartment();
    }
    if (choice === "* ADD: Role *") {
        addRole();
    }
    if (choice === "* ADD: Employee *") {
        addEmployee();
    }
    if (choice === "* UPDATE: Employee Role *") {
        updateEmployee();
    }
});



function viewDepartments() {
    connection.query(
        'SELECT * FROM `department`',
        function(err, results, fields) {
        console.log(results); // results contains rows returned by server
        console.log(fields); // fields contains extra meta data about results, if available
    }
    );
};

function viewRoles() {
    connection.query(
    'SELECT * FROM `role`',
    function(err, results, fields) {
      console.log(results); // results contains rows returned by server
      console.log(fields); // fields contains extra meta data about results, if available
    }
  );
};

function viewEmployees() {

    connection.query(
    'SELECT * FROM `employee`',
    function(err, results, fields) {
      console.log(results); // results contains rows returned by server
      console.log(fields); // fields contains extra meta data about results, if available
    }
  );

  connection.query(
    'SELECT * FROM `role`',
    function(err, results, fields) {
      console.log(results); // results contains rows returned by server
      console.log(fields); // fields contains extra meta data about results, if available
    }
  );

};

function addDepartment () {
    connection.query(
        'SELECT * FROM `employee`',
        function(err, results, fields) {
          console.log(results); // results contains rows returned by server
          console.log(fields); // fields contains extra meta data about results, if available
        }
      );
}

function addRole () {
    connection.query(
        'SELECT * FROM `employee`',
        function(err, results, fields) {
          console.log(results); // results contains rows returned by server
          console.log(fields); // fields contains extra meta data about results, if available
        }
      );
}

function addEmployee () {
    connection.query(
        'SELECT * FROM `employee`',
        function(err, results, fields) {
          console.log(results); // results contains rows returned by server
          console.log(fields); // fields contains extra meta data about results, if available
        }
      );
}

function updateEmployee () {
    connection.query(
        'SELECT * FROM `employee`',
        function(err, results, fields) {
          console.log(results); // results contains rows returned by server
          console.log(fields); // fields contains extra meta data about results, if available
        }
      );
}

// create the connection to database

  
  // simple query
  connection.query(
    'SELECT * FROM `table` WHERE `name` = "Page" AND `age` > 45',
    function(err, results, fields) {
      console.log(results); // results contains rows returned by server
      console.log(fields); // fields contains extra meta data about results, if available
    }
  );
  
  // with placeholder
  connection.query(
    'SELECT * FROM `table` WHERE `name` = ? AND `age` > ?',
    ['Page', 45],
    function(err, results) {
      console.log(results);
    }
  );
    
    
    
    init();