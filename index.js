const inquirer = require('inquirer');
const mysql = require('mysql2');
const cTable = require('console.table');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'rootPassword!',
    database: 'C12_Employee_db'
});

function init() {

    //Init funtion sets the portal function to run after the app has been started
    showPortal();

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

                console.table(results);
                if (!results){}
                else
                    showPortal();
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
                console.table(results);
                if (!results){console.log(err)}
                // console.log(results);
                // console.log(fields); 
            }
    );
    showPortal();
};

function viewEmployees() {

    connection.query('SELECT * FROM `employee`',
        function(err, results, fields) {

            console.table(results);

            console.log(results); // results contains rows returned by server
            console.log(fields); // fields contains extra meta data about results, if available
        }
    );

    showPortal();
    
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
    .then(({newDepartment}) =>{
        //Response is collected and posted to the department table with auto generated id (Primary Key)

        var sql = "INSERT INTO department (dep_name) VALUE ('"+newDepartment+"')";
        // var value = [];
        // value.push(newDepartment);
        console.log(newDepartment);
        

        connection.query(sql, [newDepartment], function (err, result) {
            if (err) 
                throw err;

            console.log("Congratulations! "+result+" has successfully been added to the database");
            showPortal();
        });
    });
    
};

function addRole () {
    // Inquirer prompt to collect department data being added to table
    inquirer.prompt([
        {
            type: "input",
            message: "( * New Role * ) Please enter the TITLE of the new role:",
            name: "roleTitle",
        },
        {
            type: "input",
            message: "( * New Role * ) Please enter the Salary of the new role (example: 1000.99):",
            name: "roleSalary",
        },
        {
            type: "input",
            message: "( * New Role * ) Please enter the DEPARTMENT NAME of the new role:",
            name: "roleDept",
        }
    ])
    .then(({roleTitle, roleSalary, roleDept}) =>{
        //Response is collected and posted to the department table with auto generated id (Primary Key)
        var preSQL = "SELECT * FROM department";
        console.log("preSQL "+preSQL);

        let departmentID;

        fetchDepart();
    
        function fetchDepart() {
            let departmentIdInner;
            departmentID = departmentIdInner;
            connection.query(preSQL, function(err, results, fields) {

                var test = results;
                console.log(results);
                roleResLoop(test, roleDept);
                // console.log("roleDepId: ", roleDepID);
                // console.log("depID: ", departmentID);
            });
        };

        function roleResLoop (test) {
            let departmentIdLoop;
            
                for (let i = 0; i < test.length; i++) {
                    console.log("test loop id: ",test[i].id);
                    console.log("test loop department name: ",test[i].dep_name);
                    var passData = test[i].id;
                    
                    if (test[i].dep_name === roleDept){
                        departmentIdLoop = {id: test[i].id, value: test[i].dep_name};
                        postRole(passData, departmentIdLoop);
                    }
                }
        };
        
        function postRole (depId, depIdLoop) {
            console.log("after query: ", depid);
            console.log("after query: ", depIdLoop);


            var sql = "INSERT INTO role (title, salary, department_id) VALUE (?)";
            let roleDepId = depId;
            
            let valueRole = [roleTitle, roleSalary, roleDepId];

            console.log("value "+valueRole);

            connection.query(sql, [valueRole], function (err, result) {
                if (err) 
                    throw err;

                console.log("Congratulations! "+result+" has successfully been added to the database");
                showPortal();
            });
        };
    });
};


function addEmployee () {
    inquirer.prompt([
        {
            type: "input",
            message: "( * New Employee * ) Please enter the new employee's FIRST NAME:",
            name: "empFirst",
        },
        {
            type: "input",
            message: "( * New Employee * ) Please enter the new employee's LAST NAME:",
            name: "empLast",
        },
        {
            type: "input",
            message: "( * New Employee * ) Please enter the new employee's ROLE title:",
            name: "empRole",
        },
        {
            type: "input",
            message: "( * New Employee * ) Please enter the new employee's MANAGER's ID# _leave blank if role is manager_:",
            name: "empMan",
        }
    ])
    .then(({empFirst, empLast, empRole, empMan}) =>{
        //Response is collected and posted to the department table with auto generated id (Primary Key)
        var preSQLrole = "SELECT * FROM role";
        console.log("preSQL (role): "+ preSQL);

        let roleID;

        fetchRoleID();
    
        function fetchRoleID() {
            let roleIdInner;
            roleID = roleIdInner;
            connection.query(preSQLrole, function(err, results, fields) {

                var roleIdResults = results;
                var roleInput = empRole;

                console.log(results);
                console.log(roleIdResults);
                // console.log("roleDepId: ", roleDepID);
                // console.log("depID: ", departmentID);


                roleResLoop(roleIdResults, roleInput);
                
            });
        };

        function roleResLoop (roleIdResults, roleInput) {
            let roleIdLoop;
            console.log(roleIdResults);
            console.log(roleInput);
            
                for (let i = 0; i < roleIdResults.length; i++) {
                    console.log("roleIdResults loop id: ",roleIdResults[i].department_id);
                    console.log("test loop department name: ",roleIdResults[i].title);
                    var roleLoopData = roleIdResults[i].id;
                    
                    if (roleIdResults[i].title === roleInput){
                        const roleIdOBJ = {id: roleIdResults[i].id, value: roleIdResults[i].title};
                        postRole(roleLoopData, roleIdOBJ);
                    }
                }
        };
        
        function postRole (roleLoopData, roleLoopOBJ) {
            console.log("after query (roleLoopData): ", roleLoopData);
            console.log("after query (roleLoopOBJ): "+roleLoopOBJ);

            var sql = "INSERT INTO employee (first_name, last_name, manager_id, role_id) VALUE (?)";
            let empRoleId = roleLoopData;
            
            let valueEmployee = [empFirst, empLast, empMan, empRoleId];

            console.log("value (Employee): "+valueEmployee);

            connection.query(sql, [valueEmployee], function (err, result) {
                if (err) 
                    throw err;

                console.log("Congratulations! "+result+" has successfully been added to the database");
                showPortal();
            });
        };
    });
};

function updateEmployee () {
    //sets an empty array as a 
    let empListRes = [];
    connection.query(
        'SELECT `first_name`, `last_name` FROM `employee`',
            function(err, results, fields) {
                // let empLast = results.last_name;
                // let empFirst = results.first_name;
                // let empFull = [empLast, empFirst];
                empListRes.push(results)
                console.log(results); // results contains rows returned by server
                console.log(fields); // fields contains extra meta data about results, if available
            }
      );
    empList.forEach(choiceBuild());
        function choiceBuild(data) {
          let choiceForm = ""+data.first_name+""+data.last_name+"";
          empListFull.push(choiceForm);
        };
    let empListFull = [];

    inquirer.prompt([
        {
            type: "list",
            message: "( * UPDATE EMPLOYEE * ) Which EMPLOYEE would you like to UPDATE?",
            choices: empListFull,
            name: "empUpdate",
        },
        {
            type: "input",
            message: "( * UPDATE EMPLOYEE * ) Please enter the UPDATED employee's ROLE title:",
            name: "empRoleUP",
        },
        {
            type: "input",
            message: "( * UPDATE EMPLOYEE * ) Please enter the UPDATED employee's MANAGER's ID# _leave blank if role is manager_:",
            name: "empManUP",
        }
    ])
    .then(({empUpdate, empRoleUP, empManUP}) => {

        //get role_id from role table using role title
        var preSQL1 = "SELECT * FROM `role` WHERE `title` = ?";
        let value = [empRoleUP];
        let empUpIDar = [];
        var empDepID = empUpIDar[0];
        connection.query(preSQL1, [value],
            
                function(err, results, fields) {
    
                    empUpIDar.push(results.id);
    
                    // // Logs to test
                    // console.log(results);
                    // console.log(fields); 
            }
        )
        console.log(empUpdate);
        let sql = "UPDATE employee SET role_id = ?, manager_Id = ?, WHERE first_name = ?";
        let value2 = [empDepID, empManUP, empUpdate];
        connection.query(sql, [value2], function (err, result) {
            if (err) 
                throw err;

            console.log("Congratulations! "+empUpdate+", has successfully been updated in the database");
            showPortal();
        });
    })
};
};


        
init();