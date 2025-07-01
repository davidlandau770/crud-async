import { question } from "./node_modules/readline-sync/lib/readline-sync.js";
import fs from "fs";

const path = "./db.txt";

function getName(message = "Enter your name: ") {
    const input = question(message);
    return input
}

function createUser(userName, path) {
    let exists = false;
    fs.readFile(path, "utf-8", (err, data) => {
        if (err) return console.log(err.message);
        const users = JSON.parse(data);
        users.forEach(user => {
            if (user === userName) {
                console.log("The name already exists.");
                exists = true;
            }
        });
        if (!exists) {
            users.push(userName);
            fs.writeFile(path, JSON.stringify(users), (err) => {
                if (err) return console.log(err);
                console.log("The name add successfully");
            })
        }
    })
}

function readFile(path) {
    fs.readFile(path, "utf-8", (err, data) => {
        if (err) return console.log(err.message);
        console.log(JSON.parse(data));
    })
}

function updateUser(oldName, newName, path) {
    let exists = false;
    fs.readFile(path, "utf-8", (err, data) => {
        if (err) return console.log(err.message);
        const users = JSON.parse(data);
        for (let i in users) {
            if (users[i] === oldName) {
                users[i] = newName;
                console.log("The name update successfully");
                fs.writeFile(path, JSON.stringify(users), (err) => {
                    if (err) return console.log(err);
                })
                exists = true;
            }
        };
        if (!exists) {
            console.log("The name not exists.");
        }
    })
}

function deleteUser(userName) {
    let exists = false;
    fs.readFile(path, "utf-8", (err, data) => {
        if (err) return console.log(err);
        const users = JSON.parse(data);
        for (let i in users) {
            if (users[i] === userName) {
                users.splice(i,1);
                fs.writeFile(path, JSON.stringify(users), (err) => {
                    if (err) return console.log(err);
                    console.log("The name deleted successfully");
                })
                exists = true;
            }
        }
        if (!exists) {
            console.log("The name not exists.");
        }
    })
}

function menu() {
    const input = question("Choose num from menu:\n1. create user.\n2. read file.\n3. update user.\n4. delete user.\n");
    switch (input) {
        case "1":
            createUser(getName(), path);
            break;
        case "2":
            readFile(path);
            break;
        case "3":
            updateUser(getName("Enter old name: "), getName("Enter new name: "), path);
            break;
        case "4":
            deleteUser(getName(), path);
        default:
            console.log("@@@@");
    }
}
// menu()







// נסיונות פרומיס
// function createUserPromise() {
//     return new Promise((resolve, reject) => {
//         const success = true;
//         if (success) {
//             resolve("good!");
//         } else {
//             reject("bad.");
//         }
//     });
// }
// doSomethingAsync()
//     .then((result) => {
//         console.log("good:", result);
//     })
//     .catch((error) => {
//         console.log("bad:", error);
//     });
