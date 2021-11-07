const inquirer = require("inquirer");
const fs = require("fs");
const generateHTML = require("./generateHTML");
let employees = [];

// function to create inquirer prompts
const getData = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "manager",
        message: "Please enter the team manager's name.",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Your team manager's name is required.");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "manId",
        message: "Please enter the team manager's ID.",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Your team manager's ID is required.");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "manEmail",
        message: "Please enter the team manager's email address.",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Your team manager's email address is required.");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "ManOffice",
        message: "Please enter the team manager's office number.",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Your team manager's office number is required.");
            return false;
          }
        },
      },
    ])
    .then(() => {
      addEngInt();
    });
};

const addEngInt = () => {
  return inquirer
    .prompt([
      {
        type: "list",
        name: "engineerIntern",
        message: "Would you like to add an engineer or intern?",
        choices: ["Engineer", "Intern", "No, that's everyone!"],
      },
    ])
    .then((response) => {
      if (response.engineerIntern === "Engineer") {
        engineer();
      } else if (response.engineerIntern === "Intern") {
        intern();
      } else {
        writeFile(data);
        return;
      }
    });
};

const engineer = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "engName",
        message: "Please enter the engineer's name.",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Your team engineer's name is required.");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "engId",
        message: "Please enter the engineer's ID.",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Your team engineer's ID is required.");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "engEmail",
        message: "Please enter the engineer's email address.",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Your team engineer's email address is required.");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "engGit",
        message: "Please enter the engineer's GitHub username.",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Your team engineer's GitHub username is required.");
            return false;
          }
        },
      },
    ])
    .then(() => {
      addEngInt();
    });
};

const intern = (employees) => {
  Intern = [];
  return inquirer
    .prompt([
      {
        type: "input",
        name: "intName",
        message: "Please enter the intern's name.",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Your team intern's name is required.");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "intId",
        message: "Please enter the intern's ID.",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Your team intern's ID is required.");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "intEmail",
        message: "Please enter the intern's email address.",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Your team intern's email address is required.");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "intSchool",
        message: "Please enter the intern's school name.",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Your team intern's school name is required.");
            return false;
          }
        },
      },
    ])
    .then((data) => {
      employees.push(new Intern(data));
      addEngInt();
    });
};

// function to write HTML file

const writeFile = (data) => {
  return new Promise((resolve, reject) => {
    fs.writeFile("./dist/Team-Info.html", generateHTML(data), (err) => {
      if (err) {
        reject(err);
        return;
      }
      resolve({
        ok: true,
        message: "File created!",
      });
    });
  });
};

getData()
 