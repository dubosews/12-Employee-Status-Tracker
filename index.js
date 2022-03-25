const inquirer = require('inquirer');
const mysql = require('mysql2');
const cTable = require('console.table');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'C12_Employee_db'
});


function showPortal () {
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
};


function viewDepartments() {
    connection.query(
        'SELECT * FROM `department`',
            function(err, results, fields) {

                cTable.table(results);

                // // Logs to test
                // console.log(results);
                // console.log(fields); 
        }
    );
};

function viewRoles() {
    connection.query(
        'SELECT * FROM `role`',
            function(err, results, fields) {
                
                cTable.table(results);

                // // console.logs to test response data
                // console.log(results);
                // console.log(fields); 
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

    // Inquirer prompt to collect department data being added to table
    inquirer.prompt([
        {
            type: "input",
            message: "( * New Department * ) Please enter the new department name:",
            name: "newDepartment",
        }
    ])
    .then((response) =>{
        //Response is collected and posted to the department table with auto generated id (Primary Key)

        var sql = "INSERT INTO department (dep_name) VALUE ?";
        var value = [response];

        connection.query(sql, [value], function (err, result) {
            if (err) 
                throw err;

            console.log("Congratulations! "+result+" has successfully been added to the database");
        });
    });
    
};

function addRole () {
    // Inquirer prompt to collect department data being added to table
    inquirer.prompt([
        {
            type: "input",
            message: "( * New Role * ) Please enter the NAME of the new role:",
            name: "roleName",
        },
        {
            type: "input",
            message: "( * New Role * ) Please enter the Salary of the new role:",
            name: "roleSalary",
        },
        {
            type: "input",
            message: "( * New Role * ) Please enter the DEPARTMENT NAME of the new role:",
            name: "roleDept",
        }
    ])
    .then((response) =>{
        //Response is collected and posted to the department table with auto generated id (Primary Key)

        var sql = "INSERT INTO department (dep_name) VALUE ?";
        var value = [response];

        connection.query(sql, [value], function (err, result) {
            if (err) 
                throw err;

            console.log("Congratulations! "+result+" has successfully been added to the database");
        });
    });
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